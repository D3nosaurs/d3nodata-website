/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";


import Header from "./Header.tsx";

import BarChart from "./BarChart.tsx";
import LineChart from "./LineChart.tsx";
import PieChart from "./PieChart.tsx";
import { Button } from "../components/Button.tsx";

interface ChartProps {
  chart: string
}


// const chart = props.chart

// props: ChartProps

export default function ChartContainer(){
 
  // const { chart } = props;
  // console.log('chart props in chartContainer: ', chart); //this is logging infinitely 
  const [page, setPage] = useState(<p>Select a chart to get started!</p>)

  // if (chart === 'pie') setPage(<PieChart />);
  // else if (chart === 'bar') setPage(<BarChart />);
  // else if (chart === 'line') setPage(<LineChart />);
  

  function buttonBar() {
    return(
      <div>
        <Button onClick={() => setPage(<BarChart />) }>Bar Chart</Button>
        <Button onClick={() => setPage(<PieChart />)}>Pie Chart</Button>
        <Button onClick={() => setPage(<LineChart />)}>Line Chart</Button>
      </div>
    )
  }

  return (
    <div>
      < Header />
      { buttonBar() }
      { page }
    </div>
  )
}