import React from "react";
import "../app.css";
import Inputfield from "../components/Inputfield";

const Location = ({ handlechange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
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
          value="delhi"
          title="delhi"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          value="mumbai"
          title="mumbai"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          title="kolkata"
          value="kolkata"
          name="test"
        />
        <Inputfield
          handlechange={handlechange}
          value="noida"
          title="noida"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
