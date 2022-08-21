/** @jsx h */
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";

const charts = [
  "BarChart",
  "LineChart",
  "ScatterplotChart",
  "PieChart",
  "DonutChart",
  "MapChart",
];

export default function TypeWriting() {
  const [code, setCode] = useState("BarChart");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => {
        return count < charts.length ? count + 1 : 0;
      });
      setCode(charts[count]);
    }, 3200);
  }, [count]);

  return (
    <Fragment>
      <span class="text sec-text">
        {code}
      </span>&nbsp;
    </Fragment>
  );
}
