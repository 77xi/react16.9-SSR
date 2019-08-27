import { BaseContext } from "koa"

export default async (_: BaseContext, next: () => Promise<any>) => {
  try {
    await next()
  } catch (err) {
    // eslint-disable-next-line
    console.log(err)
  }
}
