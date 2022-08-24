/** @jsx h */
/**@jsxFrag Fragment */

import { Fragment, h } from "preact";
import Title from "./Title.tsx";
import { tw } from "@twind";

export default function GetStarted() {
  return (
    <div class={tw`flex flex-col gap-5`}>
      <Title text="Get Started" />
      <p class={tw`text-[0.5em] text-[#ff1744]`}>
        *Currently our product is in beta release so not every features will
        work as intended
      </p>
      <section class={tw`flex flex-col gap-3 text-[#524a79]`}>
        <p>Let's get started on d3no data!</p>
        <p>To start import our chart from deno.land</p>
        <section>
          <p>Every charts out of the box have the following features:</p>
          <ul class={tw`ml-5`}>
            <li>Multidata</li>
            <li>Animation</li>
            <li>Interactive</li>
            <li>Customizable</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
