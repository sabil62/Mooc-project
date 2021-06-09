import React from "react";
import Greybox from "../UI/greybox/greybox";
import "./rightContent.css";
import LevelUpLogo from "../../assets/HCI/batches side/Level up.png";
import Level from "../../assets/HCI/batches side/0 main number batch.png";
import { InfoCircleFilled, TrophyFilled } from "@ant-design/icons";
import Batch1 from "../../assets/HCI/batches side/VR Virtuoso.png";
import Batch2 from "../../assets/HCI/batches side/Trail run leader.png";
import Batch3 from "../../assets/HCI/batches side/Fable.png";
import Batch4 from "../../assets/HCI/batches side/Canyon leader.png";
import Batch5 from "../../assets/HCI/batches side/Fifty point batch.png";
import Batch6 from "../../assets/HCI/batches side/Adventure awaits.png";
import Batch7 from "../../assets/HCI/batches side/Honored.png";
import Batch8 from "../../assets/HCI/batches side/VR hero.png";
import Batch9 from "../../assets/HCI/batches side/panda.png";
import Batch10 from "../../assets/HCI/batches side/Testing titan.png";
import Batch11 from "../../assets/HCI/batches side/Participation of survey.png";

const rightContent = (props) => {
  return (
    <React.Fragment>
      <Greybox logo={LevelUpLogo} title={"Level Up!"}>
        <div className="level-middle">
          <img src={Level} style={{ height: "6.2rem" }} />

          <div
            style={{ fontSize: "14px", marginTop: "1.6rem", fontWeight: "600" }}
          >
            8420<sup>xp</sup>
          </div>
        </div>
        <div className="point-meter">
          <div className="meter-move"></div>
        </div>
        <div className="right-side-point">
          <span style={{ opacity: "0.5", marginLeft: "2px" }}>to go</span>
          <span>
            6820 <sup>xp</sup>
          </span>
        </div>
        <div style={{ fontSize: "12px" }}>RECENT REWARDS</div>
        <div>
          {props.courseModule.map((c, index) => (
            <div index={index} className="two-title">
              <div>
                <span style={{ marginRight: "15px" }}>
                  {c.points}
                  <sup>xp</sup>
                </span>
                <span>{c.achievement}</span>
              </div>
              <div style={{ opacity: "0.5" }}>{c.time} d</div>
            </div>
          ))}
        </div>
        <div className="two-justify-flex">
          <div>
            <InfoCircleFilled
              style={{ fontSize: "1.2rem", paddingBottom: "10px" }}
            />
            <div>Info</div>
          </div>
          <div>
            <TrophyFilled
              style={{
                fontSize: "1.2rem",
                marginLeft: "6px",
                paddingBottom: "10px",
              }}
            />
            <div>Ladder</div>
          </div>
        </div>
      </Greybox>
      <Greybox logo={LevelUpLogo} title={"Latest Batches"}>
        <div className="batches">
          <img src={Batch1} />
          <span>VR Virtuoso</span>
          <img src={Batch2} />
          <span>Trail Runner Leader</span>
          <img src={Batch3} />
          <span>Fabled</span>
          <img src={Batch4} />
          <span>Canyon leader</span>
          <img src={Batch5} />
          <span>Fifty point batch</span>
          <img src={Batch6} />
          <span>Adventure awaits</span>
          <img src={Batch7} />
          <span>Honored</span>
          <img src={Batch8} />
          <span>VR hero</span>
          <img src={Batch9} />
          <span>Welcome</span>
          <img src={Batch10} />
          <span>Testing Titan</span>
          <img src={Batch11} />
          <span>Survey</span>
        </div>
      </Greybox>
    </React.Fragment>
  );
};

// RECENT REWARDS
// 20xp Course module viewed 1d
// 20xp Course module viewed 1d
// 40xp Course module completed
export default rightContent;
