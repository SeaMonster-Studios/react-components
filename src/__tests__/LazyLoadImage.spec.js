import React from "react"
import { render, cleanup } from "react-testing-library"
import { LazyLoadImage } from "../components/LazyLoadImage"

afterEach(cleanup)

describe("LazyLoadImage Component Test", () => {
  it("Renders", () => {
    const { getByTestId, container } = renderSetup()
    const img = getByTestId("component-lazy-load-image")

    expect(img.nodeName).toBe("IMG")
    expect(container).toMatchSnapshot()
  })
})

function renderSetup(overrides) {
  const props = {
    src: "https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png",
    alt: "react-logo",
    ...overrides,
  }

  const wrapper = render(<LazyLoadImage {...props} />)

  return {
    ...wrapper,
    props,
  }
}
