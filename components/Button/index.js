// @flow
import * as React from 'react'
//
import { A, Link, Button as ButtonStyled, Input } from './style'
import { readUploadedFileAsText } from '../../utils/io'

type tState = {}

type linkTagTypes = 'Link' | 'a'
type nonLinkTagTypes = 'button' | 'input'

type tProps = {
  tagType: linkTagTypes | nonLinkTagTypes,
  link: string,
  children: React.Node,
  baseColor: string,
  textColor: string,
  hoverBaseColor?: string,
  inverse?: boolean,
  inverseStyle?: 'default' | 'transparent',
  hoverEffect?: 'default' | 'ripple',
  inputAttrs?: {},
  styles?: string, // Emotion style object
  onFileChange?: (
    event: SyntheticEvent<HTMLInputElement>,
    fileContents: string,
  ) => any,
}
export class Button extends React.Component<tProps, tState> {
  defaults = {
    hoverEffect: 'default',
    inverse: false,
    inverseStyle: 'default',
  }
  handleInputChange = async (event: SyntheticEvent<HTMLInputElement>) => {
    event.persist()
    if (event.currentTarget.files.length) {
      try {
        const fileContents: string = await readUploadedFileAsText(
          event.currentTarget.files[0],
        )

        if (this.props.onFileChange) {
          this.props.onFileChange(event, fileContents)
        } else {
          console.error(
            "You must provide an onFileChange prop if you're using an tagType of input and it's type is file. ",
          )
        }
      } catch (e) {
        console.warn(e.message)
      }
    }
  }
  render() {
    const {
      link,
      tagType,
      inputAttrs,
      baseColor,
      textColor,
      inverse,
      inverseStyle,
      hoverEffect,
      hoverBaseColor,
      styles,
      onFileChange,
      children,
      ...attrs
    } = this.props

    const buttonProps = {
      ...attrs,
      'data-testid': 'component-button',
      options: {
        ...this.defaults,
        tagType,
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
          <A {...buttonProps} href={link}>
            {children}
          </A>
        )
      case 'button':
        return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>
      case 'input':
        return (
          <Input {...buttonProps}>
            <input onChange={this.handleInputChange} {...inputAttrs} />
            <span>{children}</span>
          </Input>
        )
      case 'Link':
      default:
        return (
          <Link {...buttonProps} to={link}>
            {children}
          </Link>
        )
    }
  }
}
