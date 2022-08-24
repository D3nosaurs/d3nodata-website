/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

//button for the documentation sidebar and for the samples page

type ButtonProps = {
  text: string;
  chosen: boolean;
  update: any;
};

export default function Button(
  props: ButtonProps | h.JSX.HTMLAttributes<HTMLButtonElement>,
) {
  if (props.chosen) {
    return (
      <button
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={tw
          `w-full text-left p-3 rounded-lg bg-[#113c4a] text-sm text-[#45eba5] scale-110`}
      >
        {props.text}
      </button>
    );
  } else {
    return (
      <button
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={tw
          `w-full text-left text-[#21aba5] p-3 rounded-lg text-sm hover:bg-[#113c4a] hover:text-[#45eba5] hover:scale-110 duration-300`}
        // onClick={() => {
        //   props.update(props.text);
        // }}
      >
        {props.text}
      </button>
    );
  }
}
