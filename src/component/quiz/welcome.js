import React from "react";
import Html from "./../../icon/code.png";
import './../../css/welcome.css'
import { useNavigate } from "react-router-dom";
function Welcome() {
  const Navigate = useNavigate();
  return (
    <div className="App">
      <div className="start">
        <h1>Quiz App</h1>
        <img src={Html} alt="html" />
        <h2>HtML</h2>
        <button onClick={()=>Navigate("/Quiz",{})}>Let's start</button>
      </div>
    </div>
  );
}
export default Welcome;
