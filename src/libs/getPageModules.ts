interface Hash {
  [key: string]: string
}

const cache: Hash = {}

const importAll = r => r.keys().map(key => (cache[key] = r(key).default))

importAll(require.context("~/pages", true, /modules(\.ts|\/index\.ts)$/))

const getPageModules = (spanName: string) => ({
  [spanName]: cache[`./${spanName}/modules/index.ts`]
})

export default getPageModules
