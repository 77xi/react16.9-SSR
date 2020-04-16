import createServer from "~/entry/server/createServer"
import routes from "./routes"
import modules from "./modules"

createServer({ routes, modules })
