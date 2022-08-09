/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import Button from "./Button.tsx";

export default function Samples() {
  return (
    <Fragment>
      <div class={tw`grid grid-cols-5 gap-2 h-full`}>
        <div
          class={tw`col-span-1 w-full h-[89vh] border-2`}
        >
          <ul class={tw` flex flex-col pt-5 gap-5`}>
            <li>
              <a href="./GET-STARTED">
                <Button text="GET-STARTED">
                </Button>
              </a>
            </li>
            <li>
              <a href="./BAR-CHART">
                <Button text="BAR CHART"></Button>
              </a>
            </li>
            <li>
              <a href="./LINE-CHART">
                <Button text="LINE CHART"></Button>
              </a>
            </li>
            <li>
              <a href="./SCATTERPLOT-CHART">
                <Button text="SCATTERPLOT CHART">
                </Button>
              </a>
            </li>
            <li>
              <a href="./PIE-DONUT-CHART">
                <Button text="PIE CHART & DONUT CHART">
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
