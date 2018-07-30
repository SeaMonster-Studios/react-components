// @flow
import React from 'react'
//
import { Wrapper } from './style'

export type tCheckbox = {
  active: boolean,
  size: number,
  styles?: string, // Emotion css (return value of the function css)
  activeStyles?: string, // Emotion css (return value of the function css)
  checked?: boolean,
  checkedHasChanged?: (checked: boolean) => any,
}

export class Checkbox extends React.Component<tCheckbox> {
  render() {
    const {
      active,
      size,
      styles,
      activeStyles,
      checked,
      checkedHasChanged,
      ...attrs
    } = this.props
    return (
      <Wrapper
        {...{
          'data-testid': 'component-checkbox',
          active,
          size,
          styles: styles || ``,
          activeStyles: activeStyles || ``,
          ...attrs,
        }}
      >
        <input type="checkbox" checked={active} />
      </Wrapper>
    )
  }
}
