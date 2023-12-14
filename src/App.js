import Background from "./components/Background";
import "./App.css";
import Foreground from "./components/Foreground";
import { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState( window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false
      );
  const bgChange = (v) => {
    setChecked(v);
  };

  return (
    <div
      className={`w-full h-screen  text-white relative `}
    >
      <Background checked={checked} />
      <Foreground bgChange={bgChange} />
      {/* <div className="fixed top-0 left-0 z-[3] w-full h-full bg-sky-900/[0.2] ">
      </div> */}
    </div>
  );
}