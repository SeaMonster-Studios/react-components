import * as React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import { Input } from "../components/Input"
import * as io from "../utils/io"

const inputTypes = [
  "color",
  "date",
  "datetime",
  "datetime-local",
  "email",
  "hidden",
  "month",
  "number",
  "password",
  "range",
  "search",
  "tel",
  "text",
  "time",
  "url",
  "week",
  "button",
  "submit",
  "file",
]

afterEach(cleanup)

describe("Button Component Test", () => {
  it("Renders", () => {
    const { getByTestId } = renderSetup({
      type: "text",
    })

    const input = getByTestId("component-input")

    expect(input).toBeDefined()
  })

  it("Renders with all valid input types that are in the inputTypes.simple list", () => {
    inputTypes.map((type) => {
      cleanup()

      if (type === "button" || type === "file" || type === "submit") {
        const { getByTestId } = render(
          <Input type={type}>{({ input }) => <span>{input}</span>}</Input>,
        )
        const input = getByTestId("component-input")
        const wrapper = getByTestId("component-input-wrapper")
        const label = getByTestId("component-input-label")

        expect(input.type).toBe(type)
        expect(wrapper).toBeDefined()
        expect(label).toBeDefined()
      } else {
        const { getByTestId } = render(<Input type={type} />)
        const input = getByTestId("component-input")
        expect(input.type).toBe(type)
      }
    })
  })

  it("Input with a type of `file` renders correctly, and provides the user with file contents onChange", async () => {
    const fileContents = "dummy content"
    const file = new File([fileContents], "example.png", { type: "image/png" })

    io.readUploadedFileAsText = jest.fn(() => Promise.resolve(fileContents))

    const valueHasChangedMock = jest.fn()

    const { getByTestId } = render(
      <Input type="file" valueHasChanged={valueHasChangedMock}>
        {({ input }) => <span>{input}</span>}
      </Input>,
    )

    const input = getByTestId("component-input")

    Object.defineProperty(input, "files", {
      value: [file],
    })

    fireEvent.change(input)

    await expect(io.readUploadedFileAsText).toHaveBeenCalled()

    expect(valueHasChangedMock).toHaveBeenCalled()
    expect(valueHasChangedMock).toHaveBeenCalledWith(
      expect.any(Object), // the react ref, but not sure how to get that here yet.
      fileContents,
    )
    expect(input.nodeName).toBe("INPUT")
  })
})

function renderSetup(overrides) {
  const valueHadChanged = jest.fn()
  const props = {
    valueHadChanged,
    ...overrides,
  }

  const wrapper = render(<Input {...props} />)

  return {
    ...wrapper,
    props,
  }
}
