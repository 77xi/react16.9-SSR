import "~/entry/server/polyfill.server"

import Koa from "koa"
import Statics from "koa-static"

import resolveRoot from "~/libs/resolveRoot"

import reactApplication from "~/entry/server/middlewares/reactApplication"
import apiErrorHandler from "~/entry/server/middlewares/apiErrorHandler"

type params = {
  port?: string | number
  routes: any
  modules?: any
}

const createServer = ({ port, routes, modules }: params) => {
  const app = new Koa()

  app.use(Statics(resolveRoot("dist")))

  app.use(reactApplication({ routes, modules }))
  app.use(apiErrorHandler)

  app.listen(port, () => console.log(`web server listening ${port}`))
}

export default createServer
