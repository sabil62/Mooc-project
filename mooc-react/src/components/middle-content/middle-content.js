import React, { Component } from "react";
import "./middle-content.css";
import WeekBoxs from "../UI/week/week";
import Tickmarks from "./tickmarks/tickmarks";
import Hand from "../../assets/HCI/updated profile.png";
import Pdf from "../../assets/HCI/PDF adobe.png";
import HCI from "../../assets/HCI/human computer interaction.png";
import Chat from "../../assets/HCI/General chat rooms.png";
import Discuss from "../../assets/HCI/Discussion.png";
import ILS from "../../assets/HCI/ILS.png";
import Sound from "../../assets/HCI/Sound or Forum.png";
import Video from "../../assets/HCI/Video.png";
import Earth from "../../assets/HCI/Earth file.png";
import Main from "../../assets/HCI/Main front.png";
import Quiz from "../../assets/HCI/quiz.png";
import Document from "../../assets/HCI/additional questions.png";
import Switch from "react-bootstrap/esm/Switch";

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
      { picture: Main, title: "Command and Natural Languages", point: 0 },
      { picture: Video, title: "Natural Language Interface", point: 0 },
      {
        picture: Video,
        title: "What is Command Line Interface / Graphical User Interface?",
        point: 0,
      },
      { picture: Earth, title: "Command-line Interface", point: 0 },
      { picture: Quiz, title: " Quiz | Week 7", point: 0 },
      { picture: Document, title: " Additional Lesson", point: 0 },
    ],
    week7points: false,
    week7totalpoints: 0,
    week7Activities: [
      {
        picture: Earth,
        title: "Natural Lanuage as an Interface Style",
        point: 0,
      },
      {
        picture: Video,
        title: "Command and Natural Lanuage Interaction",
        point: 0,
      },
      { picture: Earth, title: "List of Command Line Commands", point: 0 },
      {
        picture: Earth,
        title: "Natural Lanuage in Computer-Human Interaction",
        point: 0,
      },
      {
        picture: Video,
        title:
          "Natural Languate Processing: A Human-Computer Interaction Perspective",
        point: 0,
      },
      {
        picture: Pdf,
        title:
          "Natural Languate Processing: A Human-Computer Interface to Database",
        point: 0,
      },
      {
        picture: Pdf,
        title: "NATURAL LANGUAGE COMPUTING: THE COMMERCIAL APPLICATIONS",
        point: 0,
      },
      { picture: Pdf, title: "CPI Language", point: 0 },
      { picture: Video, title: "Define: Natural Language Interface", point: 0 },
      {
        picture: Video,
        title: "Natural Laguage Interface - Science Fiction",
        point: 0,
      },
      { picture: Video, title: "Command Line Interface (CLI)", point: 0 },
      {
        picture: Video,
        title: "Graphical User Interface (GUI) vs Command Line Interface (CLI)",
        point: 0,
      },
      {
        picture: Video,
        title:
          "Windows Command Line Tutorial - 1 - Introduction to the Command Prompt",
        point: 0,
      },
      {
        picture: Video,
        title:
          "Windows Command Line Tutorial - 2 - Listing Files and Directories",
        point: 0,
      },
      {
        picture: Video,
        title: "Windows Command Line Tutorial - 3 - Opening Files and History",
        point: 0,
      },
      {
        picture: Video,
        title: "Windows Command Line Tutorial - Copying and Moving Files",
        point: 0,
      },
      { picture: Video, title: "Simatic Manager:Symbol Editor", point: 0 },
      { picture: Video, title: "Text Editors", point: 0 },
      { picture: Discuss, title: "DISCUSSION FORUM WEEK 7", point: 0 },
      { picture: Sound, title: "FEEDBACK OF WEEK 7", point: 0 },
    ],

    week7Activitiespoints: false,
    week7Activitiestotalpoints: 0,
    week6: [
      {
        picture: Main,
        title: "Direct Manipulation and Virtual Environments",
        point: 0,
      },
      {
        picture: Main,
        title:
          "Direct Manipulation & User Control Interview with Ben Shneiderman",
        point: 0,
      },
      {
        picture: Video,
        title: "What are Virtual and Augmented Realities?",
        point: 0,
      },
      {
        picture: Video,
        title: "3D Web Design for Beginners - Webflow CSS tutorial",
        point: 0,
      },
      { picture: Earth, title: "Direct Manipulation", point: 0 },
      { picture: Earth, title: "3D User Interfaces", point: 0 },
      { picture: Quiz, title: "Quiz | Week 6", point: 0 },
      { picture: Document, title: "Additional Lesson", point: 0 },
    ],
    week6points: false,
    week6totalpoints: 0,
    week6Activities: [
      {
        picture: Video,
        title: "Meet the inventor of the electronic spreadsheet | Dan Bricklin",
        point: 0,
      },
      {
        picture: Video,
        title: "This Man Invented the World's First Video Game Console",
        point: 0,
      },
      {
        picture: Video,
        title: "A Brief History of Video Games",
        point: 0,
      },
      {
        picture: Video,
        title: "The First Video Game",
        point: 0,
      },
      {
        picture: Video,
        title: "Your brain on video games | Daphne Bavelier",
        point: 0,
      },
      {
        picture: Video,
        title: "Direct Manipulation - Example - How Do Self-driving cars SEE ?",
        point: 0,
      },
      {
        picture: Video,
        title: "Chinese medical team completes 5G-enabled remote surgery test",
        point: 0,
      },
      {
        picture: Video,
        title: "The Future of Augmented Reality",
        point: 0,
      },
      {
        picture: Video,
        title: "Direct Manipulation - Example - How Do Self-driving cars SEE ?",
        point: 0,
      },
      {
        picture: Video,
        title: "Designing Screen Interfaces for VR (Google I/O '17)",
        point: 0,
      },
      {
        picture: Video,
        title: "Enabling 3D perspective - Webflow CSS tutorial",
        point: 0,
      },
      {
        picture: Video,
        title:
          "5G Prototyping Activities at Robotic Systems Lab - Teleoperation of ANYpulator over Mobile Networks",
        point: 0,
      },
      {
        picture: Document,
        title: "Direct Manipulation Author: Michael Dennehy",
        point: 0,
      },
      {
        picture: Earth,
        title: "Object-action interface",
        point: 0,
      },
      {
        picture: Earth,
        title: "Augmented reality",
        point: 0,
      },

      { picture: Discuss, title: "DISCUSSION FORUM WEEK 6", point: 0 },
      { picture: Sound, title: "Your reflection on Week 6", point: 0 },
    ],
    week6ActivitiesPoints: false,
    week6ActivitiesTotalPoints: 0,
    week5: [
      {
        picture: Main,
        title: "Evaluationg Interface Designs",
        point: 0,
      },
      {
        picture: Main,
        title:
          "Usability Testing: Complete Process | Usability Testing(in Hindi)",
        point: 0,
      },
      {
        picture: Video,
        title: "Heuristic Evaluation",
        point: 0,
      },
      { picture: Video, title: "Prototypping and Paper Mock up", point: 0 },
      {
        picture: Video,
        title:
          "Enhancing qualitative research: the Retrospective Think-Aloud Interview (RTA)",
        point: 0,
      },
      {
        picture: Video,
        title: "Better User Research Through Surveys",
        point: 0,
      },
      {
        picture: Video,
        title: "What is User acceptance testing or UAT?",
        point: 0,
      },

      {
        picture: Quiz,
        title: "Quiz | Week 5",
        point: 0,
      },
      { picture: Document, title: "Additional Lesson", point: 0 },
    ],
    week5points: false,
    week5totalpoints: 0,
    week5Activities: [
      {
        picture: Video,
        title: "Design Thinking & Strategy - Good Kitchen Case Study",
        point: 0,
      },
      {
        picture: Video,
        title: "Formative vs. Summative Evaluation",
        point: 0,
      },
      { picture: Video, title: "Usability Labs", point: 0 },
      {
        picture: Video,
        title: "Website Usability Testing: The Thinking Aloud Protocaol",
        point: 0,
      },
      {
        picture: Video,
        title: (
          <span>
            <span>
              What is Heuristic Evaluataion in Web Design and UI Design (in
              Hindi)
            </span>
            <div>
              Bonus Video on{" "}
              <a
                href="
              #"
              >
                Heuristic Evaluation
              </a>{" "}
              for a Badges and 50 points
            </div>
          </span>
        ),
        point: 0,
      },
      {
        picture: Video,
        title: "Tips for good survey questions",
        point: 0,
      },
      {
        picture: Video,
        title:
          "What is Eye Tracking and How it Works | Demon video by CoolTool",
        point: 0,
      },
      {
        picture: Video,
        title: "Web Design Tutorial - 5 IMPORTANT Tips!",
        point: 0,
      },

      {
        picture: Pdf,
        title: "Evaluation Techniques",
        point: 0,
      },
      { picture: Earth, title: "Evaulation Techniques", point: 0 },
      {
        picture: Earth,
        title: "10 Usability Heuristic for User Interface Design",
        point: 0,
      },
      {
        picture: Earth,
        title: "Automated tools - WebTango",
        point: 0,
      },
      {
        picture: Earth,
        title: "How to Conduct a Cognitive Walkthrough",
        point: 0,
      },
      {
        picture: Earth,
        title:
          "UX Design: Wireframe vs Storyboard vs Wireflow vs Mockup vs Prototyping",
        point: 0,
      },
      {
        picture: Earth,
        title: "Types of Survey Questions",
        point: 0,
      },

      { picture: Discuss, title: "DISCUSSION FORUM WEEK 5", point: 0 },
      {
        picture: Sound,
        title: (
          <span>
            COGNITIVE Walkthrough
            <div></div>
            Conduct a <strong>Cognitive Walkthrough</strong> of the MOOC system
            which you are using for the course on{" "}
            <a href="#">Human Computer Interaction !!!</a>
          </span>
        ),
        point: 0,
      },
      {
        picture: Sound,
        title: (
          <span>
            Heuristic Evaluataion
            <div></div>
            Conduct a HEURISTIC EVALUATION based on Jakob Nielsen's 10 general
            principles for interaction design of the MOOC system which you are
            using for the course on Human Computer Interaction !!!
          </span>
        ),
        point: 0,
      },
      {
        picture: Sound,
        title: (
          <span>
            Your reflection of week 5<div></div>
            Share your reflection !!!
          </span>
        ),
        point: 0,
      },
    ],
    week5ActivitiesPoint: false,
    week5ActivitiesTotalPoint: 0,
    week4: [
      {
        picture: Main,
        title: "Managing Design Process",
        point: 0,
      },
      {
        picture: Video,
        title: "Four Pillars of Design",
        point: 0,
      },
      {
        picture: Video,
        title: "Creating Personas Is Like Sorting Rocks",
        point: 0,
      },
      {
        picture: Video,
        title: "What is Ethnography in User Research?",
        point: 0,
      },
      {
        picture: Video,
        title: "Participant Observation",
        point: 0,
      },
      {
        picture: Document,
        title: "Personas",
        point: 0,
      },
      {
        picture: Quiz,
        title: "Quiz | Week 4",
        point: 0,
      },
      {
        picture: Document,
        title: "Additional Lesson",
        point: 0,
      },
    ],
    week4totalpoints: 0,
    week4points: false,
    week4Activities: [
      {
        picture: Video,
        title: "How To Manage Design Projects",
        point: 0,
      },
      {
        picture: Video,
        title: "UX Prototyping Tools: How to Pick the Right One (2020)",
        point: 0,
      },
      {
        picture: Video,
        title: "Design & Copyright - Making sure your work is legal",
        point: 0,
      },
      {
        picture: Video,
        title: "Expert Design Review",
        point: 0,
      },

      {
        picture: Video,
        title: "Ethnography: Ellen Isaas",
        point: 0,
      },
      {
        picture: Video,
        title: "How To Create A User Persona",
        point: 0,
      },
      {
        picture: Video,
        title: "More Example on Persona: How To Create A User Persona",
        point: 0,
      },

      {
        picture: Video,
        title: "How to Create a UX Storyboard",
        point: 0,
      },
      { picture: Video, title: "User Scenario to App Design", point: 0 },
      {
        picture: Video,
        title:
          "Scenario planning - the future of work and place | Oliver Baxter | TEDxALC",
        point: 0,
      },
      {
        picture: Video,
        title: "When to Use Which UX Research Method",
        point: 0,
      },
      {
        picture: Earth,
        title: "UX Expert Reviews",
        point: 0,
      },
      {
        picture: Earth,
        title: "Using Ethnography methods & participant observation",
        point: 0,
      },
      {
        picture: Earth,
        title:
          "Coca-Cola suspends social media advertising despite Facebook changesURL",
        point: 0,
      },

      {
        picture: Discuss,
        title: "Socio-organizational issures and stakeholdder requirements",
        point: 0,
      },
      {
        picture: Sound,
        title: (
          <span>
            COGNITIVE Walkthrough
            <div></div>
            Conduct a <strong>Cognitive Walkthrough</strong> of the MOOC system
            which you are using for the course on{" "}
            <a href="#">Human Computer Interaction !!!</a>
          </span>
        ),
        point: 0,
      },
      {
        picture: Sound,
        title: (
          <span>
            Heuristic Evaluataion
            <div></div>
            Conduct a HEURISTIC EVALUATION based on Jakob Nielsen's 10 general
            principles for interaction design of the MOOC system which you are
            using for the course on Human Computer Interaction !!!
          </span>
        ),
        point: 0,
      },
      {
        picture: Sound,
        title: (
          <span>
            Your reflection of week 5<div></div>
            Share your reflection !!!
          </span>
        ),
        point: 0,
      },
    ],

    week4ActivitiesTotalPoints: 0,
    week4ActivitiesPoints: false,
    week3: [
      {
        picture: Main,
        title: "Guideliness and Principles",
        point: 0,
      },
      {
        picture: Main,
        title: "Theories",
        point: 0,
      },
      {
        picture: Video,
        title: "Shneiderman's Eight Golden Rules",
        point: 0,
      },
      {
        picture: Video,
        title: "Error Prevention",
        point: 0,
      },
      {
        picture: Video,
        title: "Norman's Seven Principles",
        point: 0,
      },
      {
        picture: Video,
        title: "GOMS MODEL in HCI",
        point: 0,
      },
      {
        picture: Document,
        title: "Minimize Memory Load",
        point: 0,
      },
      {
        picture: Document,
        title: "MODEL in HCI",
        point: 0,
      },
      {
        picture: Document,
        title: "Memory Load Documents",
        point: 0,
      },
      {
        picture: Quiz,
        title: "Quiz | Week 3",
        point: 0,
      },
      {
        picture: Document,
        title: "Additional Lesson",
        point: 0,
      },
    ],
    week3Points: false,
    week3TotalPoints: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div className="left-side-shift font-small"> Your Progress</div>
        {this.state.upper.map((c, index) => (
          <Tickmarks key={index} title={c.title} logo={c.picture} />
        ))}

        {/* -------------------week 7----------------  */}
        <WeekBoxs
          key={"week 7"}
          title="Week 7"
          allChecked={this.state.week7points}
        >
          {this.state.week7.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week7, index, 7)}
            />
          ))}
        </WeekBoxs>

        {/* -------------------week 7 activities----------------  */}
        <WeekBoxs
          key={"week 7 Activities"}
          title="Week 7 Activities"
          allChecked={this.state.week7Activitiespoints}
        >
          {this.state.week7Activities.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() =>
                this.addPoints(this.state.week7Activities, index, 70)
              }
            />
          ))}
        </WeekBoxs>

        {/*---------------------week 6--------------------- */}
        <WeekBoxs
          key={"week 6"}
          title="Week 6"
          allChecked={this.state.week6points}
        >
          {this.state.week6.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week6, index, 6)}
            />
          ))}
        </WeekBoxs>
        {/*---------------------week 6 Activities--------------------- */}
        <WeekBoxs
          key={"Week 6 Activities"}
          title="Week 6 Activities"
          allChecked={this.state.week6ActivitiesPoints}
        >
          {this.state.week6Activities.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() =>
                this.addPoints(this.state.week6Activities, index, 60)
              }
            />
          ))}
        </WeekBoxs>
        {/*---------------------week 5--------------------- */}
        <WeekBoxs
          key={"Week 5"}
          title="Week 5"
          allChecked={this.state.week5points}
        >
          {this.state.week5.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week5, index, 5)}
            />
          ))}
        </WeekBoxs>
        {/*---------------------week 5--------------------- */}
        <WeekBoxs
          key="Week 5 ac"
          title="Week 5 Activities"
          allChecked={this.state.week5ActivitiesPoint}
        >
          {this.state.week5Activities.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() =>
                this.addPoints(this.state.week5Activities, index, 50)
              }
            />
          ))}
        </WeekBoxs>
        {/*---------------------week 4--------------------- */}
        <WeekBoxs
          key="Week 4"
          title="Week 4"
          allChecked={this.state.week4points}
        >
          {this.state.week4.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week4, index, 4)}
            />
          ))}
        </WeekBoxs>
        {/*---------------------week 4 Acitivies--------------------- */}
        <WeekBoxs
          key="Week 4 activ"
          title="Week 4 Activities"
          allChecked={this.state.week4ActivitiesPoints}
        >
          {this.state.week4Activities.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() =>
                this.addPoints(this.state.week4Activities, index, 40)
              }
            />
          ))}
        </WeekBoxs>
        {/*---------------------week 3--------------------- */}
        <WeekBoxs
          key="Week 3"
          title="Week 3"
          allChecked={this.state.week3points}
        >
          {this.state.week3.map((c, index) => (
            <Tickmarks
              key={index}
              title={c.title}
              logo={c.picture}
              addPoint={() => this.addPoints(this.state.week3, index, 3)}
            />
          ))}
        </WeekBoxs>

        {/* {console.log(this.state.week7[0].point)}
        {console.log(this.state.week6[0].point)}

        {console.log("totalpoints of 7 is", this.state.week7totalpoints)}
        {console.log("total points of 6 is ", this.state.week6totalpoints)}
        {console.log(this.state.week6points)} */}
      </React.Fragment>
    );
  }
  addPoints = (state, index, weekNumber) => {
    const old = [...state];
    //this code makes point 0 or 1(>= is vvi not >)
    old[index].point >= 1 ? old[index].point-- : old[index].point++;
    // old[index].point++;
    console.log(old[index].point);

    switch (weekNumber) {
      case 7:
        this.setState({ week7: old });
        this.calculateTotalPoints(state, 7);
        break;
      case 70:
        this.setState({ week7Activities: old });
        this.calculateTotalPoints(state, 70);
        break;
      case 6:
        this.setState({ week6: old });
        this.calculateTotalPoints(state, 6);
        break;
      case 60:
        this.setState({ week6Activities: old });
        this.calculateTotalPoints(state, 60);
        break;
      case 5:
        this.setState({ week5: old });
        this.calculateTotalPoints(state, 5);
        break;
      case 50:
        this.setState({ week5Activities: old });
        this.calculateTotalPoints(state, 50);
        break;
      case 4:
        this.setState({ week4: old });
        this.calculateTotalPoints(state, 4);
        break;
      case 40:
        this.setState({ week4Activities: old });
        this.calculateTotalPoints(state, 40);
        break;
      case 3:
        this.setState({ week3: old });
        this.calculateTotalPoints(state, 3);
        break;

      default:
        break;
    }
  };
  calculateTotalPoints = (state, number) => {
    let sum = 0;
    state.map((c) => {
      // old[index].point > 1 ? old[index].point-- : old[index].point++;
      // The above code is of previous function line which eliminates the need of below code
      // if (c.point > 1) {
      //   c.point = 0;
      // }
      sum = sum + c.point;
    });
    // console.log(sum);
    switch (number) {
      case 7:
        // this.setState({ week7totalpoints: sum });
        //to check whether all boxes are ticked
        if (state.length == sum) {
          this.setState({ week7points: true });
        } else {
          this.setState({ week7points: false });
        }
        break;
      case 70:
        if (state.length == sum) {
          this.setState({ week7Activitiespoints: true });
        } else {
          this.setState({ week7Activitiespoints: false });
        }
        break;
      case 6:
        if (state.length == sum) {
          this.setState({ week6points: true });
        } else {
          this.setState({ week6points: false });
        }
        break;
      case 60:
        if (state.length == sum) {
          this.setState({ week6ActivitiesPoints: true });
        } else {
          this.setState({ week6ActivitiesPoints: false });
        }
        break;
      case 5:
        if (state.length == sum) {
          this.setState({ week5points: true });
        } else {
          this.setState({ week5points: false });
        }
        break;
      case 50:
        if (state.length == sum) {
          this.setState({ week5ActivitiesPoint: true });
        } else {
          this.setState({ week5ActivitiesPoint: false });
        }
        break;
      case 4:
        if (state.length == sum) {
          this.setState({ week4points: true });
        } else {
          this.setState({ week4points: false });
        }
        break;
      case 40:
        if (state.length == sum) {
          this.setState({ week4ActivitiesPoints: true });
        } else {
          this.setState({ week4ActivitiesPoints: false });
        }

        break;
      case 3:
        if (state.length == sum) {
          this.setState({ week3points: true });
        } else {
          this.setState({ week3points: false });
        }
        break;

      default:
        break;
    }
  };
}

export default MiddleContent;
