import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";
import "../styles/index.css";

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById("app"));

setInterval(() => {
  seconds += 1;
  root.render(<SecondsCounter seconds={seconds} />);
}, 1000);