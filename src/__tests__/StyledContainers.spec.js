import React from "react"
import { render, cleanup } from "react-testing-library"
import { createMediaQueries } from "../utils/styles"
import { Container, Section } from "../components/StyledContainers"

afterEach(cleanup)

describe("StyledContainers Components Test", () => {
  it("Renders", () => {
    const { getByTestId, container } = renderSetup()
    const compContainer = getByTestId("component-container")
    const section = getByTestId("component-section")

    expect(compContainer).toBeTruthy()
    expect(section).toBeTruthy()
  })
})

function renderSetup() {
  const wrapper = render(
    <Container
      spacing={{
        horizontal: {
          sm: "15px",
          md: "30px",
          lg: "50px",
        },
      }}
      mediaQueries={createMediaQueries({
        md: 992,
        lg: 1200,
      })}
    >
      <Section
        position="odd"
        spacing={{
          vertical: {
            sm: "20px",
            md: "45px",
            lg: "60px",
          },
        }}
        mediaQueries={createMediaQueries({
          md: 992,
          lg: 1200,
        })}
      >
        content goes here...
      </Section>
      <Section
        position="even"
        spacing={{
          vertical: {
            sm: "20px",
            md: "45px",
            lg: "60px",
          },
        }}
        mediaQueries={createMediaQueries({
          md: 992,
          lg: 1200,
        })}
      >
        content goes here...
      </Section>
    </Container>,
  )

  return {
    ...wrapper,
  }
}
