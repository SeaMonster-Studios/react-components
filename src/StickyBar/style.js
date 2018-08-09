import styled, { injectGlobal, css } from 'react-emotion'

injectGlobal(`
  body {
    position: relative;
  }
`)

export const Wrapper = styled('div')`
  position: relative;
  width: 100%;

  ${props => scrollingProps(props)};
  ${props => props.styles};
`

function scrollingProps(props) {
  const common = css`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
  `

  switch (props.position) {
    case 'hidden':
      return css`
        ${common};
        transform: translateY(-${props.selfHeight}px);

        ${props.hiddenClassName};
      `
    case 'ready':
      return css`
        ${common};
        transition: transform 0.5s ease;
        transform: translateY(-${props.selfHeight}px);

        ${props.readyClassName};
      `
    case 'active': {
      return css`
        ${common};
        transition: transform 0.5s ease;
        ${props.activeClassName};
      `
    }
    default:
      return ''
  }
}
