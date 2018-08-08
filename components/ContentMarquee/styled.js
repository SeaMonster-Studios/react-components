// @flow
import styled, { css } from 'react-emotion'

export const Wrapper = styled('div')`
  ${({ gradient, image, styles }) =>
    css`
      background: ${gradient}, url(${image});
      background-size: cover;
      background-position: center center;

      ${styles};
    `};
`
