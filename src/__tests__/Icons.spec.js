import React from "react"
import { render, cleanup } from "react-testing-library"
//
import * as Icons from "../components/Icons/index"

afterEach(cleanup)

describe("Icons Tests", () => {
  Object.entries(Icons).map((icon) => {
    it(`Renders ${icon[0]}`, () => {
      const Icon = icon[1]

      const { container } = render(<Icon />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
