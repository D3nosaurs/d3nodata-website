/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

type SliderProps = {
  value: number;
};

// h.JSX.HTMLAttributes<HTMLInputElement>

export function Slider(props: SliderProps) {
  return (
    <input
      type="range"
      min="1"
      max="100"
      value={props.value}
      class={tw`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700`}
    >
    </input>
  );
}
