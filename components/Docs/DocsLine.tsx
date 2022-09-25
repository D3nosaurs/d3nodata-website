/**@jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { render } from "gfm";
import Title from "./Title.tsx";
import ImportCode from "./ImportCode.tsx";

//imports markdown file and exports it as a div element to be rendered

const CONTENT_PATH = new URL("../../docs/linechart.md", import.meta.url);
const fileContent = await Deno.readTextFile(CONTENT_PATH);
const body = render(fileContent);

export default function DocsLine() {
  return (
    <div class={tw`flex flex-col gap-5 pt-5 pl-5`}>
      <Title text="Line Chart" />
      <div
        class={tw
          `w-max h-min rounded-lg p-2 text-sm shadow-lg m-auto font-mono`}
      >
        <ImportCode chartType="LineChart" />
      </div>

      <div
        class={tw`flex self-center align-center`}
        dangerouslySetInnerHTML={{ __html: body }}
      >
      </div>
    </div>
  );
}
