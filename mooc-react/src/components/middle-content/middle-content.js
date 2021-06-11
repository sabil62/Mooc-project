import React, { Component } from "react";
import "./middle-content.css";
import Weekbox from "../UI/weekbox/weekbox";
import Week from "../UI/week/week";
import Tickmarks from "./tickmarks/tickmarks";
import Hand from "../../assets/HCI/updated profile.png";
import Pdf from "../../assets/HCI/PDF adobe.png";
import HCI from "../../assets/HCI/human computer interaction.png";
import Chat from "../../assets/HCI/General chat rooms.png";
import Discuss from "../../assets/HCI/Discussion.png";
import ILS from "../../assets/HCI/ILS.png";
import Sound from "../../assets/HCI/Sound or Forum.png";

class MiddleContent extends Component {
  state = {
    upper: [
      { picture: Hand, title: "update your profile" },
      { picture: Pdf, title: "COURSE MANUAL" },
      { picture: HCI, title: "Human Computer Interaction" },
      { picture: Chat, title: "General Chat room" },
      { picture: Discuss, title: "Announcements" },
      { picture: Pdf, title: "MINI RESEARCH GUIDELINESS" },
      { picture: Pdf, title: "SYLLABUS" },
      { picture: ILS, title: "ILS" },
      { picture: ILS, title: "VARK" },
      { picture: ILS, title: "GR" },
      { picture: Discuss, title: "Group Discussion Forum For Project" },
      { picture: ILS, title: "online content" },
      { picture: ILS, title: "Usability Testing of MOOC system" },
      {
        picture: ILS,
        title: "Usability Testing of KU elf system(elf.ku.edu.np)",
      },
      { picture: Pdf, title: "INTERNAL I" },
      { picture: Sound, title: "INTERNAL I Assignment Solution" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="left-side-shift font-small"> Your Progress</div>
        {this.state.upper.map((c, index) => (
          <Tickmarks key={index} title={c.title} logo={c.picture} />
        ))}
        <Weekbox />
        <Week />
      </React.Fragment>
    );
  }
}

export default MiddleContent;
