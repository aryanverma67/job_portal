import React from "react";
import PageHeader from "../components/PageHeader";
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";

const Salaryestimate = () => {
  const [searchtext, setSearchtext] = useState("")
  const [salary, setsalary] = useState([]);
  useEffect(() => {
    fetch("salary.json").then(res=>res.json()).then(data=>setsalary(data))
    
  }, [searchtext])
  
  const handleSearch = () => {
    const filteredJobs = salary.filter((job) =>
      job.title.toLowerCase().includes(searchtext.toLowerCase())
    );
    setsalary(filteredJobs);
  };


  return (
    <div className="mx-w-screen-2xl container mx-auto xl:px-24 px-4">
               <Navbar/>

      <PageHeader title={"Estimate Salary"} path={"salary"} />
      <div className="mt-5">
        <div className="search-box p-2 mb-2 text-center">
          <input
            type="text"
            name="serach"
            id="serach"
            onChange={e=>setSearchtext(e.target.value)}
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full "
          />
          <button
          onClick={handleSearch}
          className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4 ">
            Search
          </button>
        </div>
      </div>
      {/* salary display card */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center
      my-12">
        {
          salary.map((data)=>(
            <div className="px-4 py-8 shadow" key={data.id} c>
              <h4 className="font-semibold text-xl ">{data.title}</h4>
              <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
              <div className="flex flex-wrap gap-4">
                <a href="/" className="underline">{data.status}</a>
                <a href="/" className="underline">{data.skills}</a>

              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Salaryestimate;
