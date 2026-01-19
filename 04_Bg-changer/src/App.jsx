import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("dimgray");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-0 flex  flex-wrap justify-center border-2 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            style={{ background: "blue" }}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
            style={{ background: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
            style={{ background: "violet" }}
          >
            Violet
          </button>

          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg"
            style={{ background: "skyblue" }}
          >
            Skyblue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
