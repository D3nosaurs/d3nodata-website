/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";
import Button from "./Button.tsx";
import ChartContainer2 from "./ChartContainer2.tsx";

export default function Samples() {
  const [currentChart, setCurrentChart] = useState("GET STARTED");

  return (
    <div class={tw`grid grid-cols-5 gap-2 h-full`}>
      <div
        class={tw`col-span-1 w-full h-[89vh] border-2`}
      >
        <ul class={tw` flex flex-col pt-5 gap-5`}>
          <li>
            <a>
              <Button
                text="GET STARTED"
                update={setCurrentChart}
              >
              </Button>
            </a>
          </li>
          <li>
            <a>
              <Button text="BAR CHART" update={setCurrentChart}></Button>
            </a>
          </li>
          <li>
            <a>
              <Button text="LINE CHART" update={setCurrentChart}></Button>
            </a>
          </li>
          <li>
            <a>
              <Button text="SCATTERPLOT CHART" update={setCurrentChart}>
              </Button>
            </a>
          </li>
          <li>
            <a>
              <Button text="PIE CHART & DONUT CHART" update={setCurrentChart}>
              </Button>
            </a>
          </li>
        </ul>
      </div>
      <ChartContainer2 chart={currentChart}></ChartContainer2>
    </div>
  );
}
