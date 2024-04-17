import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPosting from './jobPosting'
import Workexp from './Workexp'
import EmploymentType from './EmploymentType'

const Sidebar = ({handlechange,handleclick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>

      <Location handlechange = {handlechange}/>
      <Salary handlechange ={handlechange} handleclick = {handleclick}/>
      <JobPosting handlechange = {handlechange}/>
      <Workexp handlechange={handlechange}/>
      <EmploymentType handlechange={handlechange}/>

    </div>
  )
}

export default Sidebar
