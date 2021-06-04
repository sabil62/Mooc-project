import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Build from "./container/build/build";
import Logo from "./assets/HCI/0 Ku logo.png";
import { CaretDownOutlined } from "@ant-design/icons";
import Profile from "./assets/person4.jpg";

function App() {
  return (
    <div className="container-css">
      <div style={{ height: "34px" }}></div>
      <div className="middle-white-container">
        <div className="logo-and-info">
          <img src={Logo} style={{ height: "110px" }} alt="ku logo" />
          <div className="profile-box ">
            <div className="profile-name">
              <div className="profile-name-flex">
                Bob Sing
                <span style={{ width: "5px" }}></span>
                <CaretDownOutlined style={{ fontSize: "1rem" }} />
              </div>
            </div>
            <div className="profile-photo">
              <img src={Profile} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <h1 className="kathmandu-heading">
          Kathmandu University Open Online Courses
        </h1>
        <br />
        <div className="navbar"></div>
        <button className="btn btn-success">Bootstrap</button>
        <Build />
      </div>
    </div>
  );
}

export default App;
