/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { render } from "gfm";
import Title from "./Title.tsx";
import ImportCode from "./ImportCode.tsx";

const CONTENT_PATH = new URL("../../docs/barchart.md", import.meta.url);
const fileContent = await Deno.readTextFile(CONTENT_PATH);
const body = render(fileContent);

export default function DocsBar() {
  return (
    <div class={tw`flex flex-col gap-5`}>
      <Title text="Bar Chart Documentation" />

      <div
        class={tw
          `w-max h-min rounded-lg p-2 text-sm shadow-lg m-auto font-mono`}
      >
        <p>
          <ImportCode chartType="BarChart" />
        </p>
      </div>

      <div
        class={tw`flex self-center align-center`}
        dangerouslySetInnerHTML={{ __html: body }}
      >
      </div>
    </div>
  );
}
