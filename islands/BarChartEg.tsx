/** @jsx h */
import { h } from "preact";
import { BarChart } from "https://deno.land/x/d3nodata@v0.0.1.2.1/charts.ts";
import { barData } from "../Dummy_Data/BarChart_data.ts";

// this is the donut chart loaded into the home page for an example within a window

export default function BarChartEg() {
  return (
    <BarChart
      data={barData}
      toolTip={false}
      height={400}
      width={400}
    />
  );
}
