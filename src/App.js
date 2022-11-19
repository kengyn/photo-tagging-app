import { Navbar } from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <img
        className="main-image"
        src={require("./assets/images/Universe-113.jpg")}
        alt="Look and Find"
      />
    </main>
  );
}

export default App;
