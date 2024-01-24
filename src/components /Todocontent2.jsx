import React from "react";

function Todocontent2() {
  let todoname = "go to college";
  let tododate = "4/10/22";
  return (
    <>
      {" "}
      <div class="row kg_row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" className="btn-kgn">
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todocontent2;
