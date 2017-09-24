import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App>
    <button onClick={console.log}>Hello App</button>
  </App>,
  document.getElementById("root")
);
registerServiceWorker();
