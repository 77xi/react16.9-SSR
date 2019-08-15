import renderReactApp from "./renderReactApp"
import initRedux from "./initRedux"

const microFlow = middlewares => context =>
  middlewares.reduce((pre, cuur) => pre(context).then(() => cuur(context)))

export default microFlow([initRedux, renderReactApp])
