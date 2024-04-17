const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    fullName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
},


{
    timestamps: true

});
module.exports = mongoose.mongoose.model("User",userSchema);