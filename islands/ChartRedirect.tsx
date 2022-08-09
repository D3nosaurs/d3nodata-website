/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { ChartButton } from "../components/ChartButton.tsx";
import { MiddlewareHandlerContext } from "$fresh/server.ts";

//to have a redirect
// import { serve } from "https://deno.land/std/http/mod.ts";

export default function ChartRedirect () {
  
  return (
    <ChartButton 
    id='piechartbutton'
    onClick = {() => {
      // const resp = await fetch('./charts', {
      //   method: 'GET',
      //   
        // headers: {
      //   //   "Chart-Type": 'pie'
      //   // }
      // })

      // const data = await resp.json();
      window.location.href = './charts/'
      // window.location.replace('./charts')
    } }
    >Graph Chart Button </ChartButton>
  )
}