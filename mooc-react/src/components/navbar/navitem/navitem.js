import React from "react";
import "./navitem.css";

const navitem = (props) => {
  return (
    <div className="navitem-outside">
      <div className="navitem-inside">{props.children}</div>
    </div>
  );
};

export default navitem;
