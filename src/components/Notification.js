import React, { useEffect } from "react";
import "../styles/Notification.css";

const Notification = ({ color, allDetained }) => {
  useEffect(() => {
    const noti = document.querySelector(".notification-container");
    const main = document.querySelector(".main-image");

    if (color[1] === true) {
      noti.style.display = "inline";
      noti.textContent = `You found ${color[0]}`;
      noti.style.display = "inline";
      noti.style.backgroundColor = "#549658";
      setTimeout(() => (noti.style.display = "none"), 1000);
    } else if (color[1] === false) {
      noti.style.display = "inline";
      noti.textContent = "No keep looking";
      noti.style.backgroundColor = "#db1b11";
      setTimeout(() => (noti.style.display = "none"), 1000);
    }

    if (allDetained === true) {
      noti.style.display = "inline";
      noti.style.backgroundColor = "#4163a3";
      noti.textContent = "All criminals detained. Good job.";
      main.style.pointerEvents = "none";
    }

    return () => clearTimeout(setTimeout(() => (noti.style.display = "none")));
  }, [allDetained, color]);

  return (
    <>
      <div
        className="notification-container"
        style={{ backgroundColor: "#db1b11" }}
      >
        no
      </div>
      <form style={{ display: "none" }}>f</form>
    </>
  );
};

export { Notification };
