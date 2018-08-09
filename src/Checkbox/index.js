import * as React from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
//
import { Wrapper } from './style'

export class Checkbox extends React.Component {
  static propTypes = {
    /** Height and Width */
    size: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    activeStyles: PropTypes.string,
    /** For user/non-component controlled state */
    checked: PropTypes.bool,
    /** For user/non-component controlled state */
    onChange: PropTypes.func,
    /** Receives new value each time it's updated */
    checkedHasChanged: PropTypes.func,
    /** Svg (component) used when `checked` is true */
    OnIcon: PropTypes.func,
    /** Svg (component) used when `checked` is flase */
    OffIcon: PropTypes.func,
    iconsTransitionFrom: PropTypes.object,
    iconsTransitionEnter: PropTypes.object,
    iconsTransitionLeave: PropTypes.object,
  }
  static defaultProps = {
    size: 30,
    style: {},
    className: '',
    activeStyles: '',
    iconsTransitionFrom: {
      opacity: 0,
      transform: 'rotate(90deg)',
    },
    iconsTransitionEnter: {
      opacity: 1,
      transform: 'rotate(0deg)',
    },
    iconsTransitionLeave: {
      opacity: 0,
      transform: 'rotate(-90deg)',
    },
  }
  state = {
    checked: false,
  }
  constructor(props) {
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
      style,
      className,
      activeStyles,
      checked,
      onChange,
      // eslint-disable-next-line no-unused-vars
      checkedHasChanged, // destruct so it's not in the attrs object
      OffIcon,
      OnIcon,
      iconsTransitionFrom,
      iconsTransitionEnter,
      iconsTransitionLeave,
      ...attrs
    } = this.props

    const isChecked = checked || this.state.checked

    const AnimatedOnIcon = OnIcon ? animated(OnIcon) : null
    const AnimatedOffIcon = OffIcon ? animated(OffIcon) : null

    return (
      <Wrapper
        {...{
          'data-testid': 'component-checkbox',
          className,
          isChecked,
          size,
          hasOnIcon: OnIcon ? true : false,
          hasOffIcon: OffIcon ? true : false,
          style: style,
          activeStyles: activeStyles,
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
            <Transition
              from={iconsTransitionFrom}
              enter={iconsTransitionEnter}
              leave={iconsTransitionLeave}
            >
              {isChecked
                ? styles => (
                    <div style={styles} className="mark" data-testid="on-mark">
                      <OnIcon />
                    </div>
                  )
                : styles => (
                    <div style={styles} className="mark" data-testid="off-mark">
                      <OffIcon />
                    </div>
                  )}
            </Transition>
          )}
      </Wrapper>
    )
  }
}
