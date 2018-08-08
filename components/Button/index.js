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

export const defaultsProps = {
  hoverEffect: 'default',
  inverse: false,
  inverseStyle: 'default',
}

export const Button = (props: tButton) => {
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
