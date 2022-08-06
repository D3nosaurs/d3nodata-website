/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import BarChart from "../islands/BarChart.tsx";

export default function Documentation(props: PageProps) {
  // determine what chart to render
  const chart = props.params.chart;

  console.log(chart);

  const data: number[] = [];
  const label: string[] = [];
  const numData = 25;

  for (let i = 0; i < numData; i++) {
    data.push(Math.floor(Math.random() * 10000));
    label.push(i + "");
  }

  return (
    <Fragment>
      <BarChart data={data} labels={label} />
    </Fragment>
  );
}
