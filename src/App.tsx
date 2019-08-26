import * as React from "react"

import "./App.css"

const App = ({ children }: React.PropsWithChildren<React.ElementType>) => (
  <div className="App">{children}</div>
)

export default App
