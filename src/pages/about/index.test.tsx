import React from "react"
import renderer from "react-test-renderer"

import About from "./index"

test("About Page render No Crash", () => {
  const Component = renderer.create(<About />)
  const tree = Component.toJSON()

  expect(tree).toMatchSnapshot()
})
