import React, { useEffect } from "react"
import { connect } from "react-redux"

import "./index.css"

const Home = () => {
  useEffect(() => {}, [])

  return <div className="Home">Home</div>
}

Home.fetchData = () => {}

export default connect(state => state)(Home)
