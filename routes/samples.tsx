/** @jsx h */
import { Fragment, h } from "preact";
// import ChartContainer from "../islands/ChartContainer.tsx";
import Samples from "../islands/Samples.tsx";
import ChartContainer from "../islands/ChartContainer.tsx";
import { useState } from "preact/hooks";
import NavBar from "../islands/NavBar.tsx";
import Button from "../islands/Button.tsx";
import { tw } from "@twind";

export default function SamplesPage() {
  return (
    <Fragment>
      <NavBar />
      <ChartContainer />
    </Fragment>
  );
}
