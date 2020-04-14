import * as React from "react";
import * as PropTypes from "prop-types";
import * as d3 from "d3";
import { ClusterData } from "../types/cluster";
import { validate, memoize } from "../utils";

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

/**
 * @param {Node} node
 */
function clusterCenter(node: Node): [number, number] {
  const points = node
    .leaves()
    .map(leaf => [leaf.data.x, leaf.data.y] as [number, number]);
  return centroid(points);
}

/**
 * @param {Node} node
 */
function clusterRadius(node: Node): number {
  const points = node
    .leaves()
    .map(leaf => [leaf.data.x, leaf.data.y] as [number, number]);
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

type SVGSelection = d3.Selection<SVGSVGElement, ClusterData, null, undefined>;
type ClustersSelection = d3.Selection<
  d3.BaseType,
  Node,
  SVGGElement,
  ClusterData
>;
type LeavesSelection = d3.Selection<
  d3.BaseType,
  Node,
  SVGGElement,
  ClusterData
>;

export class Chart extends React.Component<ChartProps> {
  static propTypes = {
    data: PropTypes.objectOf(props => validate(ClusterData, props)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    clusterOpacity: PropTypes.number,
    clusterScale: PropTypes.number
  };

  static defaultProps = {
    clusterOpacity: 0.5,
    clusterScale: 1.5
  };

  private svgRef = React.createRef<SVGSVGElement>();

  private currentFocus: Node = null;
  private view: View = [0, 0, 0];

  // Memoized versions of functions above. Dependent on the specific data
  private clusterCenter: typeof clusterCenter;
  private clusterRadius: typeof clusterRadius;
  private colorIndex: typeof colorIndex;

  private root: Node = null;
  private svg: SVGSelection = null;
  private clusters: ClustersSelection = null;
  private leaves: LeavesSelection = null;

  constructor(props: ChartProps) {
    super(props);

    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.leafColor = this.leafColor.bind(this);
  }

  private initClusterFunctions(): void {
    this.clusterCenter = memoize(clusterCenter, node => node.value);
    this.clusterRadius = memoize(clusterRadius, node => node.value);
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
      .on("click", () => this.focus(this.root));
  }

  private initClusters(): void {
    this.clusters = this.svg
      .append("g")
      .selectAll("circle")
      .data(this.root.descendants().filter(node => node.children))
      .join("circle")
      .attr("fill-opacity", 0)
      .attr(
        "fill",
        node => colorCycle[this.colorIndex(node) % colorCycle.length]
      )
      .on("click", this.handleNodeClick);
  }

  private initLeaves(): void {
    this.leaves = this.svg
      .append("g")
      .selectAll("circle")
      .data(this.root.leaves())
      .join("circle")
      .on("click", this.handleNodeClick);
  }

  /**
   * @param {Node} d
   */
  handleNodeClick(d: Node): void {
    const branchIndex = whichBranch(this.currentFocus, d);
    if (branchIndex == -1 && this.currentFocus.parent) {
      this.focus(this.currentFocus.parent);
      return;
    }
    this.focus(this.currentFocus.children[branchIndex]);
    d3.event.stopPropagation();
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
   * @param {[number, number, number]} view [x, y, scale]
   */
  setZoom(view: View): void {
    this.view = view;
    const [x, y, scale] = view;

    this.leaves
      .attr(
        "transform",
        node =>
          `translate(${(node.data.x - x) * scale},${(node.data.y - y) * scale})`
      )
      .attr("r", 5);

    this.clusters
      .attr("transform", node => {
        const [cx, cy] = this.clusterCenter(node);
        return `translate(${(cx - x) * scale},${(cy - y) * scale})`;
      })
      .attr(
        "r",
        node => this.props.clusterScale * this.clusterRadius(node) * scale
      );
  }

  /**
   * @param {Node} node
   */
  focus(node: Node, animate = true): void {
    this.currentFocus = node;
    const [x, y, scale] = rectToView(
      fitRect(scaleRectangle(node.data.bounds, 1.1), [
        this.props.width,
        this.props.height
      ]),
      this.props.width
    );

    const transition = this.svg.transition().duration(750);
    if (animate) {
      transition.tween("zoom", () => {
        const f = ([x, y, scale]: View): View => [x, y, 2000 / scale];

        const i = d3.interpolateZoom(f(this.view), f([x, y, scale]));
        return (t: number): void => this.setZoom(f(i(t)));
      });
    } else {
      this.setZoom([x, y, scale]);
    }

    this.leaves
      .transition(transition)
      .style("fill", this.leafColor)
      .style("fill-opacity", node =>
        whichBranch(this.currentFocus, node) == -1 ? 0.2 : 1
      );

    /**
     * Helper function for showing/hiding relevant clusters
     */
    const onStart = (
      node: Node,
      el: { style: { visibility: string } }
    ): void => {
      if (
        el.style.visibility != "visible" &&
        this.currentFocus.children.indexOf(node) != -1
      ) {
        el.style.visibility = "visible";
      }
    };

    /**
     * @param {Node} node
     * @param {Element} el
     */
    const onEnd = (node: Node, el: { style: { visibility: string } }): void => {
      el.style.visibility =
        this.currentFocus.children.indexOf(node) == -1 ? "hidden" : "visible";
    };

    this.clusters
      .transition(transition)
      .style(
        "fill-opacity",
        node =>
          this.props.clusterOpacity *
          (this.currentFocus.children.indexOf(node) != -1 ? 1 : 0)
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
    this.initClusters();
    this.initLeaves();

    this.focus(this.root, false);
  }

  render() {
    return <svg ref={this.svgRef}></svg>;
  }
}
