import * as React from "react";
import * as ReactDOM from "react-dom";
import { Photospheres } from "./components/photospheres";
import { createColorMapping, palettes } from "./photospheres-color-schemes";
import { Chart } from "./components/tsne";

const root = document.getElementById("react-root");

(async (): Promise<void> => {
  const response = await fetch("example-data/cluster-data.json");
  const data = await response.json();
  ReactDOM.render(
    // <Photospheres
    //   data={data}
    //   height={720}
    //   width={1280}
    //   colorMapping={createColorMapping(palettes.ylgnbu, "seq")}
    // />,
    <Chart data={data} height={window.innerHeight} width={window.innerWidth} />,
    root
  );
})();
