/** @jsx h */
import { h } from "preact";
import { LineChart } from "https://deno.land/x/d3nodata@v.0.0.1.2.2.2/charts.ts";
import { lineData } from "../Dummy_Data/LineChart_data.ts";

export default function LineChartEg() {
  return <LineChart width={400} height={400} data={lineData}></LineChart>;
}
