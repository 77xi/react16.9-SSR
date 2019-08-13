import React from "react"
import { Route, Switch } from "react-router-dom"

import routes from "~/routes"

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          {routes.map((props, index) => (
            <Route {...props} key={index} />
          ))}
        </Switch>
      </>
    )
  }
}

export default App
