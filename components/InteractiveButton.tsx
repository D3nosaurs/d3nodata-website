/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type InteractiveProps = {
  text: string;
  update: Function;
};

export default function InteractiveButton(props: InteractiveProps) {
  return (
    <button
      class={tw
        `rounded-md text-sm text-white bg-green-400 p-1 shadow-lg hover:shadow-none transition-all duration-300`}
      onClick={() => {
        props.update();
      }}
    >
      {props.text}
    </button>
  );
}
