/** @jsx h */
import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";
import { Slider } from "../components/Slider.tsx";

import { scatterData } from "../Dummy_Data/ScatterPlotChart_data.ts";
import { barData } from "../Dummy_Data/BarChart_data.ts";
import {
  BarChart,
  ScatterPlotChart,
} from "https://deno.land/x/d3nodata@v.0.0.1.2.2.2/charts.ts";

import {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
} from "../chartPropertyTypes.ts";
import { tw } from "../utils/twind.ts";
import { Input } from "../components/Input.tsx";

// input: chartProperties are the properties of the chart that the user will be altering

export default function ChartContainer(props) {

  const barBundle = [BarChart, barChartProperties]
  const scatterBundle = [ScatterPlotChart, scatterPlotChartProperties]

  const [display, setDisplay] = useState(barBundle);

  function ButtonBar() {
    return (
      <div>
        <Button
          onClick={() => {
            setDisplay(barBundle);
          }}
        > Bar Chart </Button>

        <Button
          onClick={() => {
            setDisplay(scatterBundle);
          }}
        > Scatter Chart </Button>
      </div>
    );
  }

  function ChartDisplay(chart, chartProperties) {
    function Interactivity() {
      //this separates the keys of our property object
      const propertyNames: string[] = (Object.keys(chartProperties));
  
      // const modifyInfo = (property:string, callback) => chartProperties.property = callback();
  
      // creates iteractive element for each property
      const InteractiveElement = ({ property }) => {
        // assign interactiveEl
        let propFunc;
        if (chartProperties[property + "Func"] === "slider") {
          propFunc = <input
          type='range'
          min="1" max="100"
          class={tw`px-2 py-1 border(gray-100 2) hover:bg-gray-200`} 
          value={chartProperties[property]}
          onInput={() => {
            console.log('slider properties: ', chartProperties[property])
            chartProperties[property] = document.querySelector('#' + property).value;
            console.log('changed property: ', chartProperties[property])
            setDisplay([chart, chartProperties]);
          }} />;
        }
        if (chartProperties[property + "Func"] === "input") {
          propFunc = (
            <input
              id={property}
              value={chartProperties[property]}
              onChange={() => {
                chartProperties[property] =
                  document.querySelector("#" + property).value;
                console.log(
                  "changed val ",
                  document.querySelector("#" + property).value,
                );
                console.log("chartProps ", chartProperties[property]);
                setDisplay([chart, chartProperties]);
                // chart.updateChart()
                // console.log('chart: ',  )
              }}
            />
          );
        }
  
        return (
          <div id="singleElement" key={property}>
            {property}: {chartProperties[property]}
            {propFunc}
          </div>
        );
      };
  
      // select all properties of the passed-in info which the user will be altering
      const propertyList = propertyNames.map((property) => {
        if (
          property !== "data" && property !== "labels" &&
          !property.includes("Func")
        ) {
          return <InteractiveElement key={property} property={property} />;
        }
      });
      return (propertyList);
    }

    return (
      <div>
        {Interactivity()}
        {chart(chartProperties)}
      </div>
    );
  }

  function ChartRender(){
    return (
      <div>
        {ChartDisplay(display[0], display[1])}
      </div>
    );
  }

  return (
    <div>
      <ButtonBar />
      <ChartRender />
    </div>
  );
}
