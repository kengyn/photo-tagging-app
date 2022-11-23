import { useState, useEffect } from "react";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/Notification";
import "./styles/App.css";

function App() {
  const wantedList = [
    {
      name: "Bob",
      id: 0,
      coordinates: [
        [38, 62],
        [37, 62],
      ],
      found: false,
    },
    {
      name: "Ein",
      id: 1,
      coordinates: [
        [21, 84],
        [20, 84],
      ],
      found: false,
    },
    {
      name: "Saitama",
      id: 2,
      coordinates: [
        [30, 63],
        [30, 64],
      ],
      found: false,
    },
  ];

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [detained, setDetained] = useState(wantedList);
  const [suspect, setSuspect] = useState([]);
  const [notiColor, setNotiColor] = useState([""]);

  function handleDetained(selected) {
    const newDetainList = detained.map((obj) => {
      if (obj.id === selected) {
        return { ...obj, found: true };
      }

      return obj;
    });

    setDetained(newDetainList);
  }

  function clearSuspect() {
    setSuspect([]);
  }

  useEffect(() => {
    const image = document.querySelector(".main-image");

    function placeTarget(x, y) {
      setLeft(x);
      setTop(y);
    }

    function findCoordinate(x, y) {
      let left = Math.floor((x / image.clientWidth) * 100);
      let right = Math.floor((y / image.clientHeight) * 100);
      return [left, right];
    }

    function findWanted(e) {
      let x = e.pageX;
      let y = e.pageY;

      placeTarget(x, y);

      const search = findCoordinate(x, y);

      detained.forEach((criminal) => {
        criminal.coordinates.forEach((coordinate) => {
          if (coordinate.every((el) => search.includes(el))) {
            setSuspect(criminal);
          }
        });
      });
    }

    image.addEventListener("click", findWanted);

    return () => {
      image.removeEventListener("click", findWanted);
    };
  });

  return (
    <main>
      <Notification color={notiColor} />
      <Navbar color={notiColor} />
      <Menu
        x={left}
        y={top}
        onDetained={handleDetained}
        suspect={suspect}
        clearSuspect={clearSuspect}
        color={setNotiColor}
      />
      <img
        className="main-image"
        src={require("./assets/images/Universe-113.jpg")}
        alt="Look and Find"
      />
    </main>
  );
}

export default App;
