// import { useState } from "react";
import "./App.css";
// import Passdatachildren from "./components /passdatachildren/passdatachildren";
import Calculator from "./components /calculator /calculator";
// import Mapmethod from "./components /mapmethod /mapmethod";
// import Bharatclock from "./components /bharatclock/bharatclock";
// import Todocontent1 from "./components /Todocontent1";
// import Todocontent2 from "./components /Todocontent2";
// import Todoinput from "./components /Todoinput";
// import Todoname from "./components /todoname";

function App() {
  // const [state, setstate] = useState("chhhh");
  // let itemhandel = "clicked";
  // function handrld(event) {
  //   console.log(event.target.value);
  //   setstate(event.target.value);
  // }
  return (
    <>
      <center className="container-main">
        {/* <Todoname />
        <div class="container text-center">
          <Todoinput />s
          <Todocontent1 />
          <Todocontent2 />
        </div> */}
        {/* <Bharatclock /> */}
        {/* <h2>{itemhandel}</h2>
        <Mapmethod handelclickedevent={handrld} /> */}
        <Calculator />
        {/* 
        <Passdatachildren /> */}
      </center>
    </>
  );
}

export default App;
