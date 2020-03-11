import { PageRouteProps } from "~/types"

import Home from "."

const routes: PageRouteProps[] = [
  {
    exact: true,
    path: "/",
    component: Home,
    name: "home"
  }
]

export default routes
