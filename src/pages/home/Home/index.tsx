import * as React from "react"
import { connect } from "react-redux"
import { Store, AnyAction } from "redux"

import { loadHomeData } from "~/pages/home/modules/home"
import { ThunkDispatch } from "redux-thunk"

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

Home.fetchData = () => ({
  dispatch
}: {
  dispatch: ThunkDispatch<Store, void, AnyAction>
}) => dispatch(loadHomeData())

export default connect(state => state)(Home)
