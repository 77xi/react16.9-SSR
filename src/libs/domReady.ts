const domReady = (): Promise<string | Event> =>
  new Promise(resolve => {
    if (/interactive|complete/.test(document.readyState)) {
      resolve("complete")
    } else {
      document.addEventListener("DOMContentLoaded", resolve)
    }
  })

export default domReady
