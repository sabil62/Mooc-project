import React, { useState, useEffect } from "react";
import "./week.css";

// function Week(props) {
//   const [display, setDisplay] = useState(false);
//   const onDisplay = () => {
//     setDisplay((display) => !display);
//   };
//   useEffect(() => {
//     console.log(display);
//   }, [display]);
//   return (
//     <div className="weekss">
//       {/* <input type="checkbox" id="week-checkbox" /> */}

//       <label
//         className="week-label"
//         onClick={() => setDisplay((display) => !display)}
//       >
//         {props.title}
//         {props.allChecked ? "---------------" : null}
//       </label>
//       {display ? <div>{props.children}</div> : null}
//     </div>
//   );
// }

function Week(props) {
  const [display, setDisplay] = useState(false);
  const onDisplay = () => {
    setDisplay((display) => !display);
  };
  return (
    <div className="weekss">
      <div className="week-label" onClick={() => onDisplay()}>
        {props.title}
        {props.allChecked ? "+++++++" : null}
      </div>
      {display ? <div>{props.children}</div> : null}
    </div>
  );
}

export default Week;
