import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Timer } from "./Timer";

const Navbar = ({ color, allDetained }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (allDetained == true) {
      setIsPaused(true);
    }
    let interval = null;

    if (isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    const headerBtn = document.querySelector(".headerBtn");
    const wantList = document.querySelector(".want-list");
    const characters = document.querySelectorAll(".character-container");

    const closeModule = () => {
      if (wantList.classList.contains("closed")) {
        wantList.classList.remove("closed");
        wantList.classList.add("open");
        headerBtn.classList.remove("closed");
        headerBtn.classList.add("open");
        headerBtn.src = require("../assets/images/arrow-collapse-right.png");
      } else {
        wantList.classList.remove("open");
        wantList.classList.add("closed");
        headerBtn.classList.remove("open");
        headerBtn.classList.add("closed");
        headerBtn.src = require("../assets/images/arrow-collapse-left.png");
      }
    };

    if (color[1] === true) {
      characters.forEach((char) => {
        if (char.firstChild.classList[0] === color[0]) {
          char.firstChild.style.display = "inline";
        }
      });
    }

    headerBtn.addEventListener("click", closeModule);
    return () => {
      headerBtn.removeEventListener("click", closeModule);
      clearInterval(interval);
    };
  }, [isPaused, allDetained, color]);

  return (
    <div className="navbar-container">
      <img
        className="headerBtn"
        src={require("../assets/images/arrow-collapse-right.png")}
        alt="close"
      />

      <div className="want-list open">
        <h1>WANT LIST</h1>
        <Timer time={time} />
        <div className="character-container">
          <div className="Bob captured" style={{ display: "none" }}>
            x
          </div>
          <img src={require("../assets/images/bobminion.webp")} alt="bob" />
          <div>BOB</div>
        </div>
        <div className="character-container">
          <div className="Ein captured" style={{ display: "none" }}>
            x
          </div>
          <img src={require("../assets/images/eincowboybebop.jpg")} alt="ein" />
          <div>EIN</div>
        </div>
        <div className="character-container">
          <div className="Saitama captured" style={{ display: "none" }}>
            x
          </div>
          <img
            src={require("../assets/images/saitamaonepunch.jpg")}
            alt="saitama"
          />
          <div>SAITAMA</div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
