import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const alertIt = () => alert("Here you go.");

ReactDOM.render(
  <App>
    <button
      style={{
        height: 32,
        minWidth: 100,
        color: "white",
        background: "skyblue",
        border: 0,
      }}
      onClick={alertIt}
    >
      Hello App
    </button>
  </App>,
  document.getElementById("root")
);
registerServiceWorker();
