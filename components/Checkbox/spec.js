// @flow
import React from 'react'
import { render, cleanup } from 'react-testing-library'
//
import { changeEvent } from '../../utils/testing/click-events'
import { Checkbox } from './'
import { CheckIcon, CloseIcon } from '../Icons'
import { css } from '../../node_modules/emotion'

afterEach(cleanup)

describe('Checkbox Component Test', () => {
  it('Renders', () => {
    const { getByTestId } = renderSetup()

    const checkbox = getByTestId('component-checkbox')

    expect(checkbox).toBeDefined()
  })

  it('Returns changed value when clicked', () => {
    const { props, getByTestId } = renderSetup()
    const input = getByTestId('component-checkbox-input')

    changeEvent(input, true, 'checked')

    expect(props.checkedHasChanged).toHaveBeenCalledWith(true)

    changeEvent(input, false, 'checked')

    expect(props.checkedHasChanged).toHaveBeenCalledWith(false)
  })

  it('Renders with the correct width and height, base don the `size` prop. And applies custom styles from the `styles` prop.', () => {
    const testColor = 'rgb(145, 34, 34)'
    const activeTestColor = 'rgb(244, 122, 109)'
    const { props, getByTestId } = renderSetup({
      styles: css`
        background-color: ${testColor};
      `,
      activeStyles: css`
        background-color: ${activeTestColor};
      `,
    })

    const input = getByTestId('component-checkbox-input')
    const checkbox = getByTestId('component-checkbox')
    const inputWrapper = getByTestId('component-checkbox-input-wrapper')

    const checkboxStyles = window.getComputedStyle(checkbox)
    const inputWrapperStyles = window.getComputedStyle(inputWrapper)

    expect(checkboxStyles.height).toBe(props.size + 'px')
    expect(checkboxStyles.width).toBe(props.size + 'px')
    expect(checkboxStyles.backgroundColor).toBe(testColor)
    expect(inputWrapperStyles.minHeight).toBe(props.size + 'px')
    expect(inputWrapperStyles.minWidth).toBe(props.size + 'px')

    changeEvent(input, true, 'checked')

    expect(window.getComputedStyle(checkbox).backgroundColor).toBe(
      activeTestColor,
    )
  })

  it('Renders with `OnIcon` and `OffIcon` when passed in as props and displays them relevant to the value of `checked`', () => {
    const { getByTestId } = renderSetup({
      OnIcon: CheckIcon,
      OffIcon: CloseIcon,
    })

    const OffIcon = getByTestId('off-mark')
    const input = getByTestId('component-checkbox-input')

    expect(OffIcon).toBeDefined()

    changeEvent(input, true, 'checked')

    const OnIcon = getByTestId('on-mark')

    expect(OnIcon).toBeDefined()
  })
})

it('Does not use internal state when `checked` and `onChange` props are passed in. These props are used accordingly to control checkbox state.', () => {
  const onChange = jest.fn()
  const { getByTestId } = renderSetup({
    checked: true,
    onChange,
  })

  const input = getByTestId('component-checkbox-input')

  expect(input.checked).toBe(true)

  changeEvent(input, true, 'checked')

  expect(onChange).toHaveBeenCalled()
})

function renderSetup(overrides) {
  const checkedHasChanged = jest.fn()
  const props = {
    checkedHasChanged,
    size: 32,
    ...overrides,
  }

  // $FlowFixMe
  const wrapper = render(<Checkbox {...props} />)

  return {
    ...wrapper,
    props,
  }
}
