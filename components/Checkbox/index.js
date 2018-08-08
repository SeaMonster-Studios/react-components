// @flow
import * as React from 'react'
import { Transition } from 'react-spring'
//
import { Wrapper } from './style'

export type tCheckbox = {
  size: number,
  styles?: string, // Emotion css (return value of the function css)
  activeStyles?: string, // Emotion css (return value of the function css)
  checked?: boolean,
  onChange?: any => any,
  checkedHasChanged?: (checked: boolean) => any,
  OnIcon?: any, // A Non-rendered React Component, w/e that is...
  OffIcon?: any, // A Non-rendered React Component, w/e that is...
  markTransitionFrom?: {},
  markTransitionEnter?: {},
  markTransitionLeave?: {},
}

export type tCheckboxState = {
  checked: boolean,
}

export class Checkbox extends React.Component<tCheckbox, tCheckboxState> {
  state = {
    checked: false,
  }
  markTransitionFrom = {
    opacity: 0,
    transform: 'rotate(90deg)',
  }
  markTransitionEnter = {
    opacity: 1,
    transform: 'rotate(0deg)',
  }
  markTransitionLeave = {
    opacity: 0,
    transform: 'rotate(-90deg)',
  }
  constructor(props: tCheckbox) {
    super(props)

    if (
      (this.props.checked !== undefined && !this.props.onChange) ||
      (this.props.checked === undefined && this.props.onChange)
    )
      throw new Error(
        'If you want to control the state of Checkbox, you must provide both the `checked` and `onChange` props.',
      )
  }
  handleChange = () => {
    this.setState(prevState => {
      const checked = !prevState.checked

      if (this.props.checkedHasChanged) this.props.checkedHasChanged(checked)

      return { checked }
    })
  }
  render() {
    const {
      size,
      styles,
      activeStyles,
      checked,
      onChange,
      // eslint-disable-next-line no-unused-vars
      checkedHasChanged, // destruct so it's not in the attrs object
      OffIcon,
      OnIcon,
      markTransitionFrom,
      markTransitionEnter,
      markTransitionLeave,
      ...attrs
    } = this.props

    const isChecked = checked || this.state.checked

    return (
      <Wrapper
        {...{
          'data-testid': 'component-checkbox',
          isChecked,
          size,
          hasOnIcon: OnIcon ? true : false,
          hasOffIcon: OffIcon ? true : false,
          styles: styles || '',
          activeStyles: activeStyles || '',
          ...attrs,
        }}
      >
        <div
          className="input-wrapper"
          data-testid="component-checkbox-input-wrapper"
        >
          <input
            type="checkbox"
            data-testid="component-checkbox-input"
            onChange={onChange || this.handleChange}
            checked={isChecked}
          />
        </div>

        {OnIcon &&
          OffIcon && (
            <div className="mark">
              <Transition
                from={markTransitionFrom || this.markTransitionFrom}
                enter={markTransitionEnter || this.markTransitionEnter}
                leave={markTransitionLeave || this.markTransitionLeave}
              >
                {isChecked
                  ? styles => <OnIcon data-testid="on-mark" style={styles} />
                  : styles => <OffIcon data-testid="off-mark" style={styles} />}
              </Transition>
            </div>
          )}
      </Wrapper>
    )
  }
}
