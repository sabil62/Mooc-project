import React, { Component } from "react";
import "./build.css";
import Logo from "../../assets/HCI/0 Ku logo.png";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";

import Profile from "../../assets/person4.jpg";
import Navitems from "../../components/navbar/navitems";

class Build extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo-and-info">
          <img src={Logo} style={{ height: "110px" }} alt="ku logo" />
          <div className="profile-box ">
            <div className="profile-name">
              <div className="profile-name-flex">
                Bob Sing
                <span style={{ width: "5px" }}></span>
                <CaretDownOutlined style={{ fontSize: "1rem" }} />
              </div>
            </div>
            <div className="profile-photo">
              <img src={Profile} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <h1 className="kathmandu-heading">
          Kathmandu University Open Online Courses
        </h1>
        <br />
        <div className="navbar">
          <div className="navbar-side">
            <Navitems />
          </div>
          <div>
            <input
              type="text"
              className="input-text"
              placeholder="Search Courses"
            />
            <div className="navbar-search">
              <SearchOutlined
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  padding: "11px",
                  paddingTop: "18px",
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Build;
