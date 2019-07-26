import React from "react"
import "./intro.css";
import "./glitch.css";
import "./cray.css";
import fitty from "fitty";
import "animate.min.css";

export default () => (
  <div className="intro" id="intro">
    <div className="title">
        <h1 style={{'font-size': '3vw'}}>Carlos</h1>
        <h1 style={{'font-size': '2.58vw'}}>Jiménez</h1>
        <h5 style={{'font-size': '1.06vw'}}>Software Engineer</h5>
    </div>     
    <div className="msga glitch">
      <h2>Make Software <span className="glitch cray" data-text="Great">Great</span> Again</h2>  
    </div>
  </div>
  
);