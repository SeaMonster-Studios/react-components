import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./FlexibleContent"
import { Video } from "../Video/index"

export const OneColumnVideo = ({
  columnSpace,
  rowSpace,
  breakpoint,
  className,
  adminclass,
  style,
  videoProps,
  ...props
}) => (
  <Wrapper
    {...{
      "data-testid": "component-one-column-video",
      className: `${className} ${adminclass}`,
      columnSpace,
      style,
      breakpoint,
      rowSpace,
    }}
  >
    <Video {...props} {...videoProps} />
  </Wrapper>
)

OneColumnVideo.propTypes = {
  /** Vertical spacing base */
  rowSpace: PropTypes.number,
  /** Horizontal spacing base */
  columnSpace: PropTypes.number,
  /** Mobile first breakpoint */
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  /** Secondary className. With WP/ACF, comes from the admin when content is created  */
  adminclass: PropTypes.string,
  style: PropTypes.object,
  video: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string,
  videoProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object,
  }),
}

OneColumnVideo.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
  videoProps: {
    className: "",
    style: {
      maxWidth: "720px",
      margin: "0 auto",
    },
  },
}
