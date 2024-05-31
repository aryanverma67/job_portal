const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const { ObjectId } = require('mongodb');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000; 
const jwt = require('jsonwebtoken');
const {authentication} = require("./utils/utilities.js")
const User = require("./models/User.model.js");

// Middleware setup
app.use(cors());
app.use(express.json());

// Mongoose connection
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.mongoUrl);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
connectToDatabase();

// Define schema
const postjobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  companyLogo: { type: String },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true },
  salaryType: { type: String, required: true },
  jobLocation: { type: String },
  experienceLevel: { type: String, required: true },
  employmentType: { type: String, required: true },
  postingDate: { type: Date, default: Date.now },
  description: { type: String, required: true },
  postedBy: { type: String },
  
});

const PostJob = mongoose.model('PostJob', postjobSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Our server is running!');
});

app.get('/all-jobs', async (req, res) => {
  try {
    const jobs = await PostJob.find({});
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).send({ message: "Error fetching jobs" });
  }
});
//get single job using id
  app.get('/all-jobs/:id',async(req,res)=>{
    const id = req.params.id;
    const job = await PostJob.findOne({ _id: id });
    res.send(job)

  })

  
app.post('/post-job', async (req, res) => {
  try {
    const job = new PostJob(req.body);
    const savedJob = await job.save();
    console.log(savedJob);
    res.status(200).json(savedJob);
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).send({ message: "Error posting job" });
  }
});

app.get('/my-jobs/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const jobs = await PostJob.find({ postedBy: email });
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching user's jobs:", error);
    res.status(500).send({ message: "Error fetching user's jobs" });
  }
});
// delete a job
app.delete("/job/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await PostJob.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).send({ message: "Error deleting job" });
  }
});
//update a job
app.patch("/update-job/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const jobdata = req.body;
    const updatedJob = await PostJob.findByIdAndUpdate(id, jobdata, { new: true });
    res.json(updatedJob);
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).send({ message: "Error updating job" });
  }
});

//create account
app.post("/Signup",async (req,res)=>{
  const {fullName,email,password} = req.body;
  if(!fullName){
    return res.status(400).json({error:true,message:"fullname is required"});
  }
  if(!email){
    return res.status(400).json({error:true,message:"email is required"});
  }
  if(!password){
    return res.status(400).json({error:true,message:"password is required"});
  }
  const isUser = await User.findOne({email:email});
  if(isUser){
    return res.json({
      error: true,
      message: "User already exist"
    });
  }
   const user = new User ({
    fullName,
    email,
    password,

});
await user.save();
const accesstoken = jwt.sign({
  user
},process.env.ACCESS_TOKEN_SECRET,{
  expiresIn: "3600m",
});
return res.json({
  error:false,
  user,
  accesstoken,
  message:"Registration successfull",
});
})

//login
app.post("/login",async (req,res)=>{
  const {email,password} = req.body;
  if(!email){
    return res.status(400).json({error:true,message:"email is required"});
  }
  if(!password){
    return res.status(400).json({error:true,message:"password is required"});
  }
 const userinfo = await User.findOne({email:email});
 if(!userinfo){
  return res.status(400).json({message:"user not found"});


 }
 if(userinfo.email == email && userinfo.password == password){
  const user  = {user:userinfo};
  const accesstoken = jwt.sign({
    user
  },process.env.ACCESS_TOKEN_SECRET,{
    expiresIn: "3600m",
  });
  return res.json({
    error:false,
    user,
    accesstoken,
    message:"login successfull",
  });
  
  
 }else{
  return res.json({
    error:true,
    
    message:"invaild user",
  });


 }



})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
