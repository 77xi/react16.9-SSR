import React from "react"
import renderer from "react-test-renderer"

import Account from "."

test("Account Page render No Crash", () => {
  const Component = renderer.create(<Account />)
  const tree = Component.toJSON()

  expect(tree).toMatchSnapshot()
})
