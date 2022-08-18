/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";


import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";


export default function ChartHomepage () {

  return (
    <>
      <NavBar />
      <h1 class={tw`text-4xl font-semibold text-green-600`}>Pick any chart!</h1>
      <DocsSideBar />
    </>
  )
}