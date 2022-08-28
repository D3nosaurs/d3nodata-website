/** @jsx h */
import { Fragment, h } from "preact";
import ChartContainer from "../islands/ChartContainer.tsx";
import NavBar from "../islands/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";

export default function SamplesPage() {
  return (
    <Fragment>
      <Head>
        <title>Samples</title>
      </Head>
      <NavBar />
      <ChartContainer />
    </Fragment>
  );
}
