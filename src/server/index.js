import fs from "fs"
import Koa from "koa"
import Router from "koa-router"
import Statics from "koa-static"

import paths from "../../webpack/paths"

const app = new Koa()
const router = new Router()

app.use(Statics(paths.resolveRoot('dist')))

router.get("*", ctx => {
  const distAssets = fs.readdirSync(paths.resolveRoot("dist/client/js"))
  const scriptStr = distAssets.map(js => `<script src=/client/js/${js} async></script>`)

  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>
      <body>
        <div id="app">im ssr</div>
        ${scriptStr}
      </body>
    </html>
  `
})

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.DEV_PORT || 8083

app.listen(port, () => console.log(`web server listening ${port}`))
