import React from "react";
import Inputmap from "./inputmap";

function Mapmethod({ handelclickedevent }) {
  let fooditems = ["dal", "cheese", "rice", "vegetables", "friutess"];

  return (
    <>
      <div>
        <Inputmap />
        <ul>
          {fooditems.map((items, index) => {
            return (
              <li key={index}>
                {items}
                <button onClick={handelclickedevent} className="btn_buy">
                  buy
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Mapmethod;
