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

import Button from "../../islands/Button.tsx";

import DocsBar from "../../components/Docs/DocsBar.tsx";
import DocsDonutPie from "../../components/Docs/DocsDonutPie.tsx";
import DocsLine from "../../components/Docs/DocsLine.tsx";
import DocsScatterPlot from "../../components/Docs/DocsScatterPlot.tsx";

export default function DocsPage(props: PageProps) {
  // console.log('props:', props)
  const { chart } = props.params;
  let content;
  let selection;
  if (chart === "bar") {
    content = <DocsBar />;
    selection = <DocsSideBar selectedChart="bar" />;
  } else if (chart === "piedonut") {
    content = <DocsDonutPie />;
    selection = <DocsSideBar selectedChart="piedonut" />;
  } else if (chart === "line") {
    content = <DocsLine />;
    selection = <DocsSideBar selectedChart="line" />;
  } else if (chart === "scatter") {
    content = <DocsScatterPlot />;
    selection = <DocsSideBar selectedChart="scatter" />;
  }

  return (
    <>
      <NavBar />
      <div class={tw`w-full flex items-center justify-center`}>
        <div class={tw`grid grid-cols-5 gap-2 h-full w-full max-w-5xl`}>
          <div
            class={tw`col-span-1 w-[max-content] max-w-l h-full`}
          >
            {selection}
          </div>
          <div class={tw`col-span-4 p-5 w-full h-full flex flex-col gap-10`}>
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
