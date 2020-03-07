import React, { useEffect } from "react"
// import { Dispatch } from "redux"
import { connect } from "react-redux"

// import { loadMessage } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"
import { FetchComponent } from "~/types"

import hybrid, { simulator } from "@0x0006e/hybrid-js-sdk"

import "./index.css"

interface Props {
  home: HomeState
}

const Home: FetchComponent<Props> = () => {
  useEffect(() => {
    simulator()

    hybrid
      .dispatch("answer/writeAnswer", { id: 123456789 })
      .then(console.log)
      .catch(console.error)

    const unsubscribe = hybrid.listen("base/networkChange", console.log)

    window.document.title = "I am Home page"

    return () => unsubscribe
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

// Home.fetchData = () => (dispatch: Dispatch) => dispatch(loadMessage())

export default connect(state => state)(Home)
