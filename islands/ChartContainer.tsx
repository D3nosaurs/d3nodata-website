/** @jsx h */
import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import Header from "./Header.tsx";
import Button from "../islands/Button.tsx";
import { BarChart } from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts";
import { barData, barLabels } from "../Dummy_Data/BarChart_data.ts";

interface ChartProps {
  chart: string;
}

export default function ChartContainer(props: ChartProps) {
  const chart = props.chart;
  // console.log('chart props in chartContainer: ', chart); //this is logging infinitely
  const [page, setPage] = useState(null);

  let chartType;
  if (chart === "bar") chartType = <BarChart data={barData} labels={labels} />;
  // else if (chart === "bar") content = ;
  // else if (chart === "line") content = <LineChart />;

  // let chatDisplay;
  // if (page === null) chartDisplay = chart;
  // else chartDisplay = page;

  const chartDisplay = chart;

  function buttonBar() {
    return (
      <div>
        {
          /* <Button
          onClick={() => {
            setPage(<BarChart data={barData} label={labels} />);
          }}
        >
          Bar Chart
        </Button> */
        }
      </div>
    );
  }

  return (
    <div>
      <Header />
      {
        /* {buttonBar()}
      {chartDisplay} */
      }
    </div>
  );
}
