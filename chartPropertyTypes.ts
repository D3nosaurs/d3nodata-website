import { barData } from "./Dummy_Data/BarChart_data.ts";
import { scatterData } from "./Dummy_Data/ScatterPlotChart_data.ts";
import { donutData } from "./Dummy_Data/DonutChart_data.ts";
import { lineData } from "./Dummy_Data/LineChart_data.ts";

const barChartProperties = {
  data: barData,
  barColor: "#BFE4A3",
  animationDuration: 70,
  barColorFunc: "input",
  animationDurationFunc: "slider",
  animationDelay: 30,
  animationDelayFunc: "slider",
  addAxesLabel: true,
};

const scatterPlotChartProperties = {
  data: scatterData,
  dotColor: "#BFE4A3",
  dotColorFunc: "colorPicker",
  axesColor: "#4D908E",
  axesLabelColor: "#277DA1",
  setTitle: "ScatterPlot",
};

const donutChartProperties = {
  data: donutData,
  setTitle: "Donut",
  colorRange: [
    "#CED89E",
    "#F9F9C5",
    "#6CC4A1",
    "#AEDBCE",
    "#76BA99",
    "#D9F8C4",
  ],
};

const lineChartProperties = {
  data: lineData,
  setTitle: "Line",
  lineColor: "#BFE4A3",
};

export {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
};
