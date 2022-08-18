/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import GetStarted from "../../components/Docs/GetStarted.tsx"
import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";
import barPropChartInfo from "../../chart-props-info/barPropChartInfo.ts";

import PropsTable from "../../components/PropsTable.tsx";


export default function DocsPage (props: PageProps) {
  const { page } = props.params;
  let content;

  if (page === 'bar') content = barPropChartInfo;
  // else if (page === 'donut') content = donutPropChartInfo;
  // else if (page === 'line') content = linePropChartInfo;
  // else if (page === 'scatter') content = scatterPlotChartInfo;
  // else 


  //not sure how props get passed down, but I think we can do something like this(line 32) based on page r/t chart-props-info
  

  return (
    <>
      <NavBar />
      <DocsSideBar />
      {/* <PropsTable graphProps={content}/> */}
    </>
  )
}