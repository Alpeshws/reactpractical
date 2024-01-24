import React from "react";
import "./calculator.css";

function Display({ displayvalue }) {
  return (
    <>
      <div className="input">
        <input type="text" value={displayvalue} readOnly />
      </div>
    </>
  );
}

export default Display;
