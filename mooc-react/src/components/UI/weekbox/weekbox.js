import React from "react";
import "./weekbox.css";

const weekbox = (props) => {
  return (
    <div className="weekbox">
      <h1>
        Pure CSS Accordion <sup>2.0</sup>
      </h1>
      <div class="row">
        <div class="col">
          <h2>
            Open <b>multiple</b>
          </h2>
          <div class="tabs">
            <div class="tab">
              <input type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">
                Item 1
              </label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ipsum, reiciendis!Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ipsum, reiciendis!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ipsum, reiciendis!Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis!Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ipsum, reiciendis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weekbox;
