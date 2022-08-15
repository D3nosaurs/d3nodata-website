/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from 'preact';


export default function DocsSideBar (): h.JSX.Element{
  return (
    <Fragment>
      <a href='/docs/bar'> Bar Chart </a>
      <a href='/docs/line'> Line Chart</a>
      <a href='/docs/scatterplot'> ScatterPlot Chart </a>
      <a href='/docs/donutpie' > Donut & Pie Chart </a>
    </Fragment>
  )
}