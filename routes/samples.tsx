/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import { Button } from "../components/Button.tsx";

export default function SamplesPage() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div class={tw`grid grid-cols-5 gap-2 h-full`}>
        <div
          class={tw`col-span-1 w-full h-[89vh] border-2`}
        >
          <ul class={tw` flex flex-col pt-5 gap-5`}>
            <li>
              <a>
                <Button text="GET STARTED"></Button>
              </a>
            </li>
            <li>
              <a>
                <Button text="BAR CHART"></Button>
              </a>
            </li>
            <li>
              <a>
                <Button text="LINE CHART"></Button>
              </a>
            </li>
            <li>
              <a>
                <Button text="SCATTERPLOT CHART"></Button>
              </a>
            </li>
            <li>
              <a>
                <Button text="PIE CHART"></Button>
              </a>
            </li>
            <li>
              <a>
                <Button text="DONUT CHART"></Button>
              </a>
            </li>
          </ul>
        </div>
        <div class={tw`col-span-4 w-full border-2 h-full`}>
        </div>
      </div>
    </Fragment>
  );
}
