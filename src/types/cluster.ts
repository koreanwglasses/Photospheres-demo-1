<<<<<<< HEAD
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
=======
import * as t from "io-ts";

export interface ClusterNode {
  size?: number;
  preview?: string;
  name?: string;
  children?: Array<ClusterNode>;
}

export const ClusterNode: t.Type<ClusterNode> = t.recursion("ClusterNode", () =>
  t.partial({
    size: t.number,
    preview: t.string,
    name: t.string,
    children: t.array(ClusterNode)
  })
);
>>>>>>> hashing
