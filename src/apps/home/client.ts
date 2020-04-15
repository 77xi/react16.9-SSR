import createClient from "~/entry/client/createClient"

import modules from "./modules"
import routes from "./routes"

createClient({ routes, modules })
