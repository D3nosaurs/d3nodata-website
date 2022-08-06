/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

// interface ChartProps {
//   chart: string
// }

export function ChartButton(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      // disabled={!IS_BROWSER || props.disabled}
      class={tw`px-2 py-1 border(gray-100 2) hover:bg-gray-200`}
    />
  );
}
