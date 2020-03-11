const createConfig = require("../util/createConfig")

const clientConfig = createConfig("web")
const serverConfig = createConfig("node")

module.exports = [clientConfig, serverConfig]
