import React, {
  useEffect,
  lazy,
  useState,
  Suspense,
  FunctionComponent
} from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"

import { loadMessageData } from "~/pages/home/modules/ations"
import { HomeState } from "~/pages/home/modules/types"

import "./index.css"

const LazyComponent = lazy(() => import("~/components/LazyComponent"))

interface Props {
  fetchData: Function
  home: HomeState
}

interface HomeType extends FunctionComponent<Props> {
  fetchData: Function
}

const Home: HomeType = ({ home: { messages } }) => {
  const [isLazy, setLazy] = useState(false)

  useEffect(() => console.log(`~~~~`), [])

  return (
    <>
      {messages.map(({ text }, index) => (
        <div key={index}>{text}</div>
      ))}
      <button onClick={() => setLazy(true)}>lazy</button>
      {isLazy && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  )
}

interface FetchDataParam {
  dispatch: ThunkDispatch<null, null, null>
}

Home.fetchData = () => ({ dispatch }: FetchDataParam) =>
  dispatch(loadMessageData())

export default connect(state => state)(Home)
