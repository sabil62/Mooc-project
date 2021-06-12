import React from "react";
import "./week.css";

const week = (props) => {
  return (
    <div className="weekss">
      <input type="checkbox" id="week-checkbox" />

      <label className="week-label" for="week-checkbox">
        {props.title}
        {props.allChecked ? "---------------" : null}
      </label>
      <div className="week-content">{props.children}</div>
    </div>
  );
};

export default week;
