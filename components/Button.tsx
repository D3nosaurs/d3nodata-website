/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Button(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={tw
        `w-full text-left pl-5 text-sideNavTitle  rounded-sm hover:bg-gray-200 hover:font-semibold duration-300`}
    />
  );
}
