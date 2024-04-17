import React from 'react'
import Inputfield from '../components/Inputfield';

const JobPosting = ({handlechange,postingDate}) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now-24*60*60*1000)
    const sevenDaysAgo = new Date(now-7*24*60*60*1000)
    const thirtyDaysAgo = new Date(now-30*24*60*60*1000)

    //date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10)
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10)


  return (
    <div>
              <h4 className="text-lg font-medium mb-2">Date of posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handlechange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <Inputfield
          handlechange={handlechange}
          value={twentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          value={sevenDaysAgoDate}
          title="last 7 Days"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          title="Last Month"
          value={thirtyDaysAgoDate}
          name="test"
        />
    </div>

      
    </div>
  )
}

export default JobPosting
