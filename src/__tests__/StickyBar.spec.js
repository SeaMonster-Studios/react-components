import React from "react"
import { render, cleanup } from "react-testing-library"
import { StickyBar } from "../components/StickyBar"

afterEach(cleanup)

describe("StickyBar Component Test", () => {
  it("Renders", () => {
    const { getByTestId, getByText, props, container } = renderSetup()
    const bar = getByTestId("component-sticky-bar")

    expect(getByText(props.children)).toBeDefined()
    expect(bar).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

function renderSetup(overrides) {
  const props = {
    children: "content goes here...",
    ...overrides,
  }

  const wrapper = render(<StickyBar {...props} />)

  return {
    ...wrapper,
    props,
  }
}
