import * as React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { loadHomeData } from "../modules/home"

import "./index.css"

interface Props {
  fetchData: Function
  home: {
    data: object[]
  }
}

interface HomeType extends React.FunctionComponent<Props> {
  fetchData: Function
}

const Home: HomeType = props => <div>Home</div>

Home.fetchData = () => ({ dispatch }: { dispatch: Dispatch }) =>
  dispatch(loadHomeData())

export default connect(state => state)(Home)
