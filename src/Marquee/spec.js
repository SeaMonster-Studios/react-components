import React from "react"
import { createSerializer } from "jest-emotion"
import * as emotion from "emotion"
//
import { render, cleanup } from "react-testing-library"
import { Marquee } from "./"

afterEach(cleanup)

expect.addSnapshotSerializer(createSerializer(emotion))

describe("Marquee", () => {
  it("Renders", () => {
    const { getByTestId } = renderSetup()
    const Marquee = getByTestId("component-content-marquee")

    expect(Marquee).toBeDefined()
    expect(Marquee).toMatchSnapshot()
  })
})

function renderSetup(overrides) {
  const props = {
    image: "https://picsum.photos/1200/500",
    styles: ``,
    ...overrides,
  }

  const wrapper = render(
    <Marquee {...props}>
      <h2>
        Try our newest flavor — <br />
        <em>banana by bananarama</em>
      </h2>
      <button>Get some</button>
    </Marquee>,
  )

  return {
    ...wrapper,
    props,
  }
}
