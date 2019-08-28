import React, { FunctionComponent, useEffect } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"

import { loadMessageData } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"

import "./index.css"

interface Props {
  fetchData: Function
  home: HomeState
}

interface HomeType extends FunctionComponent<Props> {
  fetchData: Function
}

const Home: HomeType = ({ home: { messages } }) => {
  useEffect(() => console.log(`~~~~`), [])

  return (
    <>
      {messages.map(({ text }, index) => (
        <div key={index}>{text}</div>
      ))}
    </>
  )
}

interface FetchDataParam {
  dispatch: ThunkDispatch<null, null, null>
}

Home.fetchData = () => ({ dispatch }: FetchDataParam) =>
  dispatch(loadMessageData())

export default connect(state => state)(Home)
