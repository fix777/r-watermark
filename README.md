# r-watermark

[![npm version](https://img.shields.io/npm/v/r-watermark.svg?style=flat-square)](https://www.npmjs.org/package/r-watermark)
[![npm downloads](https://img.shields.io/npm/dm/r-watermark.svg?style=flat-square)](http://npm-stat.com/charts.html?package=r-watermark)

## Introduction

RWatermark is a mini watermark library based on React ⚛ .

## Installation

Use yarn
```bash
$ yarn add r-watermark
```

## Demo
To run the demo on your local server, please do as follows.
```bash
$ yarn
$ yarn start
```
Then open http://localhost:3000/

## Usage

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import { wrapWatermark } from "r-watermark";

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

render(
  <WithWatermark />,
  document.querySelector("#react-root")
);

```

## API
- WatermarkProps

| Prop           | Type           | Description                 | Default                                     |
|----------------|----------------|-----------------------------|---------------------------------------------|
| width          | number         | SVG width                   | 180                                         |
| height         | number         | SVG height                  | 80                                          |
| zIndex         | number         | Watermark div style z-index | 9999                                          |
| opacity        | number         | Watermark div style opacity | 0.15                                         |
| texts          | Text[]         | Watermark texts             | []                                          |

- Text

| Prop       | Type   | Description                   | Default     |
|------------|--------|-------------------------------|-------------|
| translateX | number | SVG TEXT transform translateX |             |
| translateY | number | SVG TEXT transform translateY |             |
| rotate     | number | SVG TEXT transform rotate     |             |
| fill       | string | SVG TEXT fill                 | "#000000"   |
| fontFamily | string | SVG TEXT font family          | "monospace" |
| text       | string | SVG TEXT inner text           |             |

## License
MIT
