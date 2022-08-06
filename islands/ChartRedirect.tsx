/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { ChartButton } from "../components/ChartButton.tsx";

//to have a redirect
// import { serve } from "https://deno.land/std/http/mod.ts";

export default function ChartRedirect () {
  
  return (
    <ChartButton 
    onClick = {() => {
      window.location.href = './charts'
      // window.location.replace('./charts')
    } }
    >Graph Chart Button </ChartButton>
  )
}