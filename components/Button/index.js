// @flow
import * as React from 'react'
//
import { A, Link, Button as ButtonStyled } from './style'

export type tButton = {
  tagType: 'Link' | 'a' | 'button',
  children: React.Node,
  baseColor: string,
  textColor: string,
  inverse?: boolean,
  inverseStyle?: 'default' | 'transparent',
  hoverEffect?: 'default' | 'ripple',
  hoverBaseColor?: string,
  styles?: string, // emotion css string
}

export class Button extends React.Component<tButton> {
  defaults = {
    hoverEffect: 'default',
    inverse: false,
    inverseStyle: 'default',
  }
  render() {
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
      ...props
    } = this.props

    const buttonProps = {
      'data-testid': 'component-button',
      options: {
        ...this.defaults,
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
          <A {...buttonProps} {...props}>
            {children}
          </A>
        )
      case 'button':
        return (
          <ButtonStyled {...buttonProps} {...props}>
            {children}
          </ButtonStyled>
        )
      case 'Link':
      default:
        return (
          <Link {...buttonProps} {...props}>
            {children}
          </Link>
        )
    }
  }
}
