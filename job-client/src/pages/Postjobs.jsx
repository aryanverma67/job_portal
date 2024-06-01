import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Postjobs = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    fetch("http://localhost:5000/post-job", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if(result.acknowledged  !== true){
            alert("job posted succesfully!!!")
            navigate('/')
          }
          reset()
        });
  
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "Node.js", label: "Node.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
               <Navbar/>

      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex:Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum salary</label>
              <input
                type="text"
                placeholder="$512k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salaryType", { required: true })}
                className="create-job-input"
              >
                <option value="">choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex:New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex:2023"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Work Experience</label>
              <select
                {...register("experienceLevel", { required: true })}
                className="create-job-input"
              >
                <option value="">Select your experience level</option>
                <option value="work remotely">work remotely</option>
                <option value="Internship">Internship</option>
                
                <option value="No Experience">No Experience</option>
                <option value="any Experience">any Experience</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect
              className="create-job-input py-4"
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType", { required: true })}
                className="create-job-input"
              >
                <option value="">choose your Employment</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="paste your company logo"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              {...register("description")}
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              placeholder="job text description"
              defaultValue={"hey this job is only for yu this is developer job"}
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-lg">Job posted By</label>

            <input
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Postjobs;
