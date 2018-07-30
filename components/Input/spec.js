// @flow
import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
//
import { Input } from './'
import * as io from '../../utils/io'

const inputTypes = {
  simple: [
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'hidden',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ],
  button: ['button', 'submit', 'file'],
}

afterEach(cleanup)

describe('Button Component Test', () => {
  it('Renders', () => {
    const { getByTestId } = renderSetup({
      type: 'text',
    })

    const input = getByTestId('component-input')

    expect(input).toBeDefined()
  })

  it('Renders with all valid input types that are in the inputTypes.simple list', () => {
    inputTypes.simple.map(type => {
      cleanup()
      const { getByTestId } = render(<Input type={type} />)

      const input = getByTestId('component-input')
      expect(input.type).toBe(type)
    })
  })

  it('Will be wrapped in a `component-button` if the type is in the inputTypes.button list', () => {
    inputTypes.button.map(type => {
      cleanup()
      // $FlowFixMe
      const { getByTestId } = render(<Input type={type} />)

      const button = getByTestId('component-button')
      expect(button).toBeDefined()
      // TODO: Test that the component returns the input as a prop instead of rendering the component. This will allow the user put something else in the button (like an icon). TODO: update title of `it` accordingly.
    })
  })

  it('Input with a type of `file` renders correctly, and provides the user with file contents onChange', async () => {
    const fileContents = 'dummy content'
    const file = new File([fileContents], 'example.png', { type: 'image/png' })

    io.readUploadedFileAsText = jest.fn(() => Promise.resolve(fileContents))

    const valueHasChangedMock = jest.fn()

    const { getByTestId } = renderSetup({
      type: 'file',
      baseColor: 'rgb(255,255,255)',
      textColor: 'rgb(255,255,255)',
      valueHasChanged: valueHasChangedMock,
    })

    const input = getByTestId('component-input')

    Object.defineProperty(input, 'files', {
      value: [file],
    })

    fireEvent.change(input)

    await expect(io.readUploadedFileAsText).toHaveBeenCalled()

    expect(valueHasChangedMock).toHaveBeenCalled()
    expect(valueHasChangedMock).toHaveBeenCalledWith(
      expect.any(Object), // the react ref, but not sure how to get that here yet.
      fileContents,
    )
    expect(input.nodeName).toBe('INPUT')
  })
})

function renderSetup(overrides) {
  const valueHadChanged = jest.fn()
  const props = {
    valueHadChanged,
    ...overrides,
  }

  // $FlowFixMe
  const wrapper = render(<Input {...props} />)

  return {
    ...wrapper,
    props,
  }
}
