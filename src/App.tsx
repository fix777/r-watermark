import React, { Component, CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";

import { wrapWatermark } from "./components/watermark";

export interface AppProps {
  style?: CSSProperties;
  watermark?: JSX.Element;
}

class App extends Component<AppProps> {
  render() {
    const { style, watermark, children } = this.props;

    return (
      <div style={style} className="App">
        {watermark}
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
    <h2 style={{ padding: 16 }}>Hello AppWithChildren</h2>
    <div style={{ padding: 16 }}>
      <input
        style={{ height: 32, minWidth: 166 }}
        type="text"
        placeholder="AppWithChildren"
      />
    </div>
  </App>
)({
  texts,
});

export default WithWatermark;
