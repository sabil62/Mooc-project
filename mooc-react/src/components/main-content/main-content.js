import React, { Component } from "react";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-12">lion</div>
          <div className="col-lg-6 col-sm-8 col-12">tiger</div>
          <div className="col-lg-3 d-lg-block d-none">leopard</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainContent;
