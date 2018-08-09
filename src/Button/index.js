import * as React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './style'

export const Button = props => {
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
        'data-testid': 'component-button',
        baseColor,
        textColor,
        borderColor: borderColor || baseColor,
        inverse: inverse !== undefined ? inverse : false,
        inverseStyle: inverseStyle || 'default',
        hoverStyle: hoverStyle || 'default',
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
  inverseStyle: PropTypes.oneOf(['default', 'transparent']),
  hoverStyle: PropTypes.oneOf(['default', 'ripple']),
  className: PropTypes.string,
  style: PropTypes.object,
}

Button.defaultProps = {
  inverse: false,
  inverseStyle: 'default',
  hoverStyle: 'default',
  textColor: 'rgb(255,255,255)',
  baseColor: 'rgb(0,0,0)',
  style: {
    transition: 'all 0.5s ease',
    padding: '10px 30px'
  }
}
