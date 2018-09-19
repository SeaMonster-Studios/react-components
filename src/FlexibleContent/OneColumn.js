import React from "react"
import PropTypes from "prop-types"
//
import { Wrapper } from "./style"
import { setHtml } from "../../utils"

export const OneColumn = ({
  className,
  adminclass,
  style,
  columnSpace,
  rowSpace,
  breakpoint,
  content,
}) => (
  <Wrapper
    {...{
      "data-testid": "component-one-column",
      className: `column-single ${className} ${adminclass}`,
      style,
      columnSpace,
      breakpoint,
      rowSpace,
    }}
  >
    {typeof content === "string" ? (
      <div {...setHtml(content)} />
    ) : (
      <div>{content()}</div>
    )}
  </Wrapper>
)

OneColumn.propTypes = {
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
  /** HTML string (typically from a CMS), or a render prop */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
}

OneColumn.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}
