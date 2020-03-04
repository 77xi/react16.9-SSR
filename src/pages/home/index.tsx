import React, { useEffect } from "react"
import { connect } from "react-redux"

import { loadMessage } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"
import { FetchFC } from "~/types"

import "./index.css"

interface Props {
  home: HomeState
}

const Home: FetchFC<Props> = () => {
  useEffect(() => {
    window.document.title = "I am Home page"
  }, [])

  return (
    <div className="Home">
      <div className="Home-header">Header</div>
      <div className="Home-content">
        <div className="Home-left">Menu</div>
        <div className="Home-right">Content</div>
      </div>
    </div>
  )
}

Home.fetchData = () => (dispatch: any) => dispatch(loadMessage())

export default connect(state => state)(Home)
