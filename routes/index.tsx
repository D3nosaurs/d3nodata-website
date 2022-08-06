/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/Header.tsx";
import ChartRedirect from "../islands/ChartRedirect.tsx"
// import { Launch } from "../components/Launch.tsx";


export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Header />
      {/* <ChartContainer /> */}
      <ChartRedirect />
    </div>
  );
}

/*
PROBLEM:

redirection to /charts with some data to know which island to render on arrival to /charts on specific
chart button press
*/