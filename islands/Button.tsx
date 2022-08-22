/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

type ButtonProps = {
  text: string;
  chosen: boolean;
  update: any;
};

export default function Button(props: ButtonProps) {
  if (props.chosen) {
    return (
      <button
        class={tw
          `w-full text-left p-3 rounded-lg bg-[#113c4a] text-[#45eba5] scale-110`}
        onClick={() => {
          props.update(props.text);
        }}
      >
        {props.text}
      </button>
    );
  } else {
    return (
      <button
        class={tw
          `w-full text-left text-[#21aba5] p-3 rounded-lg hover:bg-[#113c4a] hover:text-[#45eba5] hover:scale-110 duration-300`}
        onClick={() => {
          setChosen(true);
          props.update(props.text);
        }}
      >
        {props.text}
      </button>
    );
  }
}
