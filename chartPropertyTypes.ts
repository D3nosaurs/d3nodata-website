import { barData } from "./Dummy_Data/BarChart_data.ts";
import { scatterData } from "./Dummy_Data/ScatterPlotChart_data.ts";
import { donutData } from "./Dummy_Data/DonutChart_data.ts";
import { lineData } from "./Dummy_Data/LineChart_data.ts";

const barChartProperties = {
  data: barData,
  barColor: "#BFE4A3",
  animationDuration: 70,
  barColorFunc: "input",
  animation: true,
  animationDurationFunc: "slider",
  animationDelay: 30,
  animationDelayFunc: "slider",
  addAxesLabel: true,
  addAxesLabelFunc: "input",
  paddingTop: 60,
  paddingTopFunc: "input",
  paddingBottom: 60,
  paddingBottomFunc: "input",
  paddingLeft: 60,
  paddingLeftFunc: "input",
  paddingRight: 60,
  paddingRightFunc: "input",
  width: 700,
  widthFunc: "input",
  height: 700,
  heightFunc: "input",
  barPadding: 5,
  barPaddingFunc: "input",
  xAxisLabel: "x label",
  xAxisLabelFunc: "input",
  yAxisLabel: "y label",
  yAxisLabelFunc: "input",
  axesColor: "#4D908E",
  axesColorFunc: "input",
  axesLabelColor: "#277DA1",
  axesLabelColorFunc: "input",
  barHoverColor: "#90BE6D",
  barHoverColorFunc: "input",
  toolTip: true,
  toolTipFunc: "input",
  fontFamily: "Verdana",
  fontFamilyFunc: "input",
  addTitle: true,
  addTitleFunc: "input",
  setTitle: "TITLE",
  setTitleFunc: "input",
  setTitleSize: "1.5em",
  setTitleSizeFunc: "input",
  setTitleColor: "#277DA1",
  setTitleColorFunc: "input",
  setTitlePaddingTop: 40,
  setTitlePaddingTopFunc: "input",
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
  setTitleFunc: "input",
  lineColor: "#BFE4A3",
  paddingTop: 70,
  paddingBottom: 70,
  paddingRight: 70,
  paddingLeft: 70,
};

export {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
};
