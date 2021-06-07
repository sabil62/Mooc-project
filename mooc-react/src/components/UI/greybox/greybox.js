import React from "react";
import "./greybox.css";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";

const greybox = (props) => {
  return (
    <div className="greybox">
      <div className="greybox-up-title">
        <div className="greybox-left-title">
          <img
            src={props.logo}
            style={{ height: "36px", marginRight: "1rem" }}
          />
          {props.title}
        </div>
        <div className="greybox-right-title">
          <DownSquareOutlined />
          <UpSquareOutlined />
        </div>
      </div>
      <div style={{ margin: "10px 16px" }}>
        <div className="greybox-line"></div>
        <div className="greybox-line dark"></div>
      </div>
    </div>
  );
};

export default greybox;
