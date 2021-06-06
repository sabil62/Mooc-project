import { CaretDownOutlined } from "@ant-design/icons";
import React from "react";
import Navitem from "./navitem/navitem";
import "./navitems.css";

const navitems = (props) => {
  let navclass = props.column ? "navitems-column" : "navitems-row";
  let colOrNot = props.column ? true : false;
  return (
    <React.Fragment>
      <div className={navclass}>
        <Navitem col={colOrNot}>Home</Navitem>
        <Navitem col={colOrNot}>Dashboard</Navitem>
        <Navitem col={colOrNot}>Events</Navitem>
        <Navitem col={colOrNot}>
          Courses
          <div style={{ width: "3.5px", display: "inline-block" }}></div>
          <CaretDownOutlined style={{ fontSize: "13px" }} />
        </Navitem>
      </div>
    </React.Fragment>
  );
};

export default navitems;
