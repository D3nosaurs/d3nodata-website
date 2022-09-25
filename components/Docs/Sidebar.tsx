/**@jsx h */

import { h } from "preact";
import { tw } from "@twind";
import Button from "../../islands/Button.tsx";

//the sidebar to change charts in documentation

type DocSideProp = {
  selectedChart: string;
};

const CHART_TYPES = [
  { link: "../docs", text: "GET STARTED" },
  { link: "../docs/bar", text: "BAR CHART" },
  { link: "../docs/choropleth", text: "CHOROPLETH CHART" },
  { link: "../docs/line", text: "LINE CHART" },
  { link: "../docs/piedonut", text: "PIE & DONUT CHARTS" },
  { link: "../docs/scatter", text: "SCATTERPLOT CHART" },

];
export default function DocsSideBar(props: DocSideProp): h.JSX.Element {
  const linkArray = [];
  for (const obj of CHART_TYPES) {
    if (obj.link.slice(8) === props.selectedChart) {
      linkArray.push(
        <li>
          <a href={`${obj.link}`}>
            <Button text={`${obj.text}`} chosen={true}></Button>
          </a>
        </li>,
      );
    } else {
      linkArray.push(
        <li>
          <a href={`${obj.link}`}>
            <Button
              text={`${obj.text}`}
              chosen={false}
            >
            </Button>
          </a>
        </li>,
      );
    }
  }
  return (
    <ul class={tw`flex flex-col pt-5 gap-5`}>
      {linkArray}
    </ul>
  );
}
