import React from "react"
import { connect } from "react-redux"

import { loadMessage } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"
import { DefaultComponentType } from "~/types"

import "./index.css"

interface Props {
  home: HomeState
}

const Home: DefaultComponentType<Props> = ({ home: { messages } }) => (
  <>
    {messages.map(({ text }, index) => (
      <div key={index}>{text}</div>
    ))}
  </>
)

/* eslint-disable @typescript-eslint/no-explicit-any */
Home.fetchData = () => (dispatch: any) => dispatch(loadMessage())

export default connect(state => state)(Home)
