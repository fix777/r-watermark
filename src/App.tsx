import React, { Component, CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";

import { withWatermark } from "./components/watermark";

export interface AppProps {
  style?: CSSProperties;
  watermark?: JSX.Element;
}

const alertIt = () => alert("Here you go.");

class App extends Component<AppProps> {
  render() {
    const { style, watermark } = this.props;

    return (
      <div style={style} className="App">
        {watermark}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RWatermark</h2>
        </div>
        <div style={{ padding: 160 }}>
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
        </div>
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

const WithWatermark = withWatermark<AppProps>({ texts })(App);

export default WithWatermark;
