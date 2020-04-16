import { PageRouteProps } from "~/types"

import Account from "./index"

const routes: PageRouteProps[] = [
  {
    exact: true,
    path: "/",
    component: Account,
    name: "account"
  }
]

export default routes
