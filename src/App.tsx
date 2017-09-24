import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { wrapWatermark } from "./components/watermark";

class App extends Component<any, any> {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
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
  <App>
    <h2 style={{ padding: 36 }}>Hello AppWithChildren</h2>
  </App>
)({
  containerStyle: {
    minHeight: window.innerHeight - 220,
  },
  texts,
});

export default WithWatermark;
