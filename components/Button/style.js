import styled, { keyframes, css } from 'react-emotion'
import { Link as ReactRouterLink } from 'react-static'

export const A = styled('a')`
  ${({ options }) => buttonProps(options)};
`

export const Link = styled(ReactRouterLink)`
  ${({ options }) => buttonProps(options)};
`

export const Button = styled('button')`
  ${({ options }) => buttonProps(options)};
`

const buttonProps = props => css`
  text-decoration: none;
  border-color: ${props.baseColor};
  cursor: pointer;

  ${colorProps(props)} ${hoverProps(props)} ${props.styles};
`

function colorProps(props) {
  if (props.inverse) {
    switch (props.inverseStyle) {
      case 'transparent':
        return css`
          background-color: rgba(255, 255, 255, 0);
          color: ${props.baseColor};
        `
      case 'default':
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
  switch (props.hoverEffect) {
    case 'ripple':
      return css`
        transform-origin: center;
        position: relative;

        &::after {
          content: '';
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
          color: ${props.textColor};
          background-color: ${props.baseColor};

          &::after {
            animation: ${rippleOut} 0.5s;
          }
        }
      `
    case 'default':
    default:
      return css`
        text-decoration: none;

        &:hover,
        &:focus {
          color: ${props.textColor};
          background-color: ${props.inverse
            ? props.baseColor
            : props.hoverBaseColor
              ? props.hoverBaseColor
              : props.inverse};
          border-color: ${props.inverse
            ? props.baseColor
            : props.hoverBaseColor
              ? props.hoverBaseColor
              : props.inverse};
        }
      `
  }
}
