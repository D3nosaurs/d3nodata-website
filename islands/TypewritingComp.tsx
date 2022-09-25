/** @jsx h */
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";

//typewriter animation for the homepage

const charts = [
  "BarChart",
  "LineChart",
  // "ScatterplotChart",
  "PieChart",
  "DonutChart",
  "MapChart",
];

export default function TypeWriting() {
  const [code, setCode] = useState("BarChart");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCode(charts[count]);
    setTimeout(() => {
      setCount(() => {
        return charts.length > count + 1 ? count + 1 : 0;
      });
    }, 3000);
    
  }, [count]);

  return (
    <Fragment>
      <span class="text sec-text">
        {code}
      </span>&nbsp;
    </Fragment>
  );
}
