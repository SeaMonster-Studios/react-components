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
  baseColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  hoverBaseColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  inverse: PropTypes.bool,
  inverseStyle: PropTypes.oneOf(['default', 'transparent']),
  hoverStyle: PropTypes.oneOf(['default', 'ripple']),
  className: PropTypes.string,
  style: PropTypes.shape({}),
}
