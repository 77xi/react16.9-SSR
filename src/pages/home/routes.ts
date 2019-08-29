import { RouteProps } from "react-router-dom"

import Home from "./Home"

interface CustomRouteProps extends RouteProps {
  name: string
}

const routes: CustomRouteProps[] = [
  {
    exact: true,
    path: "/home",
    component: Home,
    name: "home"
  }
]

export default routes
