import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>WANT LIST</h1>
      <div className="want-list">
        <div className="character-container">
          <img src={require("../assets/images/eincowboybebop.jpg")} alt="ein" />
          <div>EIN</div>
        </div>
        <div className="character-container">
          <img
            src={require("../assets/images/saitamaonepunch.jpg")}
            alt="saitama"
          />
          <div>SAITAMA</div>
        </div>
        <div className="character-container">
          <img src={require("../assets/images/waldo.png")} alt="waldo" />
          <div>WALDO</div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
