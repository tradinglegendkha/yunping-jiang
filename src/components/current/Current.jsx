import React from "react";
import "./current.css";
import allText from "./researchtext.js";

const Current = () => {
  return (
    <div className="current-container">
      <div className="current-container-heading">
        <h1>Current Research</h1>
        <div className="current-container-box">
          <div className="boxes">
            <h6>Number Theory and Ergodic Theory</h6>
            <p>{allText.text11}</p>
            <p>{allText.text12}</p>
            <p>{allText.text13}</p>
            <p>{allText.text14}</p>
          </div>
          <div className="boxes">
            <h6>Complex Dynamics</h6>
            <p>{allText.text21}</p>
            <p>{allText.text22}</p>
            <p>{allText.text23}</p>
            <p>{allText.text24}</p>
          </div>
          <div className="boxes">
            <h6>Metric Entropy in Smooth Dynamical Systems</h6>
            <p>{allText.text31}</p>
            <p>{allText.text32}</p>
            <p>{allText.text33}</p>
            <p>{allText.text34}</p>
          </div>
          <div className="boxes">
            <h6>
              Applications of Quasiconformal Mappings and Teichmüller Theory to
              Dynamical Systems and vice versa
            </h6>
            <p>{allText.text41}</p>
            <p>{allText.text42}</p>
            <p>{allText.text43}</p>
            <p>{allText.text44}</p>
          </div>
          <div className="boxes">
            <h6>Holomorphic Motions</h6>
            <p>{allText.text51}</p>
            <p>{allText.text52}</p>
            <p>{allText.text53}</p>
            <p>{allText.text54}</p>
          </div>
          <div className="boxes">
            <h6>Transfer Operators and Thermodynamical Formalism</h6>
            <p>{allText.text61}</p>
            <p>{allText.text62}</p>
            <p>{allText.text63}</p>
            <p>{allText.text64}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
