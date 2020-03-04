import React from "react"
import { connect } from "react-redux"

import { loadMessage } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"
import { FetchFC } from "~/types"

import "./index.css"

interface Props {
  home: HomeState
}

const Home: FetchFC<Props> = ({ home: { messages } }) => (
  <>
    {messages.map(({ text }, index) => (
      <div key={index}>{text}</div>
    ))}
  </>
)

Home.fetchData = () => (dispatch: any) => dispatch(loadMessage())

export default connect(state => state)(Home)
