import { useEffect } from "react";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";

function App() {
  useEffect(() => {
    const image = document.querySelector(".main-image");

    function findCoordinate(x, y) {
      let left = Math.floor((x / image.clientWidth) * 100);
      let right = Math.floor((y / image.clientHeight) * 100);
      return [left, right];
    }

    function findWanted(e) {
      let x = e.pageX;
      let y = e.pageY;
      const search = findCoordinate(x, y);
      const wantedList = [
        {
          name: "Ein",
          coordinates: [
            [21, 84],
            [20, 84],
          ],
        },
        {
          name: "Saitama",
          coordinates: [
            [30, 63],
            [30, 64],
          ],
        },
        {
          name: "Bob",
          coordinates: [
            [38, 62],
            [37, 62],
          ],
        },
      ];

      wantedList.forEach((criminal) => {
        criminal.coordinates.forEach((coordinate) => {
          if (coordinate.every((el) => search.includes(el))) {
            console.log(criminal.name);
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
      <Navbar></Navbar>
      <Menu></Menu>
      <img
        className="main-image"
        src={require("./assets/images/Universe-113.jpg")}
        alt="Look and Find"
      />
    </main>
  );
}

export default App;
