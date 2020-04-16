import * as React from "react";
import * as PropTypes from "prop-types";
import * as d3 from "d3";
import { ClusterData } from "../types/cluster";
import { validate, memoize } from "../utils";
import { Preview } from "./preview";

type Rectangle = [number, number, number, number];
type View = [number, number, number];

/**
 * Returns the smallest dimensions {width, height} that fit the content
 * dimensions (width >= contentWidth and height >= contentHeight) while
 * maintaining the aspect ratio of the frame (width/height ==
 * frameWidth/frameHeight)
 * @param {[number, number, number, number]} contentBounds
 * @param {[number, number]} frameSize
 */
function fitRect(
  [contentLeft, contentTop, contentWidth, contentHeight]: Rectangle,
  [frameWidth, frameHeight]: [number, number]
): Rectangle {
  const scale = Math.max(
    contentWidth / frameWidth,
    contentHeight / frameHeight
  );

  const width = frameWidth * scale;
  const height = frameHeight * scale;
  const x = contentLeft - (width - contentWidth) / 2;
  const y = contentTop - (height - contentHeight) / 2;

  return [x, y, width, height];
}

/**
 * @param {Rectangle} rect
 * @param {number} frameWidth
 */
function rectToView(
  [left, top, width, height]: Rectangle,
  frameWidth: number
): View {
  return [left + width / 2, top + height / 2, frameWidth / width];
}

/**
 * Scales a rectangle out from its center
 * @param {Rectangle} rectangle
 * @param {number} scale
 */
function scaleRectangle(
  [x, y, width, height]: Rectangle,
  scale: number
): Rectangle {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const newWidth = width * scale;
  const newHeight = height * scale;
  return [centerX - newWidth / 2, centerY - newHeight / 2, newWidth, newHeight];
}

/**
 * @param {d3.HierarchyNode<any>} node
 * @returns {number}
 */
function whichChild<T>(node: d3.HierarchyNode<T>): number {
  if (!node.parent) return 0;
  return node.parent.children.indexOf(node);
}

/**
 * @param {d3.HierarchyNode<any>} branch
 * @param {d3.HierarchyNode<any>} target
 * @returns {number}
 */
function whichBranch<T>(
  branch: d3.HierarchyNode<T>,
  target: d3.HierarchyNode<T>
): number {
  const lineage = target.ancestors();
  const branchIndex = lineage.indexOf(branch);
  if (branchIndex <= 0) return -1;
  return whichChild(lineage[branchIndex - 1]);
}

/**
 * @param {[number, number][]} points
 */
function centroid(points: [number, number][]): [number, number] {
  const [sumX, sumY] = points.reduce(
    ([x, y], [accX, accY]) => [x + accX, y + accY],
    [0, 0]
  );
  return [sumX / points.length, sumY / points.length];
}

/**
 * @param {[number, number][]} points
 */
function stdDist(points: [number, number][]): number {
  const [cX, cY] = centroid(points);
  const dists2 = points.map(
    ([x, y]) => Math.pow(cX - x, 2) + Math.pow(cY - y, 2)
  );
  const meanDist2 = dists2.reduce((a, b) => a + b, 0) / dists2.length;

  const dists = dists2.map(Math.sqrt);
  const meanDist = dists.reduce((a, b) => a + b, 0) / dists.length;

  return Math.sqrt(meanDist2 - Math.pow(meanDist, 2));
}

/**
 * Colors this node with a non-negative integer such that colorIndex(node) !=
 * colorIndex(node.parent) and colorIndex(node) != colorIndex(sibling)
 * @param {d3.HierarchyNode<any>} node
 */
function colorIndex<T>(node: d3.HierarchyNode<T>): number {
  let i = whichChild(node);
  i += node.parent && colorIndex(node.parent) <= i ? 1 : 0;
  return i;
}

type Node = d3.HierarchyNode<ClusterData>;

function clusterBounds(node: Node, depth: number): Rectangle {
  const xs = node.leaves().map(leaf => leaf.data.x[depth]);
  const ys = node.leaves().map(leaf => leaf.data.y[depth]);
  const left = Math.min(...xs);
  const top = Math.min(...ys);
  const width = Math.max(...xs) - left;
  const height = Math.max(...ys) - top;
  return [left, top, width, height];
}

function nodeLocation(node: Node, depth: number): [number, number] {
  if (node.depth == 0) return [0, 0];

  const i = Math.min(depth, node.depth);

  const x = node.data.x[i];
  const y = node.data.y[i];
  return [x, y];
}

function clusterRadius(node: Node, depth: number): number {
  const points = node
    .leaves()
    .map(leaf => [leaf.data.x[depth], leaf.data.y[depth]] as [number, number]);
  return stdDist(points);
}

const colorCycle = [
  "#66c2a5",
  "#fc8d62",
  "#8da0cb",
  "#e78ac3",
  "#a6d854",
  "#ffd92f",
  "#e5c494"
];

interface ChartProps {
  data: ClusterData;
  width: number;
  height: number;
  clusterOpacity?: number;
  clusterScale?: number;
}

interface ChartState {
  showPreview: boolean;
  hoverNode: Node;
  mouseX: number;
  mouseY: number;
}

type SVGSelection = d3.Selection<SVGSVGElement, ClusterData, null, undefined>;
type LeavesSelection = d3.Selection<
  d3.BaseType,
  Node,
  SVGGElement,
  ClusterData
>;

export class Chart extends React.Component<ChartProps, ChartState> {
  static propTypes = {
    data: PropTypes.objectOf(props => validate(ClusterData, props)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    clusterOpacity: PropTypes.number,
    clusterScale: PropTypes.number
  };

  static defaultProps = {
    clusterOpacity: 0.2,
    clusterScale: 1.5
  };

  state = {
    showPreview: false,
    hoverNode: null as Node,
    mouseX: 0,
    mouseY: 0
  };

  private svgRef = React.createRef<SVGSVGElement>();

  private currentFocus: Node = null;

  // Memoized versions of functions above. Dependent on the specific data
  private clusterBounds: typeof clusterBounds;
  private colorIndex: typeof colorIndex;

  private root: Node = null;
  private svg: SVGSelection = null;
  private leaves: LeavesSelection = null;

  constructor(props: ChartProps) {
    super(props);

    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.leafColor = this.leafColor.bind(this);
  }

  private initClusterFunctions(): void {
    this.clusterBounds = memoize(
      clusterBounds,
      (node, depth) => node.value + "," + depth
    );
    this.colorIndex = memoize(colorIndex, node => node.value);
  }

  private initRoot(): void {
    this.root = d3
      .hierarchy(this.props.data)
      .sum(node => node.size)
      .sort((a, b) => b.data.size - a.data.size);
  }

  private initSVG(): void {
    this.svg = d3
      .select(this.svgRef.current)
      .attr(
        "viewBox",
        // @ts-ignore
        [
          -this.props.width / 2,
          -this.props.height / 2,
          this.props.width,
          this.props.height
        ]
      )
      .style("font", "10px sans-serif")
      .attr("text-anchor", "middle")
      .style("cursor", "pointer")
      .on("click", () => this.focus(this.currentFocus.parent || this.root))
      .on("mousemove", () => {
        const [x, y] = d3.mouse(this.svg.node());
        const mouseX = x + this.props.width / 2;
        const mouseY = y + this.props.height / 2;
        this.setState(prevState => prevState.showPreview && { mouseX, mouseY });
      });
  }

  private initLeaves(): void {
    this.leaves = this.svg
      .append("g")
      .selectAll("circle")
      .data(this.root.leaves())
      .join("circle")
      .on("click", this.handleNodeClick)
      .attr("r", 15)
      .on("mouseover", node => {
        this.setState({
          showPreview: true,
          hoverNode: node
        });
      })
      .on("mouseout", node => {
        setTimeout(
          () =>
            this.setState(
              prevState =>
                prevState.hoverNode == node && {
                  showPreview: false
                }
            ),
          1000
        );
      });
  }

  /**
   * @param {Node} d
   */
  handleNodeClick(d: Node): void {
    d3.event.stopPropagation();

    const branchIndex = whichBranch(this.currentFocus, d);

    if (branchIndex != -1 && this.currentFocus.children) {
      this.focus(this.currentFocus.children[branchIndex]);
    }
  }

  /**
   * @param {Node} node
   */
  clusterColor(node: Node): string {
    return colorCycle[this.colorIndex(node) % colorCycle.length];
  }

  leafColor(node: Node): string {
    const bi = whichBranch(this.currentFocus, node);
    return bi != -1
      ? this.clusterColor(this.currentFocus.children[bi])
      : "#808080";
  }

  /**
   * @param {Node} node
   */
  focus(node: Node): void {
    this.currentFocus = node;
    const [x, y, scale] = rectToView(
      fitRect(scaleRectangle(this.clusterBounds(node, node.depth), 1.1), [
        this.props.width,
        this.props.height
      ]),
      this.props.width
    );

    const transition = this.svg.transition().duration(750);

    this.leaves
      .filter(node => whichBranch(this.currentFocus, node) != -1)
      .transition(transition)
      .attr("transform", node => {
        const [cx, cy] = nodeLocation(node, this.currentFocus.depth);
        return `translate(${(cx - x) * scale},${(cy - y) * scale})`;
      });

    /**
     * Helper function for showing/hiding relevant clusters
     */
    const onStart = (
      node: Node,
      el: { style: { visibility: string } }
    ): void => {
      if (
        el.style.visibility != "visible" &&
        whichBranch(this.currentFocus, node) != -1
      ) {
        el.style.visibility = "visible";
      }
    };

    const onEnd = (node: Node, el: { style: { visibility: string } }): void => {
      el.style.visibility =
        whichBranch(this.currentFocus, node) == -1 ? "hidden" : "visible";
    };

    this.leaves
      .transition(transition)
      .style("fill", this.leafColor)
      .style("fill-opacity", node =>
        whichBranch(this.currentFocus, node) == -1 ? 0 : 1
      )
      .on("start", function(node) {
        // @ts-ignore
        onStart(node, this);
      })
      .on("end", function(node) {
        // @ts-ignore
        onEnd(node, this);
      });
  }

  componentDidMount() {
    this.initClusterFunctions();
    this.initRoot();
    this.initSVG();
    this.initLeaves();

    this.focus(this.root);
  }

  render() {
    const { hoverNode } = this.state;
    let imageSrc: string;
    let imageSrc2: string;

    if (hoverNode) {
      imageSrc = hoverNode.data.preview;
      const branch = whichBranch(this.currentFocus, hoverNode);
      imageSrc2 =
        branch != -1 && this.currentFocus.children[branch].data.preview;
    }

    return (
      <>
        <svg ref={this.svgRef}></svg>
        {this.state.showPreview && this.svgRef.current && (
          <Preview
            bounds={{
              left: 0,
              top: 0,
              width: this.props.width,
              height: this.props.height
            }}
            x={this.state.mouseX}
            y={this.state.mouseY}
            imageSrc={imageSrc}
            imageSrc2={imageSrc2}
            backgroundColor={this.leafColor(hoverNode)}
          />
        )}
      </>
    );
  }
}
