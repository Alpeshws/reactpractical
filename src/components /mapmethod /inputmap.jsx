import React from "react";
import "./inputmap.css";
function Inputmap() {
  return (
    <>
      <div className="inpu">
        <input
          type="text"
          placeholder="search here"
          onChange={(event) => console.log(event)}
        />
      </div>
    </>
  );
}

export default Inputmap;
