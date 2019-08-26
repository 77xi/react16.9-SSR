import Home from "./Home"
import HomeSub from "./HomeSub"

const routes = [
  {
    exact: true,
    path: "/home",
    component: Home,
    name: "home"
  },
  {
    exact: true,
    path: "/home/sub",
    component: HomeSub,
    name: "home"
  }
]

export default routes
