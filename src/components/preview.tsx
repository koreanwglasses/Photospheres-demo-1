import * as React from "react";

interface PreviewProps {
  imageSrc: string;
  x: number;
  y: number;
  bounds: { left: number; top: number; width: number; height: number };
}

export class Preview extends React.Component<PreviewProps> {
  containerRef = React.createRef<HTMLDivElement>();

  render() {
    const { x, y, bounds, imageSrc } = this.props;
    const width =
      this.containerRef.current && this.containerRef.current.offsetWidth;
    const height =
      this.containerRef.current && this.containerRef.current.offsetHeight;

    const classList = ["photospheres-preview"];

    const flipUp = y + height - bounds.top > bounds.height;
    const flipLeft = x + width - bounds.left > bounds.width;

    if (flipUp && flipLeft) {
      classList.push("flipped-up-left");
    } else if (flipUp) {
      classList.push("flipped-up");
    } else if (flipLeft) {
      classList.push("flipped-left");
    }

    return (
      <div
        ref={this.containerRef}
        style={{
          top: y - (flipUp && height),
          left: x - (flipLeft && width)
        }}
        className={classList.join(" ")}
      >
        Preview: <span id="preview-name"></span>
        <br />
        <img src={imageSrc} width="160" height="120" />
      </div>
    );
  }
}
