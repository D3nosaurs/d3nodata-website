/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import * as d3 from "d3";
// 

import LineChart from "./LineChart.tsx";
import PieChart from "./PieChart.tsx";
import { Button } from "../components/Button.tsx";

import { BarChart } from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts"; 


interface ChartProps {
  chart: string
}

// 

function BarChartDisplay(){

}

export default function ChartContainer(){

    const [page, setPage] = useState(null);

    function buttonBar() {
      return(
        <div>
          {/* <Button onClick={() => {
              setPage(<BarChart data={barData} label={labels}/>);
              content = null;
            }}>Bar Chart</Button>
          <Button onClick={() => {
              setPage(<PieChart />)
              content = null;
            }}>Pie Chart</Button>
          <Button onClick={() => {
            setPage(<LineChart />)
            content = null;
          }}>Line Chart</Button> */}
        </div>
      )
    }

    return (
      <div>
        <BarChart data={barData} labels={barLabels} />
        {/* { buttonBar() } */}
        {/* <BarChart data={barData} labels={labels} /> */}
        {/* <div>{ console.log(BarChart()) }</div> */}
      </div>
    )
  }

