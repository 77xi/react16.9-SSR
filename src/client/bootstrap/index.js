import renderReactApp from "./renderReactApp"
import initRedux from "./initRedux"

// const next = () => initRedux(context, () => renderReactApp(context, () => Promise.resolve))
const microFlow = middlewares => context => {
  const next = middlewares.reduceRight(
    (acc, f) => () => f(context, acc),
    () => Promise.resolve
  )
  return next()
}

export default microFlow([initRedux, renderReactApp])
