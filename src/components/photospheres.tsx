import * as React from "react";
import * as PropTypes from "prop-types";
import * as d3 from "d3";
import { ClusterData } from "../types/cluster";
import { validate } from "../utils";
import { HierarchyCircularNode } from "d3";
import {
  colorMappings,
  palettes,
  createColorMapping
} from "../photospheres-color-schemes";

const PADDING = 3;

const clamp = (x: number, min: number, max: number): number =>
  Math.min(Math.max(x, min), max);

type Color = d3.Color | string;
const luminance = (color: Color): number => d3.lab(color.toString()).l;

type Node = HierarchyCircularNode<ClusterData>;
type NodeSelection = d3.Selection<
  SVGCircleElement,
  Node,
  SVGSVGElement,
  ClusterData
>;

export interface PhotospheresProps {
  data: ClusterData;
  width: number;
  height: number;
  minRadius?: number;
  strokeOnly?: boolean;

  colorMapping?: (d: Node, props?: PhotospheresProps) => Color;
}

export class Photospheres extends React.Component<PhotospheresProps> {
  static propTypes = {
    data: PropTypes.objectOf(props => validate(ClusterData, props)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    minRadius: PropTypes.number,
    strokeOnly: PropTypes.bool
  };

  static defaultProps = {
    minRadius: 10,
    strokeOnly: false,

    colorMapping: createColorMapping(palettes.ylgnbu, colorMappings.sequential)
  };

  private svgRef = React.createRef<SVGSVGElement>();

  private svg: d3.Selection<SVGSVGElement, ClusterData, null, undefined>;
  private node: NodeSelection;
  private label: d3.Selection<SVGTextElement, Node, SVGSVGElement, ClusterData>;

  private focus: Node;
  private view: [number, number, number];

  private prevVisibleNodes: NodeSelection;

  private preview = React.createRef<HTMLDivElement>();
  private previewName = React.createRef<HTMLSpanElement>();
  private previewImg = React.createRef<HTMLImageElement>();

  // create the circle packing layout
  private pack(data: ClusterData): Node {
    const { width, height } = this.props;
    return d3
      .pack()
      .size([width, height])
      .padding(PADDING)(
      d3
        .hierarchy(data)
        .sum(d => d.size)
        .sort((a, b) => b.data.size - a.data.size)
    );
  }

  private zoomTo(v: [number, number, number]): void {
    const { width, height, minRadius, strokeOnly } = this.props;
    const k = width / v[2];

    this.view = v;

    this.label.attr(
      "transform",
      d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
    );

    const isVisible = (d: Node): boolean =>
      (d.x - v[0] + d.r) * k > -width / 2 &&
      (d.x - v[0] - d.r) * k < width / 2 &&
      (d.y - v[1] + d.r) * k > -height / 2 &&
      (d.y - v[1] - d.r) * k < height / 2 &&
      d.r * k >= minRadius / 2;

    const visibleNodes = this.node.filter(isVisible);
    visibleNodes.attr(
      "transform",
      d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
    );
    visibleNodes.attr("r", d => d.r * k);

    this.prevVisibleNodes.attr("visibility", d => "hidden");
    visibleNodes.attr("visibility", d => "visible");

    this.prevVisibleNodes = visibleNodes;

    if (strokeOnly) {
      visibleNodes.attr(
        "stroke-width",
        d =>
          Math.max((d.r * k) / 50, 1) *
          clamp((2 * d.r * k) / minRadius - 1, 0, 1)
      );
    } else {
      visibleNodes.attr("fill-opacity", d =>
        clamp((2 * d.r * k) / minRadius - 1, 0, 1)
      );
    }
  }

  private zoom(d: Node, durationMs = 750): void {
    const { width, height } = this.props;

    this.focus = d;

    const k = this.focus.r * 2 * Math.max(1, width / height);

    const transition = this.svg
      .transition()
      .duration(durationMs)
      .tween("zoom", d => {
        const i = d3.interpolateZoom(this.view, [
          this.focus.x,
          this.focus.y,
          k
        ]);
        return (t: number): void => this.zoomTo(i(t));
      });

    const focus = this.focus;
    this.label
      .filter(function(d: Node) {
        return d.parent === focus || this.style.display === "inline";
      })
      .transition(transition)
      .style("fill-opacity", (d: Node) => (d.parent === focus ? 1 : 0))
      .on("start", function(d) {
        if (d.parent === focus) this.style.display = "inline";
      })
      .on("end", function(d) {
        if (d.parent !== focus) this.style.display = "none";
      });
  }

  private textColor(d: Node): string {
    return luminance(this.props.colorMapping(d, this.props)) > 70
      ? "black"
      : "white";
  }

  private showPreview(d: Node): void {
    if (d.data.preview) {
      this.previewImg.current.setAttribute("src", d.data.preview);
      this.previewName.current.textContent = d.data.name;
      this.preview.current.removeAttribute("hidden");
      this.preview.current.style.backgroundColor = this.props
        .colorMapping(d, this.props)
        .toString();
      this.preview.current.style.color = this.textColor(d);
    }
  }

  private hidePreview(): void {
    this.preview.current.setAttribute("hidden", "");
  }

  private chart(data: ClusterData): void {
    const { width, height, strokeOnly, colorMapping } = this.props;
    const root = this.pack(data);

    this.focus = root;

    this.svg = d3
      .select(this.svgRef.current)
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("display", "block")
      .style(
        "background",
        strokeOnly ? "white" : colorMapping(root, this.props).toString()
      )
      .style("cursor", "pointer")
      .on("click", () => this.zoom(root));

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this.node = this.svg
      .append("g")
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .join("circle")
      .attr("fill", (d: Node) =>
        strokeOnly ? "white" : colorMapping(d, this.props).toString()
      )
      .attr("stroke", (d: Node) =>
        strokeOnly ? colorMapping(d, this.props).toString() : null
      )
      .on("mouseover", function(d) {
        if (strokeOnly) {
          // darken outline on hover
          d3.select(this).attr("stroke", (d: Node) =>
            d3
              .color(colorMapping(d, self.props).toString())
              .darker()
              .toString()
          );
        } else {
          d3.select(this).attr("stroke", "#000");
        }
        self.showPreview(d);
      })
      .on("mouseout", function() {
        if (strokeOnly) {
          d3.select(this).attr("stroke", (d: Node) =>
            colorMapping(d, self.props).toString()
          );
        } else {
          d3.select(this).attr("stroke", null);
        }
        self.hidePreview();
      })
      .on(
        "click",
        (d: Node) =>
          this.focus !== d &&
          (d.children && this.zoom(d), d3.event.stopPropagation())
      ) as NodeSelection;

    this.label = this.svg
      .append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
      .style("fill", d => (strokeOnly ? "black" : this.textColor(d)))
      .style("fill-opacity", d => (d.parent === root ? 1 : 0))
      .style("display", d => (d.parent === root ? "inline" : "none"))
      .text(d => d.data.name) as d3.Selection<
      SVGTextElement,
      Node,
      SVGSVGElement,
      ClusterData
    >;

    this.prevVisibleNodes = this.node;

    this.zoomTo([
      root.x,
      root.y,
      this.focus.r * 2 * Math.max(1, width / height)
    ]);
  }

  private handleMouseMove(
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void {
    const { clientX, clientY } = e;

    const previewRect = this.preview.current.getBoundingClientRect();
    const svgRect = this.svgRef.current.getBoundingClientRect();

    const flipUp = clientY + previewRect.height > svgRect.bottom;
    const flipLeft = clientX + previewRect.width > svgRect.right;

    this.preview.current.classList.remove(
      "photospheres-flipped-up",
      "photospheres-flipped-left",
      "photospheres-flipped-up-left"
    );

    if (flipUp && flipLeft) {
      this.preview.current.classList.add("photospheres-flipped-up-left");
    } else if (flipUp) {
      this.preview.current.classList.add("photospheres-flipped-up");
    } else if (flipLeft) {
      this.preview.current.classList.add("photospheres-flipped-left");
    }

    this.preview.current.style.top =
      clientY - (flipUp && previewRect.height) + "px";
    this.preview.current.style.left =
      clientX - (flipLeft && previewRect.width) + "px";
  }

  componentDidMount(): void {
    const { data } = this.props;
    this.chart(data);
  }

  render(): JSX.Element {
    return (
      <>
        <svg
          ref={this.svgRef}
          onMouseMove={(e): void => this.handleMouseMove(e)}
          onMouseLeave={(): void => this.hidePreview()}
        ></svg>
        <div ref={this.preview} className="photospheres-preview">
          Preview:{" "}
          <span ref={this.previewName} className="photospheres-preview-name" />{" "}
          <br />
          <img
            ref={this.previewImg}
            className="photospheres-preview-img"
            width={160}
            height={120}
          />
        </div>
      </>
    );
  }
}
