import Koa from "koa"
import Router from "koa-router"
import Statics from "koa-static"

import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"

import paths from "../../webpack/paths"
import routes from "~/routes"
import App from "~/App"

const app = new Koa()
const router = new Router()

app.use(Statics(paths.resolveRoot("dist")))

router.get("*", ctx => {
  const context = {}
  const { url } = ctx

  const currentPath = routes.find(route => matchPath(url, route))

  const markup = renderToString(
    <StaticRouter location={currentPath} context={context}>
      <App />
    </StaticRouter>
  )

  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>
      <body>
        <div id="app">${markup}</div>
        <script src="/client/bundle.js" async></script>
      </body>
    </html>
  `
})

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.DEV_PORT || 8083

app.listen(port, () => console.log(`web server listening ${port}`))
