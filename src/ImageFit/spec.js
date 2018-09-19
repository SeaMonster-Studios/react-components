import React from "react"
import { createSerializer } from "jest-emotion"
import * as emotion from "emotion"
//
import { render, cleanup } from "react-testing-library"
import { ImageFit } from "./"

afterEach(cleanup)

expect.addSnapshotSerializer(createSerializer(emotion))

describe("ImageFit", () => {
  it("Renders with the correct object styles applied from `fit` and `position` props.", () => {
    const { getByTestId, props } = renderSetup()
    const imageFit = getByTestId("component-image-fit")

    const renderedStyles = window.getComputedStyle(imageFit)

    expect(renderedStyles.fontFamily).toBe(
      `'object-fit: ${props.fit}; object-position: ${props.position}'`,
    )
    expect(renderedStyles.objectFit).toBe(props.fit)
    expect(renderedStyles.objectPosition).toBe(props.position)
    expect(imageFit).toBeDefined()
    expect(imageFit).toMatchSnapshot()
  })
})

function renderSetup(overrides) {
  const props = {
    src: "https://picsum.photos/1200/500",
    alt: "something descriptive about my random image",
    fit: "cover",
    position: "top center",

    ...overrides,
  }

  const wrapper = render(<ImageFit {...props} />)

  return {
    ...wrapper,
    props,
  }
}
