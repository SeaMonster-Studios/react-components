import styled, { keyframes } from 'react-emotion'
import { Link as ReactRouterLink } from 'react-static'

export const A = styled('a')(props => ({
  ...buttonProps(props),
}))

export const Link = styled(ReactRouterLink)(props => ({
  ...buttonProps(props),
}))

export const Button = styled('button')(props => ({
  ...buttonProps(props),
}))

export const Input = styled('span')(props => ({
  position: 'relative',

  input: {
    fontSize: '0',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    width: '100%',
    opacity: 0,

    '&:focus': { outline: 'none' },
  },

  '> span': {
    position: 'relative',
    zIndex: 1,
  },

  ...buttonProps(props),
}))

const buttonProps = props => ({
  textDecoration: 'none',
  borderColor: `rgb(${props.baseColor})`,
  cursor: 'pointer',

  ...colorProps(props),
  ...hoverProps(props),

  ...props.styles,
})

function colorProps(props) {
  if (props.inverse) {
    switch (props.inverseStyle) {
      case 'transparent':
        return {
          backgroundColor: 'rgba(255,255,255,0)',
          color: `rgb(${props.baseColor})`,
        }
      case 'default':
      default:
        return {
          backgroundColor: `rgb(${props.textColor})`,
          color: `rgb(${props.baseColor})`,
        }
    }
  } else {
    return {
      backgroundColor: `rgb(${props.baseColor})`,
      color: `rgb(${props.textColor})`,
    }
  }
}

const rippleOut = keyframes({
  '100%': {
    top: -12,
    right: -12,
    bottom: -12,
    left: -12,
    opacity: 0,
  },
})

function hoverProps(props) {
  switch (props.hoverEffect) {
    case 'ripple':
      return {
        transformOrigin: 'center',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          border: '1px solid',
          borderRadius: 'inherit',
          borderColor: 'inherit',
          top: -1,
          right: -1,
          bottom: -1,
          left: -1,
        },
        '&:hover,&:focus': {
          textDecoration: 'none',
          color: `rgb(${props.textColor})`,
          backgroundColor: `rgb(${props.baseColor})`,
          '&::after': {
            animation: `${rippleOut} 0.5s`,
          },
        },
      }
    case 'default':
    default:
      return {
        '&:hover,&:focus': {
          textDecoration: 'none',
          backgroundColor: `rgb(${
            props.inverse
              ? props.baseColor
              : props.hoverBaseColor
                ? props.hoverBaseColor
                : props.inverse
          })`,
          borderColor: `rgb(${
            props.inverse
              ? props.baseColor
              : props.hoverBaseColor
                ? props.hoverBaseColor
                : props.inverse
          })`,
          color: `rgb(${props.textColor})`,
        },
      }
  }
}
