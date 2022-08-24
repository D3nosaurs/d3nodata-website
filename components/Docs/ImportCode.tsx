/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

//the text at the top of each documentation page to denote where to import a specific chart from

type ImportCodeProps = {
  chartType: string;
};

export default function ImportCode(props: ImportCodeProps) {
  return (
    <p class={tw`font-mono`}>
      <span class="js-keycode">import</span>&ensp;
      <span class="js-importcode">{props.chartType}</span>&ensp;
      <span class="js-keycode">from</span>&ensp;
      <span class="js-stringcode">
        "https://deno.land/x/d3nodata@v.0.0.1.3.8/charts.ts"
      </span>
    </p>
  );
}
