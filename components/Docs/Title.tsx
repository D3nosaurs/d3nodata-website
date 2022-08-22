/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";

type TitleProps = {
  text: string;
};

export default function Title(props: TitleProps) {
  return (
    <h1
      class={tw
        `text-4xl font-semibold text-[transparent] bg-gradient-to-r from-[#028090] to-[#02c39a] bg-clip-text`}
    >
      {props.text}
    </h1>
  );
}
