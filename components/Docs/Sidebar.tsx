/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import Button from "../../islands/Button.tsx";

export default function DocsSideBar(): h.JSX.Element {
  return (
    <ul class={tw`flex flex-col pt-5 gap-5`}>
      <li>
        <a href="/docs/">
          <Button text="GET STARTED" chosen={true}>
          </Button>
        </a>
      </li>
      <li>
        <a href="/docs/bar">
          <Button text="BAR CHART"></Button>
        </a>
      </li>
      <li>
        <a href="/docs/line">
          <Button text="LINE CHART"></Button>
        </a>
      </li>
      <li>
        <a href="/docs/scatter">
          <Button text="PIE & DONUT CHARTS">
          </Button>
        </a>
      </li>
      <li>
        <a href="/docs/piedonut">
          <Button text="SCATTERPLOT CHART">
          </Button>
        </a>
      </li>
    </ul>
  );
}
