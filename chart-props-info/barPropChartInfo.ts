export default [
  {
    name: "data",
    type: "{data: numbers, labels: string}[]",
    defaultValue: "N/A",
    required: "Yes",
    description:
      "an object that contains an array of numbers and an array of corresponding labels",
  },
  {
    name: "barPadding",
    type: "number",
    defaultValue: "#4D908E",
    required: "No",
    description: "padding between bars",
  },
  {
    name: "barColor",
    type: "string",
    defaultValue: "#BFE4A3",
    required: "No",
    description: "color of bars for bar chart",
  },
  {
    name: "barHoverColor",
    type: "string",
    defaultValue: "#90BE6D",
    required: "No",
    description: "color of bars for bar chart",
  },
  {
    name: ["paddingTop", "paddingLeft", "paddingRight", "paddingBottom"],
    type: "number",
    defaultValue: "60",
    required: "No",
    description: "add top, left, right, bottom padding to the chart",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "700",
    required: "No",
    description: "set width size of the chart",
  },
  {
    name: "height",
    type: "number",
    defaultValue: "700",
    required: "No",
    description: "set height size of the chart",
  },
  {
    name: "addAxesLabel",
    type: "boolean",
    defaultValue: "false",
    required: "No",
    description: "value to indicate whether to add axes labels to the chart",
  },
  {
    name: "xAxisLabel",
    type: "string",
    defaultValue: "x label",
    required: "No",
    description: "text to display for x axis label",
  },
  {
    name: "yAxisLabel",
    type: "string",
    defaultValue: "y label",
    required: "No",
    description: "text to display for y axis label",
  },
  {
    name: "axesColor",
    type: "string",
    defaultValue: "#4D908E",
    required: "No",
    description: "color for axes",
  },
  {
    name: "axesLabelColor",
    type: "string",
    defaultValue: "#4D908E",
    required: "No",
    description: "color for axes' labels",
  },
  {
    name: "animation",
    type: "boolean",
    defaultValue: "true",
    required: "No",
    description: "animation for bar chart",
  },
  {
    name: "animationDuration",
    type: "number",
    defaultValue: "800",
    required: "No",
    description: "time in ms for each bar of the chart to reached its height",
  },
  {
    name: "animationDelay",
    type: "number",
    defaultValue: "100",
    required: "No",
    description:
      "time in ms for each bar of the chart to wait before animating",
  },
  {
    name: "toolTip",
    type: "boolean",
    defaultValue: "true",
    required: "No",
    description: "add tool tip to the chart",
  },
  {
    name: "fontFamily",
    type: "string",
    defaultValue: "Verdana",
    required: "No",
    description: "font family for the text in chart",
  },
  {
    name: "addTitle",
    type: "boolean",
    defaultValue: "false",
    required: "No",
    description: "add title to the chart",
  },
  {
    name: "setTitle",
    type: "string",
    defaultValue: "string",
    required: "No",
    description: "set title for the chart",
  },
  {
    name: "setTitleSize",
    type: "string",
    defaultValue: "1.5em",
    required: "No",
    description: "set font size for the chart's title",
  },
  {
    name: "setTitleColor",
    type: "string",
    defaultValue: "#277DA1",
    required: "No",
    description: "set color of the chart's title",
  },
  {
    name: "setTitlePaddingTop",
    type: "number",
    defaultValue: "40",
    required: "No",
    description: "set padding top for the chart's title",
  },
];
