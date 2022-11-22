import React, { useEffect, useState } from "react";
import "../styles/Menu.css";

const Menu = () => {
  const [top, setTop] = useState(100);
  const [left, setLeft] = useState(100);
  useEffect(() => {
    const image = document.querySelector(".main-image");
    const targetMenu = document.querySelector(".target-menu-container");
    function placeTarget(x, y) {
      //let left = Math.floor((x / image.clientWidth) * 100);
      //let right = Math.floor((y / image.clientHeight) * 100);
      setTop(y);
      setLeft(x);
    }

    function checkHidden(e) {
      let x = e.pageX;
      let y = e.pageY;
      if (targetMenu.style.display === "none") {
        targetMenu.style.display = "initial";
        placeTarget(x, y);
      } else {
        targetMenu.style.display = "none";
      }
    }

    image.addEventListener("click", checkHidden);

    return () => {
      image.removeEventListener("click", checkHidden);
    };
  });
  return (
    <div className="target-menu-container" style={{ display: "absolute" }}>
      <div
        className="target-container"
        style={{ top: top - 15, left: left - 15 }}
      ></div>
      <div
        className="menu-container"
        style={{ top: top + 15, left: left + 15 }}
      >
        <div className="menu-item" id="bob">
          <img
            src={require("../assets/images/bob-closeup.webp")}
            alt="bob closeup"
          />
          <p>BOB</p>
        </div>
        <div className="menu-item" id="ein">
          <img
            src={require("../assets/images/ein-closeup.jpg")}
            alt="ein closeup"
          />
          <p>EIN</p>
        </div>
        <div className="menu-item" id="saitama">
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
