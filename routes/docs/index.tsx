/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";

import NavBar from "../../islands/NavBar.tsx";
import DocsSideBar from "../../components/Docs/Sidebar.tsx";
import GetStarted from "../../components/Docs/GetStarted.tsx";

export default function ChartHomepage() {
  return (
    <>
      <NavBar />
      <div class={tw`w-full flex items-center justify-center`}>
        <div class={tw`grid grid-cols-5 gap-2 h-full w-full max-w-5xl`}>
          <div
            class={tw`col-span-1 w-[max-content] max-w-l h-full`}
          >
            <DocsSideBar selectedChart="" />
          </div>
          <div class={tw`col-span-4 w-full h-full flex flex-col pt-5 pl-5`}>
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
}
