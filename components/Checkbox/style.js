import styled, { css } from 'react-emotion'

const borderWidth = 2

export const Wrapper = styled('button')`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${borderWidth}px solid #000;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .input-wrapper {
    min-width: ${props => props.size}px;
    min-height: ${props => props.size}px;
    margin-top: -${borderWidth * 2}px;
    overflow: hidden;
    position: relative;
    padding: 0;
  }

  input {
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(100);
    cursor: pointer;
    position: absolute;
    z-index: 2;
  }

  &:focus {
    outline: none;
  }

  .mark {
    position: absolute;
    z-index: 1;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      position: absolute;
    }
  }

  ${props => props.styles} ${props => setActiveStyles(props)};
`

function setActiveStyles(props) {
  if (props.isChecked && !props.hasOnIcon) {
    return css`
      background-color: #000;

      ${props.activeStyles};
    `
  } else if (props.isChecked) {
    return props.activeStyles
  } else {
    return ''
  }
}
