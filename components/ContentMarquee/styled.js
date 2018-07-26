import styled from 'react-emotion'

export const Wrapper = styled('div')`
  ${({ gradient, image, styles }) =>
    `
    background: ${gradient}, url(${image});
    background-size: cover;
    background-position: center center;

    ` + styles};
`
