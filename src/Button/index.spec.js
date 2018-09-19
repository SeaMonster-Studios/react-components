import React from "react"
import { render, cleanup } from "react-testing-library"
//
import { Button } from "./"

afterEach(cleanup)

describe("Button Component Test", () => {
  it("Renders", () => {
    const { getByTestId, getByText, props } = renderSetup()
    const button = getByTestId("component-button")

    expect(getByText(props.children)).toBeDefined()
    expect(button.nodeName).toBe("BUTTON")
  })
})

function renderSetup(overrides) {
  const props = {
    children: "Contact Us",
    baseColor: "rgb(0,0,0)",
    textColor: "rgb(255,255,255)",
    ...overrides,
  }

  const wrapper = render(<Button {...props} />)

  return {
    ...wrapper,
    props,
  }
}
