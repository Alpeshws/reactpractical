import React, { useState } from "react";
import "./calculator.css";
import Display from "./display";
import Buttns from "./buttns";

function Calculator() {
  const [calval, setcalval] = useState("");

  const btnclicked = (btntext) => {
    if (btntext === "C") {
      setcalval("");
    } else if (btntext === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const texttt = calval + btntext;
      console.log(texttt);
      setcalval(texttt);
    }
  };

  return (
    <>
      <div className="cal">
        <Display displayvalue={calval} />
        <Buttns onbuttonclicked={btnclicked} />
      </div>
    </>
  );
}

export default Calculator;
