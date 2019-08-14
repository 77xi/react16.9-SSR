const domReady = () =>
  new Promise(resolve => {
    if (/interactive|complete/.test(document.readyState)) {
      resolve()
    } else {
      document.addEventListener("DOMContentLoaded", resolve)
    }
  })

export default domReady
