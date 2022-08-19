/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";


import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";
import DocsBar from "../../components/Docs/DocsBar.tsx";

export default function ChartHomepage () {

  return (
    <>
      <NavBar />
      <div class={tw`grid grid-cols-7 h-screen`}>
        <div class={tw`border-r-2 col-span-1`} >
          <DocsSideBar />
        </div>  
        <h1 class={tw`text-4xl font-semibold text-green-600 p-5 col-span-6 h-full`}>Documentation</h1>
      </div>
      
    </>
  )
}