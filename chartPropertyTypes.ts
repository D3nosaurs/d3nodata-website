import { barData } from "./Dummy_Data/BarChart_data.ts";
import { scatterData } from "./Dummy_Data/ScatterPlotChart_data.ts";
import { donutData } from "./Dummy_Data/DonutChart_data.ts";
import { lineData } from "./Dummy_Data/LineChart_data.ts";
// import { pieChartData } from "./Dummy_Data/PieChart_data.ts";

const barChartProperties = {
  data: barData,
  barColor: "#BFE4A3",
  animationDuration: 70,
  barColorFunc: "colorPicker",
  animationDurationFunc: "slider",
  animationDelay: 30,
  animationDelayFunc: "slider",
};

const scatterPlotChartProperties = {
  data: scatterData,
  dotColor: "#BFE4A3",
  dotColorFunc: "colorPicker",
  axesColor: "#4D908E",
  axesColorFunc: 'colorPicker',
  axesLabelColor: "#277DA1",
  axesLabelColorFunc: 'colorPicker',
  setTitle: "ScatterPlot",
  setTitleFunc: 'input'
};

const donutChartProperties = {
  data: donutData,
  setTitle: "Ages",
  setTitleFunc: 'input',
  colorStart: '#cefad0',
  colorStartFunc: 'colorPicker',
  colorEnd: 'green',
  colorEndFunc: 'colorPicker'
};

const lineChartProperties = {
  data: lineData,
  setTitle: "Line",
  setTitleFunc: 'input',
  lineColor: "#BFE4A3",
  lineColorFunc: 'colorPicker',
};

export {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
};
