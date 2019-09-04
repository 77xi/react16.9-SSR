import React, { useEffect, FC } from "react"
import { connect } from "react-redux"

import { loadMessageData } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"

import "./index.css"

interface Props {
  fetchData: Function
  home: HomeState
}

interface HomeType extends FC<Props> {
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

Home.fetchData = () => ({ dispatch }: any) => dispatch(loadMessageData())

export default connect(state => state)(Home)
