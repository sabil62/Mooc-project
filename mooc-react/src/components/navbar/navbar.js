import React from "react";
import Navitem from "./navitem/navitem";
import "./navitems.css";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";

const navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Navitem>Home</Navitem>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Navitem>Dashboard</Navitem>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Navitem>Events</Navitem>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Navitem>
                Courses
                <div style={{ width: "3.5px", display: "inline-block" }}></div>
                <CaretDownOutlined style={{ fontSize: "13px" }} />
              </Navitem>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                COMP 304
              </a>
              <a class="dropdown-item" href="#">
                COMP 310
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                COMP 405
              </a>
            </div>
          </li>
        </ul>
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
    </nav>
  );
};

export default navbar;
