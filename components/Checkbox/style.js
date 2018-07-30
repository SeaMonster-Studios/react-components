import styled, { css } from 'react-emotion'

export const Wrapper = styled('button')`
  width: ${props => props.size};
  height: ${props => props.size};
  border: 2px solid #000;
  cursor: pointer;
  transition: all 0.5s ease;

  input: {
    opacity: 0;
    cursor: pointer;
  }

  &:focus: {
    outline: none;
  }

  ${props => props.styles} ${props => setActiveStyles(props)};
`

function setActiveStyles(props) {
  return props.active
    ? css`
        background-color: #000;
        ${props.activeStyles};
      `
    : ``
}
