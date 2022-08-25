/** @jsx h */
import { Fragment, h } from "preact";
import ChartContainer from "../islands/ChartContainer.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function SamplesPage() {
  return (
    <Fragment>
      <NavBar />
      <ChartContainer />
    </Fragment>
  );
}
