import React, { Component } from "react";
import "./greybox.css";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";

class Greybox extends Component {
  state = {
    downContent: true,
  };
  render() {
    return (
      <div className="greybox">
        <div className="greybox-up-title">
          <div className="greybox-left-title">
            <img
              src={this.props.logo}
              style={{ height: "36px", marginRight: "1rem" }}
            />
            {this.props.title}
          </div>
          <div className="greybox-right-title">
            {!this.state.downContent ? (
              <DownSquareOutlined onClick={() => this.onDownContentDisplay()} />
            ) : (
              <UpSquareOutlined onClick={() => this.onDownContentNoDisplay()} />
            )}
          </div>
        </div>
        <div style={{ margin: "10px 16px" }}>
          <div className="greybox-line"></div>
          <div className="greybox-line dark"></div>
        </div>
        {this.state.downContent ? (
          <div className="show-content">{this.props.children}</div>
        ) : (
          <div className="lost-content">{this.props.children}</div>
        )}
      </div>
    );
  }
  onDownContentNoDisplay = () => {
    // this.setState((prevState) => {
    //   downContent: !prevState.downContent;
    // });
    this.setState({ downContent: false });
  };
  onDownContentDisplay = () => {
    this.setState({ downContent: true });
  };
}

export default Greybox;

// const greybox = (props) => {
//   return (
//     <div className="greybox">
//       <div className="greybox-up-title">
//         <div className="greybox-left-title">
//           <img
//             src={props.logo}
//             style={{ height: "36px", marginRight: "1rem" }}
//           />
//           {props.title}
//         </div>
//         <div className="greybox-right-title">
//           <DownSquareOutlined />
//           <UpSquareOutlined />
//         </div>
//       </div>
//       <div style={{ margin: "10px 16px" }}>
//         <div className="greybox-line"></div>
//         <div className="greybox-line dark"></div>
//       </div>
//     </div>
//   );
// };

// export default greybox;
