import Koa from "koa"
import Statics from "koa-static"

import paths from "~/../webpack/paths"

import reactApplication from "~/server/middlewares/reactApplication"
import apiErrorHandler from "~/server/middlewares/apiErrorHandler"

const app = new Koa()

app.use(Statics(paths.resolveRoot("dist")))

app.use(apiErrorHandler)
app.use(reactApplication)

const port = process.env.DEV_PORT || 8083

app.listen(port, () => console.log(`web server listening ${port}`))
