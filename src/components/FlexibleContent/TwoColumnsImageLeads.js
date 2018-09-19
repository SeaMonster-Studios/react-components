import React from "react"
import PropTypes from "prop-types"
import { setHtml } from "../../../utils/index"
import { Wrapper } from "./FlexibleContent"
import { ImageFit } from "../ImageFit"

export const TwoColumnsImageLeads = ({
  columnSpace,
  className,
  adminclass,
  style,
  rowSpace,
  breakpoint,
  one_content,
  two_content,
  ...props
}) => {
  return (
    <Wrapper
      {...{
        "data-testid": "component-two-columns-image-leads",
        columnSpace,
        className: `${className} ${adminclass}`,
        style,
        breakpoint,
        rowSpace,
        minHeight: props.one_image.height + "px",
      }}
    >
      {props.title && <h2 className="title" {...setHtml(props.title)} />}
      {props.title &&
        props.subtitle && (
          <h3 className="subtitle" {...setHtml(props.subtitle)} />
        )}
      <div className="row">
        <div className="column column-half column-one-content">
          <ImageFit
            className="alignnone column-image column-lead"
            src={props.one_image.url}
            alt={props.one_image.alt}
          />

          {typeof one_content === "string" ? (
            <div {...setHtml(one_content)} />
          ) : (
            <div>{one_content()}</div>
          )}
        </div>
        <div className="column column-half column-one-content">
          <ImageFit
            className="alignnone column-image column-lead"
            src={props.two_image.url}
            alt={props.two_image.alt}
          />
          {typeof two_content === "string" ? (
            <div {...setHtml(two_content)} />
          ) : (
            <div>{two_content()}</div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

TwoColumnsImageLeads.propTypes = {
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
    height: PropTypes.number.isRequired,
  }).isRequired,
  two_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

TwoColumnsImageLeads.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}
