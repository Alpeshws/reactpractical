import React from "react";

function Todoinput() {
  return (
    <>
      <div class="row kg_row">
        <div class="col-6">
          <input
            type="text"
            className="todo_input"
            placeholder="write todo here"
          />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success" className="btn-kgn">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoinput;
