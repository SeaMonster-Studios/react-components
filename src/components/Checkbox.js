import * as React from "react"
import PropTypes from "prop-types"
import { Transition } from "react-spring"
import styled, { css } from "react-emotion"

const borderWidth = 2

export const Wrapper = styled("button")`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: ${borderWidth}px solid #000;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .input-wrapper {
    min-width: ${(props) => props.size}px;
    min-height: ${(props) => props.size}px;
    margin-top: -${borderWidth * 2}px;
    overflow: hidden;
    position: relative;
    padding: 0;
  }

  input {
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(100);
    cursor: pointer;
    position: absolute;
    z-index: 2;
  }

  &:focus {
    outline: none;
  }

  .mark {
    position: absolute;
    z-index: 1;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      position: absolute;
    }
  }

  ${(props) => props.styles} ${(props) => setActiveStyles(props)};
`

function setActiveStyles(props) {
  if (props.isChecked && !props.hasOnIcon) {
    return css`
      background-color: #000;

      ${props.activeStyles};
    `
  } else if (props.isChecked) {
    return props.activeStyles
  } else {
    return ""
  }
}


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
    className: "",
    activeStyles: "",
    iconsTransitionFrom: {
      opacity: 0,
      transform: "rotate(90deg)",
    },
    iconsTransitionEnter: {
      opacity: 1,
      transform: "rotate(0deg)",
    },
    iconsTransitionLeave: {
      opacity: 0,
      transform: "rotate(-90deg)",
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
        "If you want to control the state of Checkbox, you must provide both the `checked` and `onChange` props.",
      )
  }
  handleChange = () => {
    this.setState((prevState) => {
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

    return (
      <Wrapper
        {...{
          "data-testid": "component-checkbox",
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
                ? (styles) => buildIcon(OnIcon, styles, "on-mark")
                : (styles) => buildIcon(OffIcon, styles, "off-mark")}
            </Transition>
          )}
      </Wrapper>
    )
  }
}

const buildIcon = (Icon, styles, testid) => (
  <div style={styles} className="mark" data-testid={testid}>
    <Icon />
  </div>
)
