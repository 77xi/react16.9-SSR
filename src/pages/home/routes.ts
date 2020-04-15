import { PageRouteProps } from "~/types"

import Home from "."
import Content from "./Content"

const routes: PageRouteProps[] = [
  {
    exact: true,
    path: "/",
    component: Home,
    name: "home"
  },
  {
    exact: true,
    path: "/content",
    component: Content,
    name: "home"
  }
]

export default routes
