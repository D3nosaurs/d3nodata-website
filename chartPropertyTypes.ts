import { barData } from "./Dummy_Data/BarChart_data.ts";
import { scatterData } from "./Dummy_Data/ScatterPlotChart_data.ts";
import { donutData } from "./Dummy_Data/DonutChart_data.ts";
import { lineData } from "./Dummy_Data/LineChart_data.ts";
// import { pieChartData } from "./Dummy_Data/PieChart_data.ts";

// Interactive elements for each property are defined in propFunc
// Func types: slider, checkbox, input, colorPicker
const barChartProperties = {
  data: barData,
  barColor: "#BFE4A3",
  barColorFunc: "colorPicker",
  animationDuration: 70,
  animationDurationFunc: "slider",
  animationDelay: 30,
  animationDelayFunc: "slider",
  axesColor: "#4D908E",
  axesColorFunc: "input",
  axesLabelColor: "#277DA1",
  axesLabelColorFunc: "input",
  barHoverColor: "#90BE6D",
  barHoverColorFunc: "input",
  addAxesLabel: true,
  addAxesLabelFunc: "checkbox",
  xAxisLabel: "x label",
  xAxisLabelFunc: "input",
  yAxisLabel: "y label",
  yAxisLabelFunc: "input",
  toolTip: true,
  toolTipFunc: "checkbox",
  fontFamily: "Verdana",
  fontFamilyFunc: "input",
  addTitle: true,
  addTitleFunc: "checkbox",
  setTitle: "TITLE",
  setTitleFunc: "input",
  setTitleSize: "1.5em",
  setTitleSizeFunc: "input",
  setTitleColor: "#277DA1",
  setTitleColorFunc: "colorPicker",
};

const scatterPlotChartProperties = {
  data: scatterData,
  dotColor: "#BFE4A3",
  dotColorFunc: "colorPicker",
  axesColor: "#4D908E",
  axesColorFunc: "colorPicker",
  axesLabelColor: "#277DA1",
  axesLabelColorFunc: "colorPicker",
  setTitle: "ScatterPlot",
  setTitleFunc: "input",
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
  setTitleFunc: "input",
  lineColor: "#BFE4A3",
  lineColorFunc: "colorPicker",
  paddingTop: 70,
  paddingTopFunc: "input",
  paddingBottom: 70,
  paddingBottomFunc: "input",
  paddingRight: 70,
  paddingRightFunc: "input",
  paddingLeft: 70,
  paddingLeftFunc: "input",
  width: 800,
  widthFunc: "input",
  height: 600,
  heightFunc: "input",
  fontFamily: "Verdana",
  fontFamilyFunc: "input",
  // add axes
  addAxesLabel: false,
  xAxisLabel: "x label",
  xAxisLabelFunc: "input",
  yAxisLabel: "y label",
};

export {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
};
