import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler (req: Request, ctx: MiddlewareHandlerContext) {
    // console.log('headers: ' , req.headers)
    ctx.state.data;
    const resp = await ctx.next();
    return resp;
}
