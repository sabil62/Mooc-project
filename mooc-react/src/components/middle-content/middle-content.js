import React, { Component } from "react";
import "./middle-content.css";
import Tickmarks from "./tickmarks/tickmarks";

class MiddleContent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="left-side-shift font-small"> Your Progress</div>
        <Tickmarks />
      </React.Fragment>
    );
  }
}

export default MiddleContent;
