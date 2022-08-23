/** @jsx h */
/**@jsxFrag Fragment */

import { Fragment, h } from "preact";
import Title from "./Title.tsx";
import { tw } from "@twind";

export default function GetStarted() {
  return (
    <h1
      class={tw
        `text-4xl font-semibold text-[transparent] bg-gradient-to-r from-[#028090] to-[#02c39a] bg-clip-text`}
    >
      <Title text="Get Started" />
    </h1>
  );
}
