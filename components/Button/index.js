import * as React from 'react'
import PropTypes from 'prop-types'
//
import { A, Link, Button as ButtonStyled } from './style'

export const defaultsProps = {
  hoverEffect: 'default',
  inverse: false,
  inverseStyle: 'default',
}

export const Button = props => {
  const {
    tagType,
    baseColor,
    textColor,
    inverse,
    inverseStyle,
    hoverEffect,
    hoverBaseColor,
    styles,
    children,
    ...attrs
  } = props

  const buttonProps = {
    'data-testid': 'component-button',
    options: {
      ...defaultsProps,
      baseColor,
      textColor,
      inverse,
      inverseStyle,
      hoverEffect,
      hoverBaseColor,
      styles,
    },
  }

  switch (tagType) {
    case 'a':
      return (
        <A {...buttonProps} {...attrs}>
          {children}
        </A>
      )
    case 'button':
      return (
        <ButtonStyled {...buttonProps} {...attrs}>
          {children}
        </ButtonStyled>
      )
    case 'Link':
    default:
      return (
        <Link {...buttonProps} {...attrs}>
          {children}
        </Link>
      )
  }
}

Button.propTypes = {
  tagType: PropTypes.oneOf(['Link', 'a', 'button']).isRequired,
  children: PropTypes.node.isRequired,
  baseColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  inverseStyle: PropTypes.oneOf(['default', 'transparent']),
  hoverEffect: PropTypes.oneOf(['default', 'ripple']),
  hoverBaseColor: PropTypes.string,
  styles: PropTypes.string,
}
