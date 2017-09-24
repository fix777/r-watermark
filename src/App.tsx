import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { wrapWatermark } from "./components/watermark";

class App extends Component<any, any> {
  render() {
    const { style, children } = this.props;

    return (
      <div style={style} className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RWatermark</h2>
        </div>
        {children}
      </div>
    );
  }
}

const texts = [
  {
    translateX: 65,
    translateY: 35,
    rotate: -15,
    text: "Yo yo yo",
  },
  {
    translateX: 110,
    translateY: 55,
    rotate: -15,
    text: "Check it now.",
  },
];

const WithWatermark = wrapWatermark(
  <App
    style={{
      width: "75vw",
      minWidth: 1366,
      maxWidth: 1600,
      height: 700,
      margin: "0 auto",
    }}
  >
    <h2>Hello AppWithChildren</h2>
  </App>
)({
  texts,
});

export default WithWatermark;
