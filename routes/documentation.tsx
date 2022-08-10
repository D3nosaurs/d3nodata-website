/** @jsx h */
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import NavBar from "../islands/NavBar.tsx";
import Documentation from "../islands/Documentation.tsx";

export default function DocumentationPage() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Documentation></Documentation>
    </Fragment>
  );
}
