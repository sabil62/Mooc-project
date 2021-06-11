import React from "react";
import "./week.css";

const week = (props) => {
  return (
    <div className="weekss">
      <input type="checkbox" id="week-checkbox" />

      <label className="week-label" for="week-checkbox">
        Week 7
      </label>
      <div className="week-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
        reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ipsum, reiciendis!Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ipsum, reiciendis!Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ipsum, reiciendis!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Ipsum, reiciendis!Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Ipsum, reiciendis!
      </div>
    </div>
  );
};

export default week;
