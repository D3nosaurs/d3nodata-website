/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Header } from "../components/Header.tsx";
import { Launch } from "../components/Launch.tsx";
import TestContainer from "../islands/TestContainer.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      {/* <Header/>
      <Launch/> */}
      <TestContainer/>
      <Counter start={6}/>
    </div>
  );
}
