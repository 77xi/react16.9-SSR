import { FC } from "react"
import { RouteProps } from "react-router-dom"

export interface PageRouteProps extends RouteProps {
  name: string
}

export interface FetchFC<T> extends FC<T> {
  fetchData: Function
}
