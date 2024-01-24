import React from "react";
import "./calculator.css";

function Buttns({ onbuttonclicked }) {
  const butnn = [
    "C",
    "1",
    "2",

    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className="bn">
        {butnn.map((items, index) => {
          return (
            <button
              className="btn1"
              key={index}
              onClick={() => onbuttonclicked(items)}
            >
              {items}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Buttns;
