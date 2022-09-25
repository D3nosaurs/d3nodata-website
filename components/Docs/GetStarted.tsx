/** @jsx h */

import { h } from "preact";
import Title from "./Title.tsx";
import { tw } from "@twind";

/* to add any future charts, we need to:
for documentation:
  1. create a markdown file as a table for our documentation page
  2. create a component to import the markdown file and export it as a div
  3. add a new element to the CHART_TYPES array in components/docs/Sidebar.tsx
for samples:
  4. add import in islands/chartcontainer and create a new bundle
  5. in chartPropertyTypes, add what you want to have changed in the sample page as well as the 'func' variant
  6. add extra element in charttypes array in islands/chartContainer with the proper bundle
*/


export default function GetStarted() {
  return (
    <div class={tw`flex flex-col gap-5 `}>
      <Title text="Get Started" />

      <section class={tw`flex flex-col gap-3 text-[#524a79]`}>
        <p>Welcome to D3no Data's documentation!</p>
        <p>Every chart is customizable, as the goal is to make data visualization simpler in Fresh without sacrificing the power or customizability of D3. Where applicable, charts also support animation, interactivity, and multiple data sets.</p>
        <p>To get started, navigate to the page of the chart you'd like to import in the sidebar. Use the code fragment at the top of that page in order to import it into any project using Deno & Preact.</p>
        <p>Please note that D3no Data is still in development, so all charts may not be working fully as intended. If you notice any issues, please report them on GitHub (linked in the navigation bar).</p>
        <p>Thanks for using our library!</p>
      </section>
    </div>
  );
}
