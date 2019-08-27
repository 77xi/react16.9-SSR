import React, { FunctionComponent, useEffect } from "react"
import { connect } from "react-redux"
import { Store, AnyAction } from "redux"

import { loadHomeData } from "~/pages/home/modules/home"
import { ThunkDispatch } from "redux-thunk"

import "./index.css"

interface Props {
  fetchData: Function
  home: {
    data: {
      target: { excerpt: string }
    }[]
  }
}

interface HomeType extends FunctionComponent<Props> {
  fetchData: Function
}

const Home: HomeType = ({ home: { data } }) => {
  useEffect(() => console.log(`~~~~`), [])

  return (
    <>
      {data.map(({ target: { excerpt } }, index) => (
        <div key={index}>{excerpt}</div>
      ))}
    </>
  )
}

Home.fetchData = () => ({
  dispatch
}: {
  dispatch: ThunkDispatch<Store, void, AnyAction>
}) => dispatch(loadHomeData())

export default connect(state => state)(Home)
