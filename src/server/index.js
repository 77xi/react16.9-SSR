import fs from "fs"
import Koa from "koa"
import Statics from "koa-static"

import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"

import paths from "../../webpack/paths"
import routes from "~/routes"
import App from "~/App"

const app = new Koa()

app.use(Statics(paths.resolveRoot("dist")))

app.use(ctx => {
  const context = {}
  const { url, path } = ctx
  const currentRoute = routes.find(route => matchPath(path, route))

  if (!currentRoute) {
    ctx.status = 404
    return
  }

  const { name: spanName } = currentRoute

  const assetsMapStr = fs.readFileSync(
    paths.resolveRoot("dist", "client", "manifest.json"),
    "utf-8"
  )
  const cssRegExp = /\.css$/
  const jsRegExp = /\.js$/
  const assetsValues = Object.values(JSON.parse(assetsMapStr))
  const styles = assetsValues.filter(
    assetsPath =>
      cssRegExp.test(assetsPath) && assetsPath.startsWith(`client/${spanName}.`)
  )
  const scripts = assetsValues.filter(
    assetsPath =>
      jsRegExp.test(assetsPath) && assetsPath.startsWith(`client/${spanName}.`)
  )

  const stylesStr = styles
    .map(style => `<link href=${style} rel="stylesheet"></link>`)
    .join("")
  const scriptsStr = scripts
    .map(js => `<script src=${js} async></script>`)
    .join("")

  const markup = renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  )

  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        ${stylesStr}
      </head>
      <body>
        <div id="app">${markup}</div>
        ${scriptsStr}
      </body>
    </html>
  `
})

const port = process.env.DEV_PORT || 8083

app.listen(port, () => console.log(`web server listening ${port}`))
