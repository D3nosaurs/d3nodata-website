/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { tw } from "@twind";
import { render } from "gfm";

const CONTENT_PATH = new URL("../../docs/barchart.md", import.meta.url);
// console.log(CONTENT_PATH);
const fileContent = await Deno.readTextFile(CONTENT_PATH)
const body = render(fileContent)

export default function DocsBar() {
  return (
    <div dangerouslySetInnerHTML={{__html: body}}/>
  );
}