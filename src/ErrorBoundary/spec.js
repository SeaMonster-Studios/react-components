import React from "react"
import { render, cleanup } from "react-testing-library"
//
import { ErrorBoundary } from "./"
import { clickEvent } from "../../utils/testing"

const originalEnv = process.env.NODE_ENV

beforeAll(() => {
  process.env.NODE_ENV = "production"
})

afterAll(() => {
  process.env.NODE_ENV = originalEnv
})

afterEach(cleanup)

describe("ErrorBoundary Component Test", () => {
  it("Renders children when there is no app error", () => {
    const { child } = renderSetup()

    expect(child).toBeDefined()
  })

  it("Renders error message and report form when there is an error", () => {
    /* eslint-disable-next-line no-console */
    console.error = () => undefined

    const { container, queryByTestId, child } = renderSetup()

    expect(child).toBeDefined()

    try {
      clickEvent(child)
    } catch (error) {
      swallowError()
    }

    expect(queryByTestId("component-error-boundary")).toBeDefined()
    expect(queryByTestId("component-error-boundary-form")).toBeDefined()
    expect(container.firstChild).toMatchSnapshot()
  })
})

const swallowError = () => null

function renderSetup() {
  class Child extends React.Component {
    state = {
      errorMe: false,
    }
    render() {
      return (
        <span
          data-testid="component-error-boundary-test-child"
          onClick={() =>
            this.setState((prevState) => ({
              ...prevState,
              errorMe: true,
            }))
          }
        >
          {/* eslint-disable-next-line react/jsx-no-undef */}
          {this.state.errorMe ? <IDontExist /> : <span />}
        </span>
      )
    }
  }

  const wrapper = render(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>,
  )
  const child = wrapper.getByTestId("component-error-boundary-test-child")

  return {
    ...wrapper,
    child,
  }
}
