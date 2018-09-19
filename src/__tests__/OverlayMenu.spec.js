import React from "react"
import { render, cleanup } from "react-testing-library"
import { OverlayMenu, OverlayMenuItem } from "../components/OverlayMenu"
import _ from "lodash"
import faker from "faker"

afterEach(cleanup)

describe("OverlayMenu Component Test", () => {
  it("Renders when isActive is true, with top level items", () => {
    const { getByTestId, container, props, queryByText } = renderSetup()
    const menu = getByTestId("overlay-menu")

    expect.assertions(props.items.length + 2)

    props.items.map((item) => expect(queryByText(item.title)).toBeTruthy())

    expect(container).toBeTruthy()
    expect(menu.nodeName).toBeTruthy()
  })

  it("Doesn't Render when isActive is false", () => {
    const { queryByTestId } = renderSetup({ isActive: false })

    expect(queryByTestId('overlay-menu')).toBeFalsy()
  })
})

function renderSetup(overrides) {
  const props = {
    isActive: true,
    rootId: "testing-root",
    itemRender: (itemProps) => <OverlayMenuItem {...itemProps} />,
    items: _.times(faker.random.number(30), () => ({
      id: faker.random.uuid(),
      title: faker.lorem.words(),
      url: faker.random.number() % 2 === 0 ? faker.internet.url() : "",
      items:
        faker.random.number() % 2 === 0
          ? _.times(faker.random.number(30), () => ({
              id: faker.random.uuid(),
              title: faker.lorem.words(),
              url: faker.random.number() % 2 === 0 ? faker.internet.url() : "",
              items:
                faker.random.number() % 2 === 0
                  ? _.times(faker.random.number(10), () => ({
                      id: faker.random.uuid(),
                      title: faker.lorem.words(),
                      url:
                        faker.random.number() % 2 === 0
                          ? faker.internet.url()
                          : "",
                    }))
                  : [],
            }))
          : [],
    })),
    ...overrides,
  }

  const root = document.createElement("div")
  root.setAttribute("id", "testing-root")

  const wrapper = render(
    <div id={"testing-root"}>
      <OverlayMenu {...props} />
    </div>,
    {
      container: document.body.appendChild(root),
    },
  )

  return {
    ...wrapper,
    props,
  }
}
