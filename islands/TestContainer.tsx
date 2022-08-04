/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { Header } from "../components/Header.tsx";
import { Launch } from "../components/Launch.tsx";
import { Button } from "../components/Button.tsx";
import Counter from "./Counter.tsx"
import CounterCopy from "./Counter copy.tsx"



export default function TestContainer(){
  const [page, setPage] = useState(<Header />)
  
  return (
    <div>
      { page }
      <Button onClick={() => setPage(<Counter start={0}/>)}>Counter1</Button>
      <Button onClick={() => setPage(<CounterCopy start={9} />)}>Counter2</Button>
    </div>
  )
}