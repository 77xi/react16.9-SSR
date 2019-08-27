import * as React from "react"
import { connect } from "react-redux"

import { loadHomeData } from "../modules/home"

import "./index.css"

const Home = ({ home: { data } }) => {
  React.useEffect(() => {}, [])

  return (
    <div className="Home">
      {data.map(({ action_text }, index) => (
        <div key={index}>{action_text}</div>
      ))}
    </div>
  )
}

Home.fetchData = ({ dispatch }: any) => loadHomeData()({ dispatch })

export default connect(state => state)(Home)
