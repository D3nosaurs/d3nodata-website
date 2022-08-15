/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import GetStarted from "../../components/Docs/GetStarted.tsx"
import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";

export default function DocsPage (props: PageProps) {
  const { page } = props.params;
  let content;

  // if (page === 'bar') content = BarDocs;
  // else if (page === 'donut') content = DonutDocs;
  // else if (page === 'line') content = LineDocs;
  // else if (page === 'scatter') content = ScatterPlotDocs;
  // else 

  return (
    <>
      <NavBar />
      <DocsSideBar />
      { content }
    </>
  )
}