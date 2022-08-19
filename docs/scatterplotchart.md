# **Pie and Donut Chart Documentation**

## Schema for Props

This is all separate props when you call the JSX element

|                             **Prop name **                             |          **Type**          | **Default Value** | **Required** |                              **Description**                               |
| :--------------------------------------------------------------------: | :------------------------: | :---------------: | :----------: | :------------------------------------------------------------------------: |
|                                  data                                  | `{x: number, y: number}[]` |        N/A        |     Yes      |             Array of objects as structred in the Types column              |
|                                dotColor                                |          `string`          |     `#BFE4A3`     |      No      |                        Color of each individual dot                        |
|                             dotHoverColor                              |          `string`          |     `#90BE6D`     |      No      |                    The color of the dot on mouse hover                     |
|                                dotSize                                 |          `string`          |        `5`        |      No      |                           The radius of each dot                           |
| paddingTop, </br> paddingLeft, </br> paddingRight, </br> paddingBottom |          `number`          |       `70`        |      No      | The padding to the Top, Left, Right, and Bottom of the chart, respectively |
|                                 width                                  |          `number`          |       `600`       |      No      |                           The width of the chart                           |
|                                 height                                 |          `number`          |       `600`       |      No      |                          The height of the chart                           |
|                              addAxesLabel                              |         `boolean`          |      `false`      |      No      |                      Add x and y labels to the chart                       |
|                               xAxisLabel                               |          `string`          |     `x label`     |      No      |                          The text of your x axis                           |
|                               yAxisLabel                               |          `string`          |     `y label`     |      No      |                          The text of your y axis                           |
|                               axesColor                                |          `string`          |     `#4D908E`     |      No      |                           The color for you axes                           |
|                             axesLabelColor                             |          `string`          |     `#277DA1`     |      No      |                    The color of the labels for you axes                    |
|                               animation                                |         `boolean`          |      `true`       |      No      |             Animation for your lines to show up on your chart              |
|                           animationDuration                            |          `number`          |      `5000`       |      No      |          Time (in ms) for the lines on your chart to be animated           |
|                               addToolTip                               |         `boolean`          |      `true`       |      No      |               Add tooltip for mouse hover on each data point               |
|                               fontFamily                               |          `string`          |     `Verdana`     |      No      |                   Font for the text for your line chart                    |
|                                addTitle                                |         `boolean`          |      `false`      |      No      |      Presence of the title for your chart. It will display at the top      |
|                                setTitle                                |          `string`          |     `string`      |      No      |                        Set the title for your chart                        |
|                              setTitleSize                              |          `string`          |      `1.5em`      |      No      |                  Set the font size of your chart (in em)                   |
|                             setTitleColor                              |          `string`          |     `#277DA1`     |      No      |                 Set the color of your title for your chart                 |
|                           setTitlePaddingTop                           |          `number`          |       `40`        |      No      |        Set how far down the title is from the top edge of the chart        |
