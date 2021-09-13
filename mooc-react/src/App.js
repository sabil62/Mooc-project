import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Build from "./container/build/build";
import MainContent from "./components/main-content/main-content";
import LineChart from "./graph/graph";

function App() {
  return (
    <div className="container-css">
      {/* <LineChart /> */}
      <div style={{ height: "34px" }}></div>
      <div className="middle-white-container">
        <Build />
        <div className="navigation-letters">
          <span>Home</span>
          <span>{">"}</span>
          <span>Computer Science</span>
          <span>{">"}</span>
          <span>COMP 341</span>
          {/* <span>{">"}</span> */}
        </div>
        <MainContent />
        <button className="btn btn-success">Bootstrap</button>
      </div>
      <LineChart />
    </div>
  );
}

export default App;
