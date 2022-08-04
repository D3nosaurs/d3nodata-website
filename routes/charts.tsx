/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import { tw } from "@twind";
import ChartContainer from "../islands/ChartContainer.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {

    //some information is going to be in and we get access to it in the 
    //other default function by passing it as a parameter into ctx.render()
    //question: HOW? WHERE TO GET INFORMATION?
    const resp = await ctx.render();
    //this is just setting headers on our response, we can do anything to the resp
    //before we return it....I think=
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

//that data gets accessed by destructuring the property of V
//to get data and we then can use that in the return
export default function Charts(props: PageProps) {

  return (
    // <div>Charts {props.params.name}</div>
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <ChartContainer />
    </div>
  )
}