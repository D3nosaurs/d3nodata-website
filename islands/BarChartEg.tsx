/** @jsx h */
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { BarChart } from "https://deno.land/x/d3nodata@v.0.0.1.2.2.2/charts.ts";
import { barData } from "../Dummy_Data/BarChart_data.ts";

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
