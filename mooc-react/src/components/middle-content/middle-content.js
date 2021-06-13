import React, { Component } from "react";
import "./middle-content.css";
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
      { picture: Hand, title: "update your profile" }, //if checkmarks clicked then point is 1 and if total point marks is equal to the length then do tick in weekbox
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
    week7: [
      { picture: Hand, title: "update your profile", point: 0 },
      { picture: Pdf, title: "update your profile", point: 0 },
      { picture: Hand, title: "update your profile", point: 0 },
      { picture: Chat, title: "update your profile", point: 0 },
      { picture: ILS, title: "update your profile", point: 0 },
    ],
    week7points: false,
    week7totalpoints: 0,
    week7Activities: [
      { picture: Hand, title: "update your profile", point: 0 },
      { picture: Pdf, title: "update your profile", point: 0 },
      { picture: Hand, title: "update your profile", point: 0 },
      { picture: Chat, title: "update your profile", point: 0 },
      { picture: ILS, title: "update your profile", point: 0 },
    ],
    week7Activitiespoints: false,
    week7Activitiestotalpoints: 0,
    week6: [
      { picture: Hand, title: "second", point: 0 },
      { picture: Pdf, title: "second", point: 0 },
      { picture: Hand, title: "second", point: 0 },
      { picture: Chat, title: "second", point: 0 },
      { picture: ILS, title: "second", point: 0 },
    ],
    week6points: false,
    week6totalpoints: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div className="left-side-shift font-small"> Your Progress</div>
        {this.state.upper.map((c, index) => (
          <Tickmarks key={index} title={c.title} logo={c.picture} />
        ))}
        <br />
        <br />
        {/* -------------------week 7----------------  */}
        <Week key={"week 7"} title="Week 7" allChecked={this.state.week7points}>
          {this.state.week7.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week7, index, 7)}
            />
          ))}
        </Week>
        <br />
        <br />
        {/* -------------------week 7 activities----------------  */}
        <Week
          key={"week 7 Activities"}
          title="Week 7 Activities"
          allChecked={this.state.week7Activitiespoints}
        >
          {this.state.week7.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() =>
                this.addPoints(this.state.week7Activities, index, 70)
              }
            />
          ))}
        </Week>
        <br />
        <br />
        {/*---------------------week 6--------------------- */}
        <Week key={"week 6"} title="Week 6" allChecked={this.state.week6points}>
          {this.state.week6.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week6, index, 6)}
            />
          ))}
        </Week>
        {console.log(this.state.week7[0].point)}
        {console.log(this.state.week6[0].point)}

        {console.log("totalpoints of 7 is", this.state.week7totalpoints)}
        {console.log("total points of 6 is ", this.state.week6totalpoints)}
        {console.log(this.state.week6points)}
      </React.Fragment>
    );
  }
  addPoints = (state, index, weekNumber) => {
    const old = [...state];
    old[index].point++;
    if (weekNumber == 7) {
      this.setState({ week7: old });
      this.calculateTotalPoints(state, 7);
    } else if (weekNumber == 70) {
      this.setState({ week7Activities: old });
      this.calculateTotalPoints(state, 70);
    } else if (weekNumber == 6) {
      this.setState({ week6: old });
      this.calculateTotalPoints(state, 6);
    }
  };
  calculateTotalPoints = (state, number) => {
    let sum = 0;
    state.map((c) => {
      if (c.point > 1) {
        c.point = 0;
      }
      sum = sum + c.point;
    });
    if (number == 7) {
      this.setState({ week7totalpoints: sum });
      //to check whether all boxes are ticked
      if (state.length == sum) {
        this.setState({ week7points: true });
      } else {
        this.setState({ week7points: false });
      }
    } else if (number == 70) {
      this.setState({ week7Activitiestotalpoints: sum });
      if (state.length == sum) {
        this.setState({ week7Activitiespoints: true });
      } else {
        this.setState({ week7Activitiespoints: false });
      }
    } else if (number == 6) {
      this.setState({ week6totalpoints: sum });
      if (state.length == sum) {
        this.setState({ week6points: true });
      } else {
        this.setState({ week6points: false });
      }
    }
  };
}

export default MiddleContent;
