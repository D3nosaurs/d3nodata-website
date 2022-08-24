/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";

//the title for each chart in the documentation page

type TitleProps = {
  text: string;
};

export default function Title(props: TitleProps) {
  return (
    <h1
      class={tw
        `text-4xl font-semibold text-[transparent] bg-gradient-to-r from-[#8f45a9] via-[#504aa7] to-[#7a81eb] bg-clip-text`}
    >
      {props.text}
    </h1>
  );
}
