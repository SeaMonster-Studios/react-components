// @flow
import React from 'react'
import faker from 'faker'
import { render, cleanup, fireEvent } from 'react-testing-library'
//
import { Button } from './'
import * as io from '../../utils/io'

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

  it('Renders with input type of file, and provides user file data via onFileChange prop', async () => {
    const fileContents = 'dummy content'
    const file = new File([fileContents], 'example.png', { type: 'image/png' })

    io.readUploadedFileAsText = jest.fn(() => Promise.resolve(fileContents))

    const onFileChangeMock = jest.fn()

    const { getByTestId } = renderSetup({
      tagType: 'input',
      onFileChange: onFileChangeMock,
      inputAttrs: {
        type: 'file',
      },
    })

    const button = getByTestId('component-button')
    const input = getByTestId('component-button-input')

    Object.defineProperty(input, 'files', {
      value: [file],
    })

    fireEvent.change(input)

    await expect(io.readUploadedFileAsText).toHaveBeenCalled()
    expect(onFileChangeMock).toHaveBeenCalled()
    expect(onFileChangeMock).toHaveBeenCalledWith(
      expect.any(Object), // the event, but not sure how to get that here yet.
      fileContents,
    )
    expect(button.nodeName).toBeDefined()
    expect(input.nodeName).toBe('INPUT')
  })
})

function renderSetup(overrides) {
  const props = {
    children: 'Contact Us',
    baseColor: 'rgb(255,255,255)',
    textColor: 'rgb(255,255,255)',
    ...overrides,
  }

  const wrapper = render(<Button {...props} />)

  return {
    ...wrapper,
    props,
  }
}
