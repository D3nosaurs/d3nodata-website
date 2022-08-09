/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import AceEditor from "ace-editor";
import barChartPropsInfo from "../chart-props-info/barPropChartInfo.ts";
import lineChartPropsInfo from "../chart-props-info/linePropChartInfo.ts";
import scatterplotChartPropsInfo from "../chart-props-info/scatterplotPropChartInfo.ts";
import piedonutChartPropsInfo from "../chart-props-info/piedonutPropChartInfo.ts";
import PropsTable from "../components/BarChartPropsDoc.tsx";

export default function ChartDoc(props: { chart: string }) {
  const [description, setDescription] = useState("");
  const [codeOn, setCodeOn] = useState(false);
  const [propTableOn, setPropTableOn] = useState(false);
  const [propTableInfo, setPropTableInfo] = useState([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (props.chart === "GET STARTED") {
      setDescription("Let's get started with D3NO DATA!");
      setCodeOn(false);
      setPropTableOn(false);
    } else {
      setCodeOn(true);
      setPropTableOn(true);
      if (props.chart === "BAR CHART") {
        setDescription(
          "Bar chart is a graph that used rectangular shapes to represent data. It is often utilized to show trend and compare multiple values side by side",
        );
        setCode(
          `import BarChart from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts"
            \n<BarChart data={data} {...props}/>`,
        );
        setPropTableInfo(barChartPropsInfo);
      } else if (props.chart === "LINE CHART") {
        setDescription(
          "Line chart is used to connect individual data points. The graph is usually used to show changes and trend for data overtime.",
        );
        setCode(
          `import LineChart from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts"
            \n<LineChart data={data} {...props}/>`,
        );
        setPropTableInfo(lineChartPropsInfo);
      } else if (props.chart === "SCATTERPLOT CHART") {
        setDescription(
          "Scatterplot is a mathematical diagram used to depict values for two variables. The data are displayed as collection of points on the graph, each having value determined on the horizontal and vertical axes.",
        );
        setCode(
          `import ScatterplotChart from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts"
            \n<ScatterplotChart data={data} {...props}/>`,
        );
        setPropTableInfo(scatterplotChartPropsInfo);
      } else if (props.chart === "PIE CHART & DONUT CHART") {
        setDescription(
          "Pie chart is a statiscal graph dividing the circle into numerical portions according to the input data. It is used to compare categories. Donut chart the same as pie chart but has an inner radius to resemble a donut. ",
        );
        setCode(
          `import PieChart from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts";
            \n<PieChart data={data} {...props}/>
          \nimport DonutChart from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts";
            \n<DonutChart data={data} {...props}/>`,
        );
        setPropTableInfo(piedonutChartPropsInfo);
      }
    }
  }, [props.chart]);

  return (
    <div class={tw`col-span-4 p-5 w-full border-2 h-full flex flex-col gap-10`}>
      <h1 class={tw`text-4xl font-semibold text-green-600`}>
        {props.chart.toUpperCase()}
      </h1>
      <div class={tw`flex flex-col gap-5`}>
        <p>
          {description}
        </p>

        <div
          class={tw`w-full flex items-center justify-center`}
        >
          {codeOn && (
            <AceEditor
              style={{
                width: "60%",
                height: "150px",
              }}
              fontSize="0.8em"
              highlightActiveLine={true}
              value={code}
              showGutter={false}
            >
            </AceEditor>
          )}
        </div>
      </div>
      <div class={tw`flex justify-center`}>
        {propTableOn && <PropsTable info={propTableInfo}></PropsTable>}
      </div>
    </div>
  );
}
