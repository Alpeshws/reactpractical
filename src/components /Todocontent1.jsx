import React from "react";

function Todocontent1() {
  let todoname = "buy milk ";
  let tododate = "4/10/22";
  return (
    <>
      <div class="row kg_row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}s</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" className="btn-kgn">
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todocontent1;
