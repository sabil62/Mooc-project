import React, { Component } from "react";
import "./main-content.css";
import "../left-content/left-content";
import LeftContent from "../left-content/left-content";
import RightContent from "../right-content/right-content";
import MiddleContent from "../middle-content/middle-content";

class MainContent extends Component {
  state = {
    thingsTodo: [
      { topic: "Internal I", daysRemaining: 7 },

      { topic: "Quiz | Week 7", daysRemaining: 7 },
      { topic: "Quiz | Week 3", daysRemaining: 7 },
      { topic: "VARK", daysRemaining: 7 },
      { topic: "ILS", daysRemaining: 7 },
      { topic: "Discussion week-4", daysRemaining: 7 },
    ],
    courseModule: [
      { points: 20, achievement: "Course module viewed", time: 1 },
      { points: 20, achievement: "Course module viewed", time: 1 },
      { points: 40, achievement: "Course module completed", time: 2 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-12">
            <LeftContent thingsTodo={this.state.thingsTodo} />
          </div>
          <div className="col-lg-6 col-sm-8 col-12">
            <MiddleContent />
          </div>
          <div className="col-lg-3 d-lg-block d-none">
            <RightContent courseModule={this.state.courseModule} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainContent;
