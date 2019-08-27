import React, { PropsWithChildren, ReactNode } from "react"

import "./App.css"

const App = ({ children }: PropsWithChildren<ReactNode>) => (
  <div className="App">{children}</div>
)

export default App
