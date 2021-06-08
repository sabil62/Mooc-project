import React from "react";
import "./leftContent.css";
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

const leftContent = (props) => {
  return (
    <React.Fragment>
      <Greybox key={1} logo={SettingsLogo} title={"Administration"}>
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
      <Greybox key={2} logo={LevelUpLogo} title={"Things to do"}>
        {props.thingsTodo.map((c, index) => (
          <div key={index} className="things-to-do">
            <div>
              {" "}
              <CaretRightFilled />
              {c.topic}
            </div>
            <div style={{ opacity: "0.6" }}>{c.daysRemaining} days rem</div>
          </div>
        ))}
      </Greybox>
    </React.Fragment>
  );
};

export default leftContent;
