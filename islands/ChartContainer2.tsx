/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import {
  BarChart,
  DonutChart,
  LineChart,
  PieChart,
  ScatterPlotChart,
} from "https://deno.land/x/d3nodata@v.0.0.1.2.2.2/charts.ts";
import InteractiveButton from "../components/InteractiveButton.tsx";
import { barData } from "../Dummy_Data/BarChart_data.ts";
import { scatterData } from "../Dummy_Data/ScatterPlotChart_data.ts";
import { lineData } from "../Dummy_Data/LineChart_data.ts";
import { donutData } from "../Dummy_Data/DonutChart_data.ts";

export default function ChartContainer2(props: { chart: string }) {
  const [chartDisplay, setChartDisplay] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [numData, setNumData] = useState(25);
  const [fakeData, setFakeData] = useState(null);
  const height = "500";
  const width = "1000";

  useEffect(() => {
    if (props.chart === "GET STARTED") {
      setShowChart(false);
    } else {
      setShowChart(true);
      if (props.chart === "BAR CHART") {
        console.log(barData);
        setChartDisplay(
          <BarChart
            data={barData}
            height={height}
            width={width}
          >
          </BarChart>,
        );
      } else if (props.chart === "LINE CHART") {
        setChartDisplay(
          <LineChart data={lineData} height={height} width={width}></LineChart>,
        );
      } else if (props.chart === "SCATTERPLOT CHART") {
        setChartDisplay(
          <ScatterPlotChart data={fakeData} height={height} width={width}>
          </ScatterPlotChart>,
        );
      } else if (props.chart === "PIE CHART & DONUT CHART") {
        setChartDisplay(
          <DonutChart data={donutData} height={height} width={width}>
          </DonutChart>,
        );
      }
    }
  }, [props.chart, numData]);

  useEffect(() => {
    const tempData: { x: number; y: number }[] = [];
    for (let i = 0; i < numData; i++) {
      tempData.push({
        y: Math.random() * 1000,
        x: i,
      });
    }
    setFakeData(tempData);
  }, [numData]);

  return (
    <Fragment>
      <div
        class={tw`col-span-4 p-5 w-full border-2 h-full flex flex-col gap-10`}
      >
        <h1 class={tw`text-4xl font-semibold text-green-600`}>
          {props.chart.toUpperCase()}
        </h1>
        <div class={tw`flex relative flex-col items-center w-full h-max`}>
          {showChart && chartDisplay}
          {showChart &&
            (
              <div class={tw`w-10/12 border-2 flex flex-row gap-4`}>
                <InteractiveButton
                  text="Add Data"
                  update={() => {
                    setNumData(numData + 1);
                  }}
                >
                </InteractiveButton>
                <InteractiveButton
                  text="Delete Data"
                  update={() => {
                    setNumData(numData - 1);
                  }}
                >
                </InteractiveButton>
              </div>
            )}
        </div>
      </div>
    </Fragment>
  );
}
