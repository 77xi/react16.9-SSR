import path from "path"
import AppRootDir from "app-root-dir"

const resolveRoot = path.resolve.bind(null, AppRootDir.get())

export default resolveRoot
