import React from 'react'
import Inputfield from '../components/Inputfield'


const EmploymentType = ({handlechange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Employment Type</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handlechange}
        />
        <span className="checkmark"></span>All
      </label>
      <Inputfield
        handlechange={handlechange}
        title="Full-time"
        value="full-time"
        name="test"
      />
      <Inputfield
        handlechange={handlechange}
        value="temporary"
        title="Temporary"
        name="test"
      />
      <Inputfield
        handlechange={handlechange}
        title="Part-time"
        value="part-time"
        name="test"
      />
    </div>
  </div>

  )
}

export default EmploymentType
