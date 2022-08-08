/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Button } from "../components/Button.tsx"

// import { serve } from "https://deno.land/std/http/mod.ts";

export default function Header() {
  
  return(
    <div class='header'>
      <img src='/logo.svg'/>

      {/* redirects you to our documentation */}
      <Button 
        class='header-button'
      >Docs</Button>

      {/* redirects you to github */}
      <Button 
        class='header-button' 
        onClick = {() => {window.open('https://github.com/oslabs-beta/d3no-data', '_blank')}}
      >Github</Button>

      {/* redirects you to the charts page */}
      <Button 
        onClick={() => window.location.href = '/charts' }
      >Charts</Button>
    </div>
  )
}