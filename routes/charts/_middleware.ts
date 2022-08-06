import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler (req: Request, ctx: MiddlewareHandlerContext) {
    ctx.state.data = 'bar';
    const resp = await ctx.next();
    return resp;
}
