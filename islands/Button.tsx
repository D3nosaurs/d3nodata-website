/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type ButtonProps = {
  text: string;
  update: any;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      class={tw
        `w-full text-left text-[#21aba5] p-3 rounded-lg hover:bg-[#113c4a] hover:text-[#45eba5] hover:scale-110 duration-300`}
      onClick={() => {
        props.update(props.text);
      }}
    >
      {props.text}
    </button>
  );
}
