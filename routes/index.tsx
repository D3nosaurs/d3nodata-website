/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";

export default function Home() {
  return (
    <Fragment>
      <div className={tw`flex items-center flex-col w-full`}>
        <NavBar></NavBar>
      </div>
    </Fragment>
  );
}
