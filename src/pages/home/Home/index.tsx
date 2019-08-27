import * as React from "react"
import { connect } from "react-redux"

import { loadHomeData } from "../modules/home"

import "./index.css"

interface Props {
  fetchData: Function
  home: {
    data: {
      action_text: string
    }[]
  }
}

interface HomeType extends React.FunctionComponent<Props> {
  fetchData: Function
}

const Home: HomeType = ({ home: { data } }) => {
  React.useEffect(() => {}, [])

  return (
    <div className="Home">
      {data.map(({ action_text }, index) => (
        <div key={index}>{action_text}</div>
      ))}
    </div>
  )
}

Home.fetchData = ({ dispatch }: any) => dispatch(loadHomeData())

export default connect(state => state)(Home)
