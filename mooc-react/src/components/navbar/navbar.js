import React from "react";
import Navitem from "./navitem/navitem";
import "./navitems.css";
import {
  CaretDownOutlined,
  SearchOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbars-boo">
      <a
        class="navbar-brand d-lg-none"
        href="#"
        style={{ color: "white", padding: "0 30px" }}
      >
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
        <BarsOutlined style={{ color: "white" }} />
      </button>

      <div
        class="collapse navbar-collapse id navbar-display"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
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
              class="nav-link"
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
