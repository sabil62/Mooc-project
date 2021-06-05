import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Build from "./container/build/build";

function App() {
  return (
    <div className="container-css">
      <div style={{ height: "34px" }}></div>
      <div className="middle-white-container">
        <Build />
        <button className="btn btn-success">Bootstrap</button>
      </div>
    </div>
  );
}

export default App;
