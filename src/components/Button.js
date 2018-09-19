/**
 * @name Button
 * @example
 *  <Button baseColor='rgb(255,127,104)' textColor='rgb(255,255,255)' hoverStyle='ripple'>Contact Us</Button>
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled, { keyframes, css } from "react-emotion"

const Wrapper = styled("button")`
  text-decoration: none;
  border-color: ${(props) => props.borderColor};
  cursor: pointer;

  ${(props) => colorProps(props)};
  ${(props) => hoverProps(props)};

  ${(props) => props.styles};
`

function colorProps(props) {
  if (props.inverse) {
    switch (props.inverseStyle) {
      case "transparent":
        return css`
          background-color: rgba(255, 255, 255, 0);
          color: ${props.baseColor};
        `
      case "default":
      default:
        return css`
          background-color: ${props.textColor};
          color: ${props.baseColor};
        `
    }
  } else {
    return css`
      background-color: ${props.baseColor};
      color: ${props.textColor};
    `
  }
}

const rippleOut = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`

function hoverProps(props) {
  switch (props.hoverStyle) {
    case "ripple":
      return css`
        transform-origin: center;
        position: relative;
        border-color: ${props.hoverBorderColor};

        &::after {
          content: "";
          position: absolute;
          border: 1px solid;
          border-radius: inherit;
          border-color: inherit;
          top: -1px;
          right: -1px;
          bottom: -1px;
          left: -1px;
        }

        &:hover,
        &:focus {
          text-decoration: none;
          color: ${props.inverse ? props.hoverBaseColor : props.hoverTextColor};
          background-color: ${props.inverse
            ? props.hoverTextColor
            : props.hoverBaseColor};

          &::after {
            animation: ${rippleOut} 0.5s;
          }
        }
      `
    case "default":
    default:
      return css`
        text-decoration: none;

        &:hover,
        &:focus {
          color: ${props.inverse ? props.hoverBaseColor : props.hoverTextColor};
          background-color: ${props.inverse
            ? props.hoverTextColor
            : props.hoverBaseColor};

          border-color: ${props.hoverBorderColor};
        }
      `
  }
}

export const Button = (props) => {
  const {
    baseColor,
    textColor,
    borderColor,
    hoverBaseColor,
    hoverTextColor,
    hoverBorderColor,
    inverse,
    inverseStyle,
    hoverStyle,
    style,
    className,
    children,
  } = props

  return (
    <Wrapper
      {...{
        "data-testid": "component-button",
        baseColor,
        textColor,
        borderColor: borderColor || baseColor,
        inverse: inverse,
        inverseStyle: inverseStyle,
        hoverStyle: hoverStyle,
        hoverBaseColor: hoverBaseColor || baseColor,
        hoverTextColor: hoverTextColor || textColor,
        hoverBorderColor: hoverBorderColor || hoverBaseColor || baseColor,
        style,
        className,
      }}
    >
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** Css color value. */
  baseColor: PropTypes.string,
  /** Css color value. */
  textColor: PropTypes.string,
  /** Css color value. Defaults to baseColor */
  borderColor: PropTypes.string,
  /** Css color value. Defaults to baseColor */
  hoverBaseColor: PropTypes.string,
  /** Css color value. Defaults to textColor */
  hoverTextColor: PropTypes.string,
  /** Css color value. Defaults to hoverBaseColor || baseColor */
  hoverBorderColor: PropTypes.string,
  inverse: PropTypes.bool,
  inverseStyle: PropTypes.oneOf(["default", "transparent"]),
  hoverStyle: PropTypes.oneOf(["default", "ripple"]),
  className: PropTypes.string,
  style: PropTypes.object,
}

Button.defaultProps = {
  inverse: false,
  inverseStyle: "default",
  hoverStyle: "default",
  textColor: "rgb(255,255,255)",
  baseColor: "rgb(0,0,0)",
  className: "",
  style: {
    transition: "all 0.5s ease",
    padding: "10px 30px",
  },
}
