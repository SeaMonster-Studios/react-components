// @flow
import React from 'react'
import faker from 'faker'
import { render, cleanup } from 'react-testing-library'
//
import { Button } from './'

afterEach(cleanup)

describe('Button Component Test', () => {
  it('Renders a React Static <Link> with a tagType of "Link"', () => {
    const { getByText, props } = renderSetup({
      tagType: 'Link',
      link: `${faker.internet.url()}/`,
    })
    const button = getByText(props.children)

    expect(button).toBeDefined()
    expect(button.href).toBe(props.link)
    expect(button.nodeName).toBe('A')
  })

  it('Renders an <a> tag if tagType is a or Link', () => {
    const { getByTestId } = renderSetup({
      tagType: 'a',
      link: `${faker.internet.url()}/`,
    })
    const button = getByTestId('component-button')

    expect(button.nodeName).toBe('A')
  })

  it('Renders an <button> tag if tagType is button', () => {
    const { getByTestId } = renderSetup({ tagType: 'button' })
    const button = getByTestId('component-button')

    expect(button.nodeName).toBe('BUTTON')
  })
})

function renderSetup(overrides) {
  const props = {
    children: 'Contact Us',
    baseColor: '255,255,255',
    textColor: '255,255,255',
    ...overrides,
  }

  const wrapper = render(<Button {...props} />)

  return {
    ...wrapper,
    props,
  }
}
