/** @jsx h */
import { h } from "preact";
import { DonutChart } from "https://deno.land/x/d3nodata@v.0.0.1.2.3/charts.ts";
import { donutData } from "../Dummy_Data/DonutChart_data.ts";

// this is the donut chart loaded into the home page for an example within a window

export default function DonutChartEg() {
  return (
    <DonutChart
      setTitle={" "}
      width={400}
      height={400}
      animation={false}
      data={donutData}
    />
  );
}
