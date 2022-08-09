/** @jsx h */
import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import * as d3 from "d3";

import { Button } from "../components/Button.tsx";
import { Slider } from "../components/Slider.tsx";

import { scatterData } from "../Dummy_Data/ScatterPlotChart_data.ts";
import { barData, barLabels } from "../Dummy_Data/BarChart_data.ts";
import { BarChart } from "https://deno.land/x/d3nodata@v0.0.1.2.1/charts.ts";
import { ScatterPlotChart } from "https://deno.land/x/d3nodata@v0.0.1.2.1/charts.ts";

interface ChartProps {
  chart: string;
}

const barChartProperties = {
  data: barData,
  labels: barLabels,
  animationDuration: 70,
  animationDelay: 30,
};

const scatterPlotProperties = {
  data: scatterData,
};

// input: chartProperties are the properties of the chart that the user will be altering
function ChartDisplay(chart, chartProperties) {
  function Interactivity() {
    const propertyNames: string[] = (Object.keys(chartProperties));

    const modifyInfo = (property: string, callback) =>
      chartProperties.property = callback();

    // creates iteractive element for each property
    const InteractiveElement = ({ property }) => {
      return (
        <div id="singleElement" key={property}>
          {property}:
        </div>
      );
    };

    // select all properties of the passed-in info which the user will be altering
    const propertyList = propertyNames.map((property) => {
      if (property !== "data" && property !== "labels") {
        return <InteractiveElement key={property} property={property} />;
      }
    });
    return (propertyList);
  }

  return (
    <div>
      {chart(chartProperties)}
      {Interactivity()}
    </div>
  );
}

export default function ChartContainer(props: { chart: string }) {
  const [display, setDisplay] = useState([
    ScatterPlotChart,
    scatterPlotProperties,
  ]);

  function buttonBar() {
    return (
      <div>
        <Button
          onClick={() => {
            setDisplay([BarChart, barChartProperties]);
          }}
        >
          Bar Chart
        </Button>

        {
          /* <Button onClick={() => {
            setDisplay([ScatterPlotChart, scatterPlotProperties]);
          }}>Scatter Chart</Button>  */
        }
      </div>
    );
  }

  return (
    <div class={tw`h-full col-span-4 border-2`}>
      {props.chart}
    </div>
  );
}
