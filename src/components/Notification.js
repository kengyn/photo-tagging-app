import React, { useEffect } from "react";
import "../styles/Notification.css";

const Notification = ({ color }) => {
  useEffect(() => {
    const noti = document.querySelector(".notification-container");

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

    return () => clearTimeout(setTimeout(() => (noti.style.display = "none")));
  });

  return (
    <div
      className="notification-container"
      style={{ backgroundColor: "#db1b11" }}
    >
      no
    </div>
  );
};

export { Notification };
