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
        `w-full text-left pl-5 text-sideNavTitle  rounded-sm hover:bg-gray-200 hover:font-semibold duration-300`}
      onClick={() => {
        props.update(props.text);
      }}
    >
      {props.text}
    </button>
  );
}
