import React, { Component, CSSProperties } from "react";

export interface Text {
  translateX: number;
  translateY: number;
  rotate: number;
  text: string;
  fill?: string; // Text Color. Default as "#000000".
  fontFamily?: string; // Text Font Family. Default as "monospace".
}

export interface WatermarkProps {
  width?: number; // SVG width. Default as "180"
  height?: number; // SVG height. Default as "80"
  zIndex?: number; // Watermark div style z-index. Default as "-1".
  opacity?: number; // Watermark div style opacity. Default as ".15".
  texts: Text[];
}

export interface WatermarkState {
  bgImageUrl: null | string;
}

export default class Watermark extends Component<
  WatermarkProps,
  WatermarkState
> {
  static defaultProps: Partial<WatermarkProps> = {
    width: 180,
    height: 80,
    zIndex: 9999,
    opacity: 0.15,
    texts: [],
  };

  state: WatermarkState = {
    bgImageUrl: null,
  };

  private img: HTMLImageElement;

  componentWillMount() {
    const { texts, width, height } = this.props;

    const svgTexts = texts.map(
      ({
        translateX,
        translateY,
        rotate,
        text,
        fill = "#000000",
        fontFamily = "monospace",
      }: Text) => {
        const t =
          `<text` +
          ` fill="${fill}"` +
          ` text-anchor="middle"` +
          ` font-family="${fontFamily}"` +
          ` transform="translate(${translateX}, ${translateY}) rotate(${rotate})"` +
          `>` +
          `${text}` +
          `</text>`;
        return t;
      }
    );

    const svgStr =
      `<svg` +
      ` xmlns="http://www.w3.org/2000/svg"` +
      ` width="${width}"` +
      ` height="${height}"` +
      `>` +
      `${svgTexts}` +
      `</svg>`;

    const DOMURL = window.URL || window.webkitURL || window;

    const img = new Image();
    const svg = new Blob([svgStr], { type: "image/svg+xml" });
    // Reference https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas
    const url = DOMURL.createObjectURL(svg);
    const ctx = document.createElement("canvas").getContext("2d");

    const onImgLoad = () => {
      if (ctx) {
        ctx.drawImage(img, 0, 0);
      }
      DOMURL.revokeObjectURL(url);
    };

    img.addEventListener("load", onImgLoad);

    img.src = url;

    this.img = img;

    this.setState({ bgImageUrl: url });
  }

  componentWillUnMount() {
    if (this.img) {
      this.img.removeEventListener("load");
    }
  }

  render() {
    const { zIndex, opacity } = this.props;
    const { bgImageUrl } = this.state;

    let styles: Partial<CSSProperties> = {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      opacity,
      zIndex,
    };
    if (bgImageUrl) {
      styles = { ...styles, backgroundImage: `url(${bgImageUrl})` };
    }

    return <div style={styles} />;
  }
}
