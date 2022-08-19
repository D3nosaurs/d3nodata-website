/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import GetStarted from "../../components/Docs/GetStarted.tsx"
import { tw } from "@twind";

import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";

import barPropChartInfo from "../../chart-props-info/barPropChartInfo.ts";
import piedonutPropChartInfo from '../../chart-props-info/piedonutPropChartInfo.ts'
import linePropChartInfo from '../../chart-props-info/linePropChartInfo.ts'
import scatterPlotChartInfo from '../../chart-props-info/scatterplotPropChartInfo.ts'

import PropsTable from "../../components/PropsTable.tsx";

import DocsBar from "../../components/Docs/DocsBar.tsx";

export default function DocsPage (props: PageProps) {
  // console.log('props:', props)
  const { chart } = props.params;
  let content;

  if (chart === 'bar') content = <DocsBar />;
  else if (chart === 'piedonut') content = piedonutPropChartInfo;
  else if (chart === 'line') content = linePropChartInfo;
  else if (chart === 'scatter') content = scatterPlotChartInfo;
  // else content = GetStarted

  //not sure how props get passed down, but I think we can do something like this(line 32) based on page r/t chart-props-info

  return (
    <>
      <NavBar />
      <div class={tw`flex `} >

        <div flex-grow-2>
          <DocsSideBar />
        </div>
        
        {/* <DocsBar /> */}
        <div >
          { content }
        </div>
        {/* <PropsTable info={content}/> */}
      </div>
    </>
  )
}