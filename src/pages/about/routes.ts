import { PageRouteProps } from "~/types"

import About from "./index"

const routes: PageRouteProps[] = [
  {
    exact: true,
    path: "/about",
    component: About,
    name: "about"
  }
]

export default routes
