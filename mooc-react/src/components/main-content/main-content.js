import React, { Component } from "react";
import "./main-content.css";
import Greybox from "../UI/greybox/greybox";
import SettingsLogo from "../../assets/HCI/batches side/settings.png";
import LevelUpLogo from "../../assets/HCI/batches side/Level up.png";
import {
  UserOutlined,
  CaretDownOutlined,
  FileMarkdownFilled,
  RocketFilled,
  CaretRightFilled,
} from "@ant-design/icons";

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
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-12">
            <Greybox logo={SettingsLogo} title={"Administration"}>
              <div style={{ lineHeight: "1.4" }}>
                <CaretDownOutlined /> Course Administration
                <div style={{ marginLeft: "18px" }}>
                  <div>
                    <UserOutlined style={{ marginRight: "3px" }} />
                    Unenrol me from COMP 341
                  </div>
                  <div>
                    <FileMarkdownFilled style={{ marginRight: "3px" }} />
                    Grades
                  </div>
                  <div>
                    <RocketFilled style={{ marginRight: "3px" }} />
                    Competiencies
                  </div>
                </div>
              </div>
            </Greybox>
            <Greybox logo={LevelUpLogo} title={"Things to do"}>
              {this.state.thingsTodo.map((c, index) => (
                <div key={index} className="things-to-do">
                  <div>
                    {" "}
                    <CaretRightFilled />
                    {c.topic}
                  </div>
                  <div style={{ opacity: "0.6" }}>
                    {c.daysRemaining} days rem
                  </div>
                </div>
              ))}
            </Greybox>
          </div>
          <div className="col-lg-6 col-sm-8 col-12">tiger</div>
          <div className="col-lg-3 d-lg-block d-none">leopard</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainContent;
