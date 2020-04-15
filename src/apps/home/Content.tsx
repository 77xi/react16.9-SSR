import React, { useEffect } from "react"
import { connect } from "react-redux"

import "./index.css"

const Content = () => {
  useEffect(() => {
    window.document.title = "I am Content page"
  }, [])

  return <div className="Content">I am Content page</div>
}

export default connect(state => state)(Content)
