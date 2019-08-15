import "~/client/polyfill.client"

import domReady from "~/libs/domReady"
import bootstrap from "~/client/bootstrap"

const initClient = ({ routes, modules }) => {
  const { initalState, spanName } = JSON.parse(
    document.getElementById("js-initalData").textContent
  )
  return bootstrap({ routes, modules, initalState, spanName })
}

const createClient = options => {
  return domReady()
    .then(() => initClient(options))
    .then(() => {
      // report or set init success
    })
    .catch(err => {
      console.error(`init err`, err)
      // report error
    })
}

export default createClient
