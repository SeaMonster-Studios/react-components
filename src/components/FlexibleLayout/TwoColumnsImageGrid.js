import React from "react"
import PropTypes from "prop-types"
import { setHtml } from "../../utils/index"
import { LazyLoadImage } from "../LazyLoadImage"
import { Wrapper } from "./"

export const TwoColumnsImageGrid = ({
  rowSpace,
  columnSpace,
  breakpoint,
  className,
  adminclass,
  style,
  ...props
}) => (
  <Wrapper
    {...{
      "data-testid": "component-two-columns-image-grid",
      rowSpace,
      columnSpace,
      breakpoint,

      className: `${className} ${adminclass}`,
      style,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row bp-align-center">
      {typeof props.content === "string" ? (
        <div
          className="column column-half column-content"
          {...setHtml(props.content)}
        />
      ) : (
        <div className="column column-half column-content">
          {props.content()}
        </div>
      )}
      <div className="column column-half column-grid">
        {props.images.map((image, i) => {
          return props.renderImage ? (
            <div key={image.url + i} className="img-wrapper">
              {props.renderImage(image)}
            </div>
          ) : (
            <div key={image.url + i} className="img-wrapper">
              <LazyLoadImage src={image.url} alt={image.alt} />
              <div className="caption">{image.caption}</div>
            </div>
          )
        })}
      </div>
    </div>
  </Wrapper>
)

TwoColumnsImageGrid.propTypes = {
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
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  /** Custom render prop for each image in the grid (passes image object) */
  renderImage: PropTypes.func,
  image_grid_position: PropTypes.oneOf(["right", "left"]),
}

TwoColumnsImageGrid.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}
