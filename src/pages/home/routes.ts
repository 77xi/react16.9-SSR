import { PageRouteProps } from "~/types"

import Home from "."

const routes: PageRouteProps[] = [
  {
    exact: true,
    path: "/home",
    component: Home,
    name: "home"
  }
]

export default routes
