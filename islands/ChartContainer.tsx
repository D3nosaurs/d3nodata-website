/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";

// importing charts from our library
import {
  BarChart,
  DonutChart,
  LineChart,
  // PieChart,
  ScatterPlotChart,
} from "https://deno.land/x/d3nodata@v0.0.1.2.1/charts.ts";

// these are the properties we're defining exclusively for the demo charts to add interactibility alongside
import {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
} from "../chartPropertyTypes.ts";

// contains the charts and the interactive elements
export default function ChartContainer() {
  // these are arrays which bundle the chart with the properties we pass through interactivity and back into the chart
  const barBundle = [BarChart, barChartProperties];
  const scatterBundle = [ScatterPlotChart, scatterPlotChartProperties];
  const donutBundle = [DonutChart, donutChartProperties];
  const lineBundle = [LineChart, lineChartProperties];

  // allows for the charts above to be switched between easily, and opens the bar chart by default
  const [display, setDisplay] = useState(barBundle);

  // sidebar of buttons that allows user to switch between charts
  function ButtonBar() {
    return (
      <div class={tw`col-span-1 w-full h-[89vh]`}>
        <ul class={tw`flex flex-col pt-5 gap-5`}>
          <li>
            <Button
              onClick={() => {
                setDisplay(barBundle);
              }}
            >
              BAR CHART
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setDisplay(donutBundle);
              }}
            >
              DONUT CHART
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setDisplay(lineBundle);
              }}
            >
              LINE CHART
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setDisplay(scatterBundle);
              }}
            >
              SCATTERPLOT CHART
            </Button>
          </li>
        </ul>
      </div>
    );
  }
  // actual chart display and interactive elements handled here
  function ChartDisplay(chart: h.JSX.Element, chartProperties) {
    // Modular way of displaying chart property interactive elements --> defined in chartPropertyTypes.ts
    // current elements: slider, checkbox, input, colorPicker
    function Interactivity() {
      // this separates the keys of our property object
      const propertyNames: string[] = (Object.keys(chartProperties));

      // creates interactive element for each property
      const InteractiveElement = ({ property }) => {
        // assign interactiveEl
        let propFunc: h.JSX.Element;

        // Slider interactive element
        if (chartProperties[property + "Func"] === "slider") {
          propFunc = (
            <input
              type="range"
              min="1"
              max="1000"
              value={chartProperties[property]}
              onChange={(e) => {
                chartProperties[property] = e.target.value;
                setDisplay([chart, chartProperties]);
              }}
              class={tw`ml-2 w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700`}
            />
          );
        }

        // Input interactive elements
        if (chartProperties[property + "Func"] === "input") {
          propFunc = (
            <input
              type="text"
              id={property}
              value={chartProperties[property]}
              onChange={(e) => {
                let value = null;
                if (e.target.value === "true") {
                  value = true;
                } else if (
                  e.target.value === "false"
                ) {
                  value = false;
                } else {
                  value = e.target.value;
                }
                chartProperties[property] = value;
                setDisplay([chart, chartProperties]);
              }}
              class={tw`ml-2 block p-2 w-1/2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50`}
            />
          );
        }

        // ColorPicker interactive element
        if (chartProperties[property + "Func"] === "colorPicker") {
          propFunc = (
            <input
              type="color"
              id={property}
              value={chartProperties[property]}
              onChange={(e) => {
                chartProperties[property] = e.target.value;
                setDisplay([chart, chartProperties]);
              }}
              class={tw`ml-2 cursor-pointer`}
            />
          );
        }

        // Checkbox interactive element
        if (chartProperties[property + "Func"] === "checkbox") {
          propFunc = (
            <input
              type="checkbox"
              id={property}
              checked={chartProperties[property]}
              onChange={(e) => {
                chartProperties[property] = e.target.checked;
                setDisplay([chart, chartProperties]);
              }}
              class={tw`ml-2 cursor-pointer`}
            />
          );
        }
        // creates the element containing the name of the property and its corresponding functional jsx element as defined in chartPropertyTypes
        return (
          <div
            id="singleElement"
            key={property}
            class={tw`flex flex-row items-center gap- pb-3`}
          >
            {property}: {propFunc}
          </div>
        );
      };

      // select all properties of the passed-in info which the user will be altering, iterate through, and create an element out of each
      const propertyList = propertyNames.map((property) => {
        if (
          property !== "data" && property !== "labels" &&
          property !== "height" && property !== "width" &&
          !property.includes("Func")
        ) {
          return <InteractiveElement key={property} property={property} />;
        }
      });
      return (propertyList);
    }

    return (
      <div class={tw`container w-full flex flex-wrap mx-auto`}>
        <div id="chart" class={tw`w-full lg:w-1/2`}>
          {chart(chartProperties)}
        </div>
        <div
          id="interactive"
          class={tw`w-full lg:w-1/2 self-center`}
        >
          <div
            id="interactive-list"
            class={tw`p-3 w-3/4 shadow-xl hover:shadow-2xl border-1 border-gray-200 overscroll-auto `}
          >
            {Interactivity()}
          </div>
        </div>
      </div>
    );
  }

  // allows chart to be sent as jsx element with props passed in from the state while being modified by the interactive elements above
  function ChartRender() {
    return (
      <div class={tw`h-full col-span-4 border-l-2 flex flex-col items-center`}>
        {ChartDisplay(display[0], display[1])}
      </div>
    );
  }

  // chart container only renders the button bar and the chart render above
  return (
    <div class={tw`grid grid-cols-5 gap-2 h-full`}>
      <ButtonBar />
      <ChartRender />
    </div>
  );
}
