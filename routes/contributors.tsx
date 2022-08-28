/** @jsx h */
import { Fragment, h } from "preact";
import NavBar from "../islands/NavBar.tsx";
import { tw } from "@twind";
import Title from "../components/Docs/Title.tsx";
import { Head } from "$fresh/runtime.ts";

const contributors = ["david", "nikolajs", "evie", "jon", "quoc"];
const github = [
  "https://github.com/DKagan07",
  "https://github.com/nikolajsvv",
  "https://github.com/aw1ld3v13",
  "https://github.com/Jgarber2675",
  "https://github.com/swittuth",
];
const linkedin = [
  "https://www.linkedin.com/in/david-kagan07/",
  "https://www.linkedin.com/in/nikolajsveidis/",
  "",
  "https://www.linkedin.com/in/jonathon-garber-5647b0215/",
  "",
];

export default function Contributor() {
  const imageArray = [];

  for (let i = 0; i < contributors.length; i++) {
    imageArray.push(
      <div
        class={tw`flex shadow-2xl hover:shadow-none flex-col items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-[#8f45a9] via-[#504aa7] to-[#7a81eb] transition-shadow duration-500`}
      >
        <img
          src={`../contributor-images/${contributors[i]}.jpg`}
          width="130px"
          class={tw`rounded-3xl shadow-2xl`}
        />
        <p class={tw`text-[#eeeeee]`}>
          {contributors[i].charAt(0).toUpperCase() + contributors[i].slice(1)}
        </p>
        <div class={tw`flex justify-center gap-2 `}>
          <a href={`${github[i]}`} target="_blank">
            <img src="./github-logo.svg" width="20px" />
          </a>
          <a href={`${linkedin[i]}`} target="_blank">
            <img src="./linkedin-logo.png" width="20px" />
          </a>
        </div>
      </div>,
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Contributors</title>
      </Head>
      <NavBar></NavBar>

      <div class={tw`w-full flex flex-col items-center gap-5 mt-5`}>
        <Title text="CONTRIBUTORS" />
        <div class={tw`flex gap-5 h-full justify-center w-full max-w-5xl`}>
          {imageArray}
        </div>
        <a href="https://github.com/oslabs-beta/d3no-data/blob/main/CONTRIBUTING.md">
          <button
            class={tw`mt-10 p-3 shadow-2xl text-[#c2ffbb] rounded-xl bg-[#1f5357] hover:scale-110 transition-all duration-500`}
          >
            CONTRIBUTE
          </button>
        </a>
      </div>
    </Fragment>
  );
}
