import React from 'react'
import Inputfield from '../components/Inputfield'

const Workexp = ({handlechange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
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
          value="Any experience"
          title="Any experience"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          value="Internship"
          title="Internship"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          title="Work remotely"
          value="Work remotely"
          name="test"
        />
                <Inputfield
          handlechange={handlechange}
          title="No Experience"
          value="No Experience"
          name="test"
        />

      </div>
    </div>
  )
}

export default Workexp
