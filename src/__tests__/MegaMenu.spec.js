import React from "react"
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "react-testing-library"
import { MegaMenu } from "../components/MegaMenu"
import _ from "lodash"
import faker from "faker"

afterEach(cleanup)

describe("MegaMenu Component Test", () => {
  it("Renders with all top level items", () => {
    const { getByTestId, queryByText, container, props } = renderSetup()
    const menu = getByTestId("mega-menu")

    expect.assertions(props.items.length + 2)

    props.items.map((item) => expect(queryByText(item.title)).toBeTruthy())
    expect(container).toBeTruthy()
    expect(menu.nodeName).toBeTruthy()
  })

  it("Renders sub items when item is clicked", async () => {
    const { container, queryByText, props } = renderSetup()
    const itemWithItems = container.querySelectorAll(
      '[data-testid="item-wrapper-with-items"]',
    )[0]
    const button = itemWithItems.querySelector('[data-testid="sub-menu-toggle"]')


    try {
      await waitForElement(() => fireEvent.click(button))
      const megaMenuList = itemWithItems.querySelector(
        '[data-testid="mega-menu-list"]',
      )

      props.items[0].items.map(subItem => {
        expect(queryByText(subItem.title)).toBeTruthy()

        subItem.items.map(subSubItem => expect(queryByText(subSubItem.title)).toBeTruthy())
      })

      expect(megaMenuList).toBeTruthy()
    } catch (error) {
      console.error(error)
    }
  })
})

function renderSetup(overrides) {
  const props = {
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

  const wrapper = render(<MegaMenu {...props} />)

  return {
    ...wrapper,
    props,
  }
}
