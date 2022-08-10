/** @jsx h */
import { h } from "preact";
import { ScatterPlotChart } from "https://deno.land/x/d3nodata@v.0.0.1.2.2.2/charts.ts";
import { scatterData } from "../Dummy_Data/ScatterPlotChart_data.ts";

export default function ScatterplotChartEg() {
  return (
    <ScatterPlotChart width={400} height={400} data={scatterData}>
    </ScatterPlotChart>
  );
}
