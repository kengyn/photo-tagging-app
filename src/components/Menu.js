import React, { useEffect, useState } from "react";
import "../styles/Menu.css";

const Menu = () => {
  const [top, setTop] = useState(100);
  const [left, setLeft] = useState(100);
  useEffect(() => {
    const image = document.querySelector(".main-image");
    const menu = document.querySelector(".menu-container");
    function findCoordinate(e) {
      let x = e.pageX;
      let y = e.pageY;
      let left = Math.floor((x / image.clientWidth) * 100);
      let right = Math.floor((y / image.clientHeight) * 100);
      setTop(y);
      setLeft(x);
    }
    //     function placeMenu() {
    // menu.
    //     }

    image.addEventListener("click", findCoordinate);

    return () => {
      image.removeEventListener("click", findCoordinate);
    };
  });
  return (
    <div className="menu-container" style={{ top: top, left: left }}>
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
  );
};

export { Menu };
