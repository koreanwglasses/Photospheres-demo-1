import * as d3 from "d3";
import { ClusterData } from "./types/cluster";
import { HierarchyCircularNode } from "d3";
import { keyByPrefix } from "./utils";
import { PhotospheresProps } from "./components/photospheres";

type Color = d3.Color | string;
type Node = HierarchyCircularNode<ClusterData>;

const colorEq = (a: Color, b: Color): boolean =>
  d3.color(a.toString()).toString() == d3.color(b.toString()).toString();

export const colorMappings = {
  sequential: (palette: (x: number) => Color) => (
    d: Node,
    { strokeOnly }: { strokeOnly?: boolean }
  ): Color => (d.children ? palette(d.depth) : strokeOnly ? "black" : "white"),

  qualitative: (palette: (x: number) => Color): ((d: Node) => Color) => {
    const whichChildMemo: { [key: string]: number } = {};
    const whichChild = (d: Node): number =>
      whichChildMemo[d.data.name]
        ? whichChildMemo[d.data.name]
        : (whichChildMemo[d.data.name] = d.parent.children.indexOf(d));

    const nodeColorMemo: { [key: string]: Color } = {};
    const nodeColor = (d: Node): Color => {
      if (!d.parent) return "white";
      if (!(d.data.name in nodeColorMemo)) {
        let i = whichChild(d);

        for (let j = 0; j < 3; j++) {
          if (
            whichChild(d) > 0 &&
            colorEq(palette(i), nodeColor(d.parent.children[whichChild(d) - 1]))
          )
            i++; // dont repeat colors twice in a row

          if (colorEq(palette(i), nodeColor(d.parent))) i++; // make sure color is not same as parent
        }

        nodeColorMemo[d.data.name] = palette(i);
      }
      return nodeColorMemo[d.data.name];
    };
    return nodeColor;
  },

  adaptive: (palette: (x: number) => Color) => (d: Node): Color => {
    const depthRatio = d.depth / (d.depth + d.height);
    return palette(depthRatio);
  },

  constant: (palette: (x: number) => Color) => (d: Node): Color => palette(0)
};

export function createColorMapping(
  palette: ((x: number) => Color) | Color[],
  type:
    | string
    | ((
        palette: (x: number) => Color
      ) => (d: Node, props: PhotospheresProps) => Color)
): (d: Node, props: PhotospheresProps) => Color {
  const paletteF = Array.isArray(palette)
    ? (i: number): Color => palette[i % palette.length]
    : palette;
  if (typeof type === "string") {
    const colorMapping = keyByPrefix(colorMappings, type);
    return colorMapping(paletteF);
  } else {
    return type(paletteF);
  }
}

export const palettes = {
  // Bostock //
  // 0: Blue-Green color scale
  bugn: d3
    .scaleLinear()
    .domain([0, 5])
    // @ts-ignore
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl),

  // Choi //
  // 1: YlGnBu
  ylgnbu: [
    "#ffffd9",
    "#edf8b1",
    "#c7e9b4",
    "#7fcdbb",
    "#41b6c4",
    "#1d91c0",
    "#225ea8",
    "#253494",
    "#081d58",
    "#b3b3b3"
  ],

  // 2: Greyscale
  greyscale: d3
    .scaleLinear()
    .domain([0, 9])
    // @ts-ignore
    .range(["white", "black"])
    .interpolate(d3.interpolateHcl)
};
