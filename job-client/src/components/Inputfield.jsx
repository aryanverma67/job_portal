import React from "react";

const Inputfield = ({ handlechange, value, title, name }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="{name}"
          value={value}
          onChange={handlechange}
        />
        <span className="checkmark"></span>{title}
      </label>
    </div>
  );
};

export default Inputfield;
