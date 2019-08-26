import * as React from "react"

import "./App.css"

const App = ({ children }: React.PropsWithChildren<React.ReactNode>) => (
  <div className="App">{children}</div>
)

export default App
