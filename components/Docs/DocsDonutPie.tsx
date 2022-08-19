/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { tw } from "@twind";
import { render } from "gfm";

const CONTENT_PATH = new URL("../../docs/piedonutchart.md", import.meta.url);
const fileContent = await Deno.readTextFile(CONTENT_PATH)
const body = render(fileContent)

export default function DocsDonutPie() {
  return (
    <>
      <h1 class={tw`text-4xl font-semibold text-green-600 p-5`}>
            Donut & Pie Chart Documentation
        </h1>
        <p class={tw`pl-5`}>
        Schema for Props: <br/> These are all separate props when you call the JSX element
        </p>
        <div class={tw`flex self-center align-center`}dangerouslySetInnerHTML={{ __html: body }}>
        </div>
    </>
  );
}