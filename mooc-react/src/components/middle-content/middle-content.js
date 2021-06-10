import React, { Component } from "react";
import "./middle-content.css";
import Tickmarks from "./tickmarks/tickmarks";
import Hand from "../../assets/HCI/updated profile.png";
import Pdf from "../../assets/HCI/PDF adobe.png";
import HCI from "../../assets/HCI/human computer interaction.png";
import Chat from "../../assets/HCI/General chat rooms.png";
import Discuss from "../../assets/HCI/Discussion.png";

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
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="left-side-shift font-small"> Your Progress</div>
        {this.state.upper.map((c, index) => (
          <Tickmarks key={index} title={c.title} logo={c.picture} />
        ))}
      </React.Fragment>
    );
  }
}

export default MiddleContent;
