import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./FlexibleContent"
import { setHtml } from "../utils/index"

export const TwoColumns = ({
  className,
  adminclass,
  style,
  columnSpace,
  rowSpace,
  breakpoint,
  one_content,
  two_content,
  ...props
}) => {
  return (
    <Wrapper
      {...{
        "data-testid": "component-two-columns",
        columnSpace,
        breakpoint,
        className: `${className} ${adminclass}`,
        style,
        rowSpace,
      }}
    >
      {props.title && <h2 className="title" {...setHtml(props.title)} />}
      {props.title &&
        props.subtitle && (
          <h3 className="subtitle" {...setHtml(props.subtitle)} />
        )}
      <div className="row">
        {typeof one_content === "string" ? (
          <div
            className="column column-half column-one-content"
            {...setHtml(one_content)}
          />
        ) : (
          <div className="column column-half column-one-content">
            {one_content()}
          </div>
        )}

        {typeof two_content === "string" ? (
          <div
            className="column column-half column-two-content"
            {...setHtml(two_content)}
          />
        ) : (
          <div className="column column-half column-two-content">
            {two_content()}
          </div>
        )}
      </div>
    </Wrapper>
  )
}

TwoColumns.propTypes = {
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  /** HTML string (typically from a CMS), or a render prop */
  one_content: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  /** HTML string (typically from a CMS), or a render prop */
  two_content: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
}

TwoColumns.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}
