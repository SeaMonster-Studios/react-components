import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./FlexibleContent"
import { setHtml } from "../utils/index"
import { LazyLoadImage } from "./LazyLoadImage"

export const TwoColumnsStacked = ({
  className,
  style,
  columnSpace,
  adminclass,
  breakpoint,
  rowSpace,
  one_content,
  two_content,
  ...props
}) => (
  <Wrapper
    {...{
      "data-testid": "component-two-columns-stacked",
      columnSpace,
      className: `${className} ${adminclass}`,
      style,
      breakpoint,
      rowSpace,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row bp-align-center row-stacked">
      <div className="column column-half ">
        <LazyLoadImage
          className="column-image"
          src={props.one_image.url}
          alt={props.one_image.alt}
        />
      </div>
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
    </div>
    <div className="row bp-align-center">
      <div className="column column-half order-bp-2">
        <LazyLoadImage
          className="column-image"
          src={props.two_image.url}
          alt={props.two_image.alt}
        />
      </div>
      {typeof one_content === "string" ? (
        <div
          className="column column-half column-two-content order-bp-1"
          {...setHtml(two_content)}
        />
      ) : (
        <div className="column column-half column-two-content order-bp-1">
          {two_content()}
        </div>
      )}
    </div>
  </Wrapper>
)

TwoColumnsStacked.propTypes = {
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
  one_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  two_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

TwoColumnsStacked.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}
