/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import Button from "../islands/Button.tsx";
// import Title;

// importing charts from our library
import {
  BarChart,
  ChoroplethChart,
  DonutChart,
  LineChart,
  ScatterPlotChart,
} from "https://deno.land/x/d3nodata@v.0.0.1.3.11/charts.ts";

// these are the properties we're defining exclusively for the demo charts to add interactibility alongside
import {
  barChartProperties,
  choroplethChartProperties,
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
  const chloroplethBundle = [ChoroplethChart, choroplethChartProperties];
  // allows for the charts above to be switched between easily, and opens the bar chart by default
  const [display, setDisplay] = useState(barBundle);
  const [chartDisplay, setChartDisplay] = useState("BAR CHART");
  const [buttonArray, setButtonArray] = useState([]);

  let tempButtonArray = [];

  const chartTypes: { name: string; bundle: any }[] = [
    {
      name: "BAR CHART",
      bundle: barBundle,
    },
    {
      name: "LINE CHART",
      bundle: lineBundle,
    },
    {
      name: "SCATTERPLOT CHART",
      bundle: scatterBundle,
    },
    {
      name: "PIE & DONUT CHART",
      bundle: donutBundle,
    },
    {
      name: "CHOROPLETH CHART",
      bundle: chloroplethBundle,
    },
  ];

  useEffect(() => {
    for (const c of chartTypes) {
      if (chartDisplay == c.name) {
        tempButtonArray.push(
          <li>
            <Button
              onClick={() => {
                setChartDisplay(c.name);
                setDisplay(c.bundle);
              }}
              chosen={true}
              text={c.name}
            >
            </Button>
          </li>,
        );
      } else {
        tempButtonArray.push(
          <li>
            <Button
              onClick={() => {
                setChartDisplay(c.name);
                setDisplay(c.bundle);
              }}
              chosen={false}
              text={c.name}
            >
            </Button>
          </li>,
        );
      }
    }
    setButtonArray(tempButtonArray);
  }, [display]);

  // sidebar of buttons that allows user to switch between charts
  function ButtonBar() {
    return (
      <div class={tw`col-span-1 w-full h-[89vh]`}>
        <ul class={tw`flex flex-col pt-5 gap-5`}>
          {buttonArray}
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
              class={tw
                `ml-2 w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700`}
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
              class={tw
                `ml-2 block p-2 w-1/2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50`}
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
            class={tw`grid grid-cols-7 pb-3 w-[80%]`}
          >
            <div
              class={tw
                `col-span-2 flex justify-end text-[#81e1af] font-sans font-light`}
            >
              {property}
            </div>
            <div class={tw`col-span-5 flex justify-center w-full`}>
              {propFunc}
            </div>
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
      <div class={tw`container w-full flex flex-col items-center`}>
        {chart(chartProperties)}

        <div
          class={tw
            `p-3 w-[85%] mb-3 rounded-lg bg-[#36485e] flex flex-col items-center shadow-2xl transition-all duration-300 hover:shadow-none border-2 border-gray-200 overscroll-auto `}
        >
          {Interactivity()}
        </div>
      </div>
    );
  }

  // allows chart to be sent as jsx element with props passed in from the state while being modified by the interactive elements above
  function ChartRender() {
    return (
      <div class={tw`h-full col-span-4 flex flex-col items-center mt-10`}>
        {ChartDisplay(display[0], display[1])}
      </div>
    );
  }

  // chart container only renders the button bar and the chart render above
  return (
    <div class={tw`w-full flex items-center justify-center`}>
      <div class={tw`grid grid-cols-5 w-full gap-2 h-full max-w-5xl`}>
        <ButtonBar />
        <ChartRender />
      </div>
    </div>
  );
}
