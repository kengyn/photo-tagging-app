import React, { useEffect } from "react";
import "../styles/Menu.css";

const Menu = ({ x, y, onDetained, suspect, clearSuspect, color }) => {
  useEffect(() => {
    const image = document.querySelector(".main-image");
    const targetMenu = document.querySelector(".target-menu-container");
    const einBtn = document.querySelector("#Ein");
    const bobBtn = document.querySelector("#Bob");
    const saitamaBtn = document.querySelector("#Saitama");

    function checkSuspect(e) {
      e.preventDefault();
      if (suspect.name === e.target.parentNode.id) {
        onDetained(suspect.id);
        color([suspect.name, true]);
      } else {
        color(["", false]);
      }
    }

    function checkHidden() {
      if (targetMenu.style.display === "none") {
        targetMenu.style.display = "initial";
      } else {
        targetMenu.style.display = "none";
        clearSuspect();
        color([""]);
      }
    }

    einBtn.addEventListener("click", checkSuspect);
    bobBtn.addEventListener("click", checkSuspect);
    saitamaBtn.addEventListener("click", checkSuspect);

    image.addEventListener("click", checkHidden);

    return () => {
      einBtn.removeEventListener("click", checkSuspect);
      bobBtn.removeEventListener("click", checkSuspect);
      saitamaBtn.removeEventListener("click", checkSuspect);
      image.removeEventListener("click", checkHidden);
    };
  });
  return (
    <div className="target-menu-container" style={{ display: "none" }}>
      <div
        className="target-container"
        style={{ top: y - 15, left: x - 15 }}
      ></div>
      <div className="menu-container" style={{ top: y + 15, left: x + 15 }}>
        <div className="menu-item" id="Bob">
          <img
            src={require("../assets/images/bob-closeup.webp")}
            alt="bob closeup"
          />
          <p>BOB</p>
        </div>
        <div className="menu-item" id="Ein">
          <img
            src={require("../assets/images/ein-closeup.jpg")}
            alt="ein closeup"
          />
          <p>EIN</p>
        </div>
        <div className="menu-item" id="Saitama">
          <img
            src={require("../assets/images/sai-closeup.jpg")}
            alt="saitama closeup"
          />
          <p>SAITAMA</p>
        </div>
      </div>
    </div>
  );
};

export { Menu };
