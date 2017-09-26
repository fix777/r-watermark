import React, {
  Component,
  createElement,
  CSSProperties,
  ComponentClass,
} from "react";
import hoistStatics from "hoist-non-react-statics";

import Watermark, { WatermarkProps } from "./watermark";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export interface WithWatermarkProps {
  style: CSSProperties;
  watermark: JSX.Element;
}

export default function withWatermark<P>(options: WatermarkProps) {
  const watermark = <Watermark {...options} />;

  return function wrapWithWatermark(WrappedComponent: ComponentClass<P>) {
    const withWatermarkDisplayName = `WithWatermark(${getDisplayName(
      WrappedComponent
    )})`;

    class WithWatermark extends Component<P> {
      render() {
        const { style, ...rest } = this.props as any;
        const newStyle: CSSProperties = { ...style, position: "relative" };
        const mergedProps: P & WithWatermarkProps = {
          ...rest,
          style: newStyle,
          watermark,
        };
        return createElement<P>(WrappedComponent, mergedProps);
      }
    }

    (WithWatermark as ComponentClass<P>).displayName = withWatermarkDisplayName;

    return hoistStatics(WithWatermark, WrappedComponent);
  };
}
