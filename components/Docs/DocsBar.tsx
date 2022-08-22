/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { render } from "gfm";
import Title from "./Title.tsx";

const CONTENT_PATH = new URL("../../docs/barchart.md", import.meta.url);
const fileContent = await Deno.readTextFile(CONTENT_PATH);
const body = render(fileContent);

export default function DocsBar() {
  return (
    <div class={tw`flex flex-col gap-5`}>
      <Title text="Bar Chart Documentation" />

      <div class={tw`w-max h-min rounded-lg shadow-lg m-auto font-mono`}>
        <p>
          <span>import</span>
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
