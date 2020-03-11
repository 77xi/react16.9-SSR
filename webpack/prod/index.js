const createConfig = require("../util/createConfig")

const clientConfig = createConfig("web", "production")
const serverConfig = createConfig("node", "production")

module.exports = [clientConfig, serverConfig]
