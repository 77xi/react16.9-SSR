import React from "react"
import { Route, Switch } from "react-router-dom"

import routes from "~/routes"
import "./App.css"

const App = () => (
  <div className="App">
    <Switch>
      {routes.map((props, index) => (
        <Route {...props} key={index} />
      ))}
    </Switch>
  </div>
)

export default App
