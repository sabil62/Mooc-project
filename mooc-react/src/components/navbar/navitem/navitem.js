import React from "react";
import "./navitem.css";

const navitem = (props) => {
  let classOutside = props.col ? "navitem-outside-column" : "navitem-outside";
  let classInside = props.col ? "navitem-inside-column" : "navitem-inside";
  return (
    <div className={classOutside}>
      <div className={classInside}>{props.children}</div>
    </div>
  );
};

export default navitem;
