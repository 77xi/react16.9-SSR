import { RouteProps } from "react-router-dom"

import About from "./index"

interface CustomRouteProps extends RouteProps {
  name: string
}

const routes: CustomRouteProps[] = [
  {
    exact: true,
    path: "/about",
    component: About,
    name: "about"
  }
]

export default routes
