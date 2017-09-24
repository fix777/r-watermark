import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App>
    <h3>Hello App</h3>
  </App>,
  document.getElementById("root")
);
registerServiceWorker();
