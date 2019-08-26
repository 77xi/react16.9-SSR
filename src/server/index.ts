import * as Koa from "koa"
import * as Statics from "koa-static"

import paths from "~/../webpack/paths"

import reactApplication from "~/server/middlewares/reactApplication"
import apiErrorHandler from "~/server/middlewares/apiErrorHandler"

const port = process.env.DEV_PORT || 8083

const createServer = (port: number | string) => {
  const app = new Koa()

  app.use(Statics(paths.resolveRoot("dist")))

  app.use(apiErrorHandler)
  app.use(reactApplication)

  app.listen(port, () => console.log(`web server listening ${port}`))
}

createServer(port)
