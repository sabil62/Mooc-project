import React, { Component } from "react";
import "./main-content.css";
import Greybox from "../UI/greybox/greybox";
import SettingsLogo from "../../assets/HCI/batches side/settings.png";
import LevelUpLogo from "../../assets/HCI/batches side/Level up.png";

class MainContent extends Component {
  // state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-12">
            <Greybox logo={SettingsLogo} title={"Administration"}></Greybox>
            <div style={{ height: "1.4rem" }}></div>
            <Greybox logo={LevelUpLogo} title={"Things to do "}></Greybox>
          </div>
          <div className="col-lg-6 col-sm-8 col-12">tiger</div>
          <div className="col-lg-3 d-lg-block d-none">leopard</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainContent;
