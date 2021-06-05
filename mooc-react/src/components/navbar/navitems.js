import { CaretDownOutlined } from "@ant-design/icons";
import React from "react";
import Navitem from "./navitem/navitem";
import "./navitems.css";

const navitems = (props) => {
  let navclass = props.column ? "navitems-column" : "navitems-row";
  return (
    <React.Fragment>
      <div className={navclass}>
        <Navitem>Home</Navitem>
        <Navitem>Dashboard</Navitem>
        <Navitem>Events</Navitem>
        <Navitem>
          Courses
          <div style={{ width: "3.5px", display: "inline-block" }}></div>
          <CaretDownOutlined style={{ fontSize: "13px" }} />
        </Navitem>
      </div>
    </React.Fragment>
  );
};

export default navitems;
