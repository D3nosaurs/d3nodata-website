/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

type SliderProps = {
  value: number
}

// h.JSX.HTMLAttributes<HTMLInputElement>

export function Slider() {
  return (
    <input type="range" min="1" max="100"
    class={tw`px-2 py-1 border(gray-100 2) hover:bg-gray-200`}></input>
  );
}
