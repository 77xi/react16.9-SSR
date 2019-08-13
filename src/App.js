import React from "react"
import { Route, Switch } from "react-router-dom"

import routes from "~/routes"

const App = () => (
  <Switch>
    {routes.map((props, index) => (
      <Route {...props} key={index} />
    ))}
  </Switch>
)

export default App
