/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { ChartButton } from "../components/ChartButton.tsx";

export default function ChartRedirect () {
  

  return (
    <ChartButton 
    onClick = {()=> {
      //redirect to /chart while passing down props
      window.location.href = './charts'
    }} 
    >Graph Chart Button </ChartButton>
  )
}