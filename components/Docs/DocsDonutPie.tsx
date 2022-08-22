/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { render } from "gfm";
import Title from "./Title.tsx";

const CONTENT_PATH = new URL("../../docs/piedonutchart.md", import.meta.url);
const fileContent = await Deno.readTextFile(CONTENT_PATH);
const body = render(fileContent);

export default function DocsDonutPie() {
  return (
    <>
      <Title text="Donut & Pie Chart Documentation" />
      <p class={tw`pl-5`}>
        Schema for Props: <br />{" "}
        These are all separate props when you call the JSX element
      </p>
      <div
        class={tw`flex self-center align-center`}
        dangerouslySetInnerHTML={{ __html: body }}
      >
      </div>
    </>
  );
}
