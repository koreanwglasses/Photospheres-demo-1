import * as t from "io-ts";

export interface ClusterData {
  name?: string;
  preview?: string;
  size?: number;
  x?: number[];
  y?: number[];
  children?: ClusterData[];
}

export const ClusterData: t.Type<ClusterData> = t.recursion("ClusterData", () =>
  t.partial({
    name: t.string,
    preview: t.string,
    size: t.number,
    x: t.array(t.number),
    y: t.array(t.number),
    children: t.array(ClusterData)
  })
);
