import React from "react";

function Bharattime() {
  let time = new Date();
  return (
    <>
      <p>
        current time is {time.toLocaleDateString()}-{time.toLocaleTimeString()}
      </p>
    </>
  );
}

export default Bharattime;
