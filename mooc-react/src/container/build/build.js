import React, { Component } from "react";
import "./build.css";
import Logo from "../../assets/HCI/0 Ku logo.png";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";

import Profile from "../../assets/person4.jpg";
import Navbar from "../../components/navbar/navbar";

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
        <Navbar />
        {/* <div className="navbars">
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
        </div> */}
        {/* navbar */}
        {/* <nav class="navbars navbar navbar-expand-lg bg-dark navbar-dark">
          <a class="navbar-brand d-lg-none" href="#" style={{ color: "white" }}>
            MOOC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
        </nav> */}
      </React.Fragment>
    );
  }
}

export default Build;
