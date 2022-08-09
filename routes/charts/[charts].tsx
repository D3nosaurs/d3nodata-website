/** @jsx h */
import { h } from 'preact';
import { PageProps } from "$fresh/server.ts";
import ChartContainer from '../../islands/ChartContainer.tsx';
import { tw } from "@twind";

export default function chartPage(props:PageProps) {
    const chart = props.params.charts;

    let content:h.JSX.Element;

    // if (chart === 'pie') content = <PieChart />
    // if (chart === 'bar') content = <BarChart />
    // if (chart === 'line') content = <LineChart />
    const typeChart = props.data;
    return (
        <div id='chart' class={tw`p-4 mx-auto max-w-screen-md`}>
            {/* {content} */}
            <ChartContainer chart={typeChart}/>
        </div>
    )
}