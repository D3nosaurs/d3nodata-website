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

// 

export default function ChartContainer(props: ChartProps){
 
  const chart  = props.chart;
  // console.log('chart props in chartContainer: ', chart); //this is logging infinitely 
  const [page, setPage] = useState(null);

  let content = null;

  if (chart === 'pie') content = <PieChart />;
  else if (chart === 'bar') content = <BarChart />;
  else if (chart === 'line') content = <LineChart />;

  let chartDisplay;
  if (page === null) chartDisplay = content;
  else chartDisplay = page;


  function buttonBar() {
    return(
      <div>
        <Button onClick={() => {
            setPage(<BarChart />);
            content = null;
          }}>Bar Chart</Button>
        <Button onClick={() => {
            setPage(<PieChart />)
            content = null;
          }}>Pie Chart</Button>
        <Button onClick={() => {
          setPage(<LineChart />)
          content = null;
        }}>Line Chart</Button>
      </div>
    )
  }

  return (
    <div>
      < Header />
      { buttonBar() }
      { chartDisplay }
    </div>
  )
}

