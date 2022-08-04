/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function BarChart () {
  return(
    <div class="chart-container">
      <div class="chart">
        <p>VISUAL FOR BAR CHART</p>
      </div>
      <div class="chart-info">
        <p>CHART INFO</p>
      </div>
    </div>
  )
}