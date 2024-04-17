import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Homepage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedcategory, setselectedcategory] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [currentpage, setcurrentpage] = useState(1);
  const itemPerpage = 6;

  useEffect(() => {
    setisLoading(true);
    fetch("http://localhost:5000/all-jobs")//we use after corection fetch http://localhost:3000/all-jobs this
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setisLoading(false)
      })
      .catch((error) => {
        console.error("Error loading jobs:", error);
      });
  }, []);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Filter jobs by title
  const filterItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filtering
  const handlechange = (e) => {
    setselectedcategory(e.target.value);
  };

  // Buttons filtering
  const handleclick = (e) => {
    setselectedcategory(e.target.value);
  };

  //calculate the index range
  const calculpageRange = ()=>{
    const startIndex = (currentpage-1)+ itemPerpage;
    const endIndex = startIndex+itemPerpage;
    return (startIndex,endIndex)
  };
  //fucntion for the next page
  const nextpage = ()=>{
    if(currentpage<Math.ceil(filterItems.length/itemPerpage)){
      setcurrentpage(currentpage + 1);
    }
  }
  //function for previous page
  const prevPage = ()=>{
    if(currentpage>1){
      setcurrentpage(currentpage - 1)
    }
  }

  // Main function for filtering data
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filterItems;
    }

    // Selected category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          experienceLevel.toLowerCase()===selected.toLowerCase()||
          employmentType.toLowerCase() === selected.toLowerCase()
          || salaryType.toLowerCase() === selected.toLowerCase()
    );
    }
    //slice the data based on current page 
    const {startIndex,endIndex} = calculpageRange();
    filteredJobs = filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedcategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className=" bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
      <div className="bg-white p-4 rounded " >
        <Sidebar handlechange ={handlechange} handleclick = {handleclick}/>
      </div>
      <div className="col-span-2 bg-white p-4 rounded-sm">
        {
            isLoading ? (<p className="font-medium">Loading....</p>):result.length> 0 ?(<Jobs result={result} />):<>
            <h3 className="font-bold text-lg mb-2">{result.length} Jobs</h3>
            <p>no data found </p>
            </>

        }
     {/* pgination */}
        {
        result.length > 0 ? (
          <div className="mt-4 space-x-8 flex justify-center">
            <button className="hover:underline"  onClick={prevPage} disabled={currentpage===1}>Previous</button>
            <span className="mx-2">Page {currentpage} of {Math.ceil(filterItems.length/itemPerpage)}</span>
            <button className="hover:underline" onClick={nextpage} disabled ={currentpage===Math.ceil(filterItems.length/itemPerpage)}>Next</button>
          </div>

        ):""
        }

        </div>
        
      <div className="bg-white p-4 rounded " >
        <Newsletter/>

      </div>
    </div>
    </div>
  );
};

export default Homepage;
