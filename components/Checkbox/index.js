// @flow
import React from 'react'
//
import { Wrapper } from './style'

export type tCheckbox = {
  size: number,
  styles?: string, // Emotion css (return value of the function css)
  activeStyles?: string, // Emotion css (return value of the function css)
  checked?: boolean,
  onChange?: any => any,
  checkedHasChanged?: (checked: boolean) => any,
}

export type tCheckboxState = {
  checked: boolean,
}

export type tEvent = SyntheticEvent<HTMLInputElement>

export class Checkbox extends React.Component<tCheckbox, tCheckboxState> {
  state = {
    checked: false,
  }
  handleChange = () => {
    this.setState(prevState => ({ checked: !prevState.checked }))
    // handleChange = (event: tEvent) => {
    // event.persist()
    // if (event.currentTarget instanceof HTMLInputElement) {
    //   console.log(event.currentTarget.checked)
    // }
  }
  render() {
    const {
      size,
      styles,
      activeStyles,
      checked,
      onChange,
      checkedHasChanged,
      ...attrs
    } = this.props

    const isChecked = checked || this.state.checked

    return (
      <Wrapper
        {...{
          'data-testid': 'component-checkbox',
          isChecked,
          size,
          styles: styles || ``,
          activeStyles: activeStyles || ``,
          ...attrs,
        }}
      >
        <input
          type="checkbox"
          onChange={onChange || this.handleChange}
          checked={isChecked}
        />
      </Wrapper>
    )
  }
}
