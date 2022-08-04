/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Launch() {
  return(
    <div class='launch-container'>
      <div id='launch-description'>
        <p>D3NO DATA DESCRIPTION</p>
      </div>
      <div id='launch-visual'>
        <p>VISUALS COOL</p>
      </div>
      <button id='scroll-btn'>Scroll Down</button>
    </div>
  )
}