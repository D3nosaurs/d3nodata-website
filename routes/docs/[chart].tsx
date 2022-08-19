/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import GetStarted from "../../components/Docs/GetStarted.tsx";
import { tw } from "@twind";

import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";

// import barPropChartInfo from "../../chart-props-info/barPropChartInfo.ts";
// import piedonutPropChartInfo from "../../chart-props-info/piedonutPropChartInfo.ts";
// import linePropChartInfo from "../../chart-props-info/linePropChartInfo.ts";
// import scatterPlotChartInfo from "../../chart-props-info/scatterplotPropChartInfo.ts";

// import PropsTable from "../../components/PropsTable.tsx";

import DocsBar from "../../components/Docs/DocsBar.tsx";
import DocsDonutPie from "../../components/Docs/DocsDonutPie.tsx";
import DocsLine from "../../components/Docs/DocsLine.tsx";
import DocsScatterPlot from "../../components/Docs/DocsScatterPlot.tsx";

export default function DocsPage(props: PageProps) {
  // console.log('props:', props)
  const { chart } = props.params;
  let content;

  if (chart === "bar") content = <DocsBar />;
  else if (chart === "piedonut") content = <DocsDonutPie />;
  else if (chart === "line") content = <DocsLine />;
  else if (chart === "scatter") content = <DocsScatterPlot />;

  return (
    <>
      <NavBar />
      <div class={tw`grid grid-cols-7`}>
        <div class={tw`border-r-2 col-span-1`}>
          <DocsSideBar />
        </div>

        {/* <DocsBar /> */}
        <div class={tw`w-full col-span-6`}>
          {content}
        </div>
        {/* <PropsTable info={content}/> */}
      </div>
    </>
  );
}
