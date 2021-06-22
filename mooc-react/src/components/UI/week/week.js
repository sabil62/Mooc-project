// import React, { useState, useEffect } from "react";
// import "./week.css";

// function Week(props) {
//   const [display, setDisplay] = useState(false);
//   const onDisplay = () => {
//     setDisplay((display) => !display);
//   };
//   return (
//     <div className="weekss">
//       <div className="week-label" onClick={() => onDisplay()}>
//         {props.title}
//         {props.allChecked ? "+++++++" : null}
//       </div>
//       {display ? <div>{props.children}</div> : null}
//     </div>
//   );
// }

// export default Week;

import React, { useState } from "react";
import "./week.css";

function WeekBoxs(props) {
  const [display, setDisplay] = useState(true);

  const onDisplay = () => {
    setDisplay((display) => !display);
  };

  return (
    <div className="weekss" style={{ margin: "1.5rem 0" }}>
      <div className="week-label" onClick={() => onDisplay()}>
        {props.title}
        {props.allChecked ? "+++++++" : null}
      </div>
      {display ? (
        <div className="content-hide">{props.children}</div>
      ) : (
        <div className="content-show">{props.children}</div>
      )}
    </div>
  );
}

export default WeekBoxs;
