import { CaretDownOutlined } from "@ant-design/icons";
import React from "react";
import Navitem from "./navitem/navitem";

const navitems = (props) => {
  return (
    <React.Fragment>
      <Navitem>Home</Navitem>
      <Navitem>Dashboard</Navitem>
      <Navitem>Events</Navitem>
      <Navitem>
        Courses
        <CaretDownOutlined />
      </Navitem>
    </React.Fragment>
  );
};

export default navitems;
