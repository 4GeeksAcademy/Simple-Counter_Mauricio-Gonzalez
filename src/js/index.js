import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";  // Asegúrate de importar el componente
import "../styles/index.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <SecondsCounter seconds={0} />
);