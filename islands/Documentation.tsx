/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import Button from "../islands/Button.tsx";
import ChartDoc from "../islands/ChartDoc.tsx";

const CHARTS = [
  "GET STARTED",
  "BAR CHART",
  "LINE CHART",
  "PIE & DONUT CHARTS",
  "SCATTERPLOT CHART",
];
export default function Documentation() {
  const [currentChart, setCurrentChart] = useState("GET STARTED");
  const arrayButtons = [];

  useEffect(() => {
  }, [currentChart]);

  return (
    <div class={tw`w-full flex items-center justify-center`}>
      <div class={tw`grid grid-cols-5 gap-2 h-full w-full max-w-5xl`}>
        <div
          class={tw`col-span-1 w-[max-content] max-w-l h-full`}
        >
          <ul class={tw`flex flex-col pt-5 gap-5`}>
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
                <Button text="PIE & DONUT CHARTS" update={setCurrentChart}>
                </Button>
              </a>
            </li>
            <li>
              <a>
                <Button text="SCATTERPLOT CHART" update={setCurrentChart}>
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <ChartDoc chart={currentChart}></ChartDoc>
      </div>
    </div>
  );
}
