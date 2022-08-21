/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Button from "./Button.tsx";
import { tw } from "@twind";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    const paths = document.querySelectorAll("#logo path");
    for (let i = 0; i < 8; i++) {
      console.log(`shape ${i} has length ${paths[i].getTotalLength()}`);
    }
  }, []);

  return (
    <nav
      className={tw`flex p-3 items-center bg-[#42476d] w-full shadow-lg`}
    >
      <img src="./d3no-data-logo.svg" width="150px" />
      <section class={tw`flex justify-end w-full`}>
        <a href="./">
          HOME
        </a>
      </section>
    </nav>
  );
}
