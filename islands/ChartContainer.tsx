/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import Header from "./Header.tsx";
import { Button } from "../components/Button.tsx";

import BarChart from "./BarChart.tsx";
import LineChart from "./LineChart.tsx";
import PieChart from "./PieChart.tsx";

export default function ChartContainer(){
  const [page, setPage] = useState(<BarChart />)
  
  return (
    <div>
      < Header />
      { page }
      <Button onClick={() => setPage(<BarChart/>) }>Bar Chart</Button>
      <Button onClick={() => setPage(<PieChart/>)}>Pie Chart</Button>
      <Button onClick={() => setPage(<LineChart />)}>Line Chart</Button>
      {/* <Button onClick={() => window.location.href = '/charts' }>Charts</Button> */}
    </div>
  )
}