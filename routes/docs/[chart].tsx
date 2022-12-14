/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";
import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";
import DocsBar from "../../components/Docs/DocsBar.tsx";
import DocsDonutPie from "../../components/Docs/DocsDonutPie.tsx";
import DocsLine from "../../components/Docs/DocsLine.tsx";
import DocsScatterPlot from "../../components/Docs/DocsScatterPlot.tsx";
import DocsChoropleth from "../../components/Docs/DocsChoropleth.tsx";
import { Head } from "$fresh/runtime.ts";

export default function DocsPage(props: PageProps) {
  const { chart } = props.params;
  let content;
  let selection;

  //logic flow for the URL and page change from params
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
  } else if (chart === "choropleth") {
    content = <DocsChoropleth />;
    selection = <DocsSideBar selectedChart="choropleth" />;
  }

  return (
    <>
      <NavBar />
      <Head>
        <title>
          {chart[0].toUpperCase() + chart.slice(1)} Chart Documentation
        </title>
      </Head>
      <div class={tw`w-full flex items-center justify-center`}>
        <div class={tw`grid grid-cols-5 h-full w-full max-w-5xl`}>
          <div
            class={tw`col-span-1 w-[max-content] max-w-l h-full`}
          >
            {selection}
          </div>
          <div class={tw`col-span-4 px-5 w-full h-full max-w-5xl gap-10`}>
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
