import React, { MouseEvent } from "react"

import "./index.css"

class About extends React.Component {
  // static fetchData = () => {}

  handleClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  componentDidMount() {
    console.log("mount")
  }

  render() {
    return (
      <div className="About" onClick={this.handleClick}>
        i am about page
      </div>
    )
  }
}

export default About
