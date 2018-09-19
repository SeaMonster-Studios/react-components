import * as React from "react"
import PropTypes from "prop-types"
import styled, { css } from "react-emotion"

export const Wrapper = styled("div")`
  ${({ gradient, image, styles }) =>
  css`
      background: ${gradient}, url(${image});
      background-size: cover;
      background-position: center center;

      ${styles};
    `};
`


export function Marquee({ children, ...props }) {
  return (
    <Wrapper {...props} data-testid="component-content-marquee">
      {children}
    </Wrapper>
  )
}

Marquee.propTypes = {
  image: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

Marquee.defaultProps = {
  gradient: "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))",
  style: {
    minHeight: "510px",
    padding: "45px 0",
  },
}
