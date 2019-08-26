import * as Koa from "koa"

export default async (_: Koa.BaseContext, next: () => Promise<any>) => {
  try {
    await next()
  } catch (err) {
    // eslint-disable-next-line
    console.log(err)
  }
}
