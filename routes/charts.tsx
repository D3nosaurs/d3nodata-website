/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

import ChartContainer from "../islands/ChartContainer.tsx";

export default function Charts(props: PageProps) {

  return (
    // <div>Charts {props.params.name}</div>
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <ChartContainer />
    </div>
  )
}