import * as React from "react";

interface PreviewProps {
  imageSrc: string;
  imageSrc2?: string;
  x: number;
  y: number;
  bounds: { left: number; top: number; width: number; height: number };
  backgroundColor: string;
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
      classList.push("photospheres-flipped-up-left");
    } else if (flipUp) {
      classList.push("photospheres-flipped-up");
    } else if (flipLeft) {
      classList.push("photospheres-flipped-left");
    }

    return (
      <div
        ref={this.containerRef}
        style={{
          top: y - (flipUp ? 1 : 0) * (height + 10) + 5,
          left: x - (flipLeft ? 1 : 0) * (width + 10) + 5,
          backgroundColor: this.props.backgroundColor
        }}
        className={classList.join(" ")}
      >
        Preview: <span id="preview-name"></span>
        <br />
        <img src={imageSrc} width="160" height="120" />
        {this.props.imageSrc2 && (
          <>
            <br /> <img src={this.props.imageSrc2} width="160" height="120" />
          </>
        )}
      </div>
    );
  }
}
