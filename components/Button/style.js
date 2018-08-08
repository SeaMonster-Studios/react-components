import styled, { keyframes, css } from 'react-emotion'

export const Wrapper = styled('button')`
  text-decoration: none;
  border-color: ${props => props.borderColor};
  cursor: pointer;

  ${props => colorProps(props)};
  ${props => hoverProps(props)};
  ${props => props.styles};
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
  switch (props.hoverStyle) {
    case 'ripple':
      return css`
        transform-origin: center;
        position: relative;
        border-color: ${props.hoverBorderColor};

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
          color: ${props.inverse ? props.hoverBaseColor : props.hoverTextColor};
          background-color: ${props.inverse
            ? props.hoverTextColor
            : props.hoverBaseColor};

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
          color: ${props.inverse ? props.hoverBaseColor : props.hoverTextColor};
          background-color: ${props.inverse
            ? props.hoverTextColor
            : props.hoverBaseColor};

          border-color: ${props.hoverBorderColor};
        }
      `
  }
}
