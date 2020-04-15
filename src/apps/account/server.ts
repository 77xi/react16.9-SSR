import createServer from "~/entry/server/createServer"
import routes from "./routes"

createServer({ routes, port: 9000 })
