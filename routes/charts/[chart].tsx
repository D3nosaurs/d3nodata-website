/** @jsx h */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Documentation(props: PageProps) {
  // determine what chart to render
  const chart = props.params.chart;
  const data: number[] = [];
  const label: string[] = [];
  const numData = 25;

  for (let i = 0; i < numData; i++) {
    data.push(Math.floor(Math.random() * 10000));
    label.push(i + "");
  }

  return (
    <Fragment>
    </Fragment>
  );
}
