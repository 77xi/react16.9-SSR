import React, { useEffect } from "react"
// import { Dispatch } from "redux"
import { connect } from "react-redux"

// import { loadMessage } from "~/pages/home/modules/ations"
// import { HomeState } from "~/pages/home/modules/types"

import ReactIcon from "./react.png"

import "./index.css"

// interface Props {
//   home: HomeState
// }

const Home = () => {
  useEffect(() => {
    window.document.title = "I am Home page"
  }, [])

  return (
    <div className="Home">
      <div className="Home-header">Header</div>
      <div className="Home-content">
        <div className="Home-left">Menu</div>
        <div className="Home-right">
          Content
          <img className="Home-ReactIcon" src={ReactIcon} />
        </div>
      </div>
    </div>
  )
}

// Home.fetchData = () => {}

export default connect(state => state)(Home)
