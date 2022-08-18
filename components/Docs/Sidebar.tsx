/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from 'preact';


export default function DocsSideBar (): h.JSX.Element{
  return (
    <Fragment>
      <a href='/docs/bar'> Bar Chart </a> <br/>
      <a href='/docs/line'> Line Chart</a> <br/>
      <a href='/docs/scatter'> ScatterPlot Chart </a> <br/>
      <a href='/docs/piedonut' > Donut & Pie Chart </a>
    </Fragment>
  )
}