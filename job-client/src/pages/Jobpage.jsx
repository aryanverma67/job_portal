import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";
import { IoBagSharp } from "react-icons/io5";

const Jobpage = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    // Fetch job details based on ID when component mounts
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  const handleApplyNow = async () => {
    try {
      const { value: file } = await Swal.fire({
        title: "Upload your CV",
        input: "file",
        inputAttributes: {
          accept:
            "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        preConfirm: (file) => {
          return new Promise((resolve, reject) => {
            // Simulate file upload process (replace with actual file upload logic)
            setTimeout(() => {
              resolve(file);
            }, 2000);
          });
        },
        allowOutsideClick: false,
      });

      if (file) {
        Swal.fire({
          icon: "success",
          title: "Job Applied successfully!",
          html: `Wait for recruiter confirmation.`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Job page"} path={"single job "} />
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:items-center my-8">
        <div className=" h-full text-lg  ">
          <div className="flex flex-col gap-3">
            <h1 className="text-blue text-2xl ">Job Details</h1>
            <h2 className="text-gray-600">Job id : {job._id}</h2>
            <h1 className="text-gray-600 font-bold mb-2"> {job.jobTitle}</h1>
          </div>

          <div className="flex gap-3">
            <IoBagSharp className="w-5 h-5 text-black" />

            <h1 className="text-blue">Job Type</h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="bg-purple-800 text-white px-8 py-2 mt-4">
              {job.employmentType}
            </h1>
            <button
              onClick={handleApplyNow}
              className="bg-blue px-8 py-2 text-white mt-4"
            >
              Apply Now
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-3 flex-wrap ">
            <h2 className="text-gray-600 mb-1 ml-4 ">
              Company: <span className="text-blue ">{job.companyName}</span>
            </h2>
            <h2 className="text-gray-600 mb-1 ml-4">
              salaryType:<span className="text-blue"> {job.salaryType}</span>
            </h2>
            <h2 className="text-gray-600 mb-1 ml-4">
              jobLocation:<span className="text-blue"> {job.jobLocation}</span>
            </h2>
            <h2 className="text-gray-600 mb-1 ml-4">
              postingDate:<span className="text-blue"> {job.postingDate}</span>
            </h2>
            <h2 className="text-gray-600 mb-1 ml-4">
              experienceLevel:
              <span className="text-blue"> {job.experienceLevel}</span>
            </h2>
            <h2 className="text-gray-600 mb-1 ml-4">
              MinSalary: <span className="text-blue">{job.minPrice}</span>
            </h2>
            <h2 className="text-gray-600 mb-1 ml-4">
              MaxSalary:<span className="text-blue"> {job.maxPrice}</span>
            </h2>
          </div>
        </div>
        <div className=" h-full w-full">
          <div>
            <h1 className=" text-2xl mt-2 ml-4  text-gray-900  ">
              Description
            </h1>
            <p className="mt-4 text-gray-600">{job.description}</p>
          </div>
          <div>
            <h1 className="text-2xl mt-2 ml-4  text-gray-900 ">
              Future Growth
            </h1>
            <p className="mt-4 text-gray-600">
              In the rapidly evolving landscape of information technology,
              exponential growth is not merely a projection but a reality. As
              emerging technologies like artificial intelligence, quantum
              computing, and blockchain continue to mature, the IT sector is
              poised for unprecedented expansion. With the increasing reliance
              on digital solutions across industries and the ever-growing demand
              for skilled professionals, the future of IT promises a trajectory
              of sustained innovation and remarkable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobpage;
