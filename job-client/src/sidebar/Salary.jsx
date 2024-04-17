import React from 'react'
import Button from './Button'
import Inputfield from '../components/Inputfield'

const Salary = ({handlechange,handleclick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            
        <Button onclickHandler={handleclick} value="" title='Hourly'/>
        <Button onclickHandler={handleclick} value="Monthly" title='Monthly'/>
        <Button onclickHandler={handleclick} value="Yearly" title='Yearly'/>
        </div>
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
          value={20000}
          title="<20000"
          name="test2"
        />
                <Inputfield
          handlechange={handlechange}
          value={50000}
          title="<50000"
          name="test2"
        />
                <Inputfield
          handlechange={handlechange}
          value={80000}
          title="<80000"
          name="test2"
        />
        <Inputfield
          handlechange={handlechange}
          value={100000}
          title="<100000"
          name="test2"
        />



        </div>
      
    </div>
  )
}

export default Salary
