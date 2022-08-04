/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Header() {
  return(
    <div class='header'>
      <img src='/logo.svg'/>
      <button class='header-button'>Docs</button>
      <button class='header-button'>Github</button>
    </div>
  )
}