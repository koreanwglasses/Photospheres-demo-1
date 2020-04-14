import * as t from "io-ts";

export interface ClusterData {
  name?: string;
  preview?: string;
  size?: number;
  bounds?: [number, number, number, number];
  x?: number;
  y?: number;
  children?: Array<ClusterData>;
}

export const ClusterData: t.Type<ClusterData> = t.recursion("ClusterData", () =>
  t.partial({
    name: t.string,
    preview: t.string,
    size: t.number,
    bounds: t.tuple([t.number, t.number, t.number, t.number]),
    x: t.number,
    y: t.number,
    children: t.array(ClusterData)
  })
);
