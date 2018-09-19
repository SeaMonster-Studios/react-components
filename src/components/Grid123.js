import React from "react"
import PropTypes from "prop-types"
import { Grid123Wrapper } from "./FlexibleContent"
import { setHtml } from "../utils/index"
import { ImageFit } from "./ImageFit"

export const Grid123 = ({
  className,
  adminclass,
  style,
  columnSpace,
  rowSpace,
  breakpoint1,
  breakpoint2,
  items,
  type,
  ...props
}) => (
  <Grid123Wrapper
    {...{
      "data-testid": "component-grid123",
      className: `column-single ${className} ${adminclass}`,
      style,
      columnSpace,
      rowSpace,
      breakpoint1,
      breakpoint2,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="grid">
      {items.map((item, i) => {
        switch (type) {
          case "component":
            return (
              <div className="grid-item" key={i}>
                {item}
              </div>
            )
          case "cms-content":
            return (
              <div className="grid-item" key={i} {...setHtml(item.content)} />
            )
          case "cms-images":
            return (
              <figure className="grid-item grid-item-type-image" key={i}>
                <ImageFit src={item.url} alt={item.alt} />
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            )
          default:
            console.error(
              `A type of 'cms-content', 'cms-images', or 'component' must be provided. ${type} is not a valid type for Grid123.`,
            )
            return null
        }
      })}
    </div>
  </Grid123Wrapper>
)

Grid123.propTypes = {
  /** Vertical spacing base */
  rowSpace: PropTypes.number,
  /** Horizontal spacing base */
  columnSpace: PropTypes.number,
  /** At this breakpoint, columns go from 1 to 2 items */
  breakpoint1: PropTypes.number,
  /** At this breakpoint, columns go from 2 to 3 items */
  breakpoint2: PropTypes.number,
  className: PropTypes.string,
  /** Secondary className. With WP/ACF, comes from the admin when content is created  */
  adminclass: PropTypes.string,
  style: PropTypes.object,
  /** Array of grid items. Each item can be:
   * a react component (type === component),
   * an image object { url, alt, caption? } (type === cms-images),
   * or markup string (type === cms-content) */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        content: PropTypes.string.isRequired,
      }).isRequired,
      PropTypes.node.isRequired,
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        caption: PropTypes.string,
      }),
    ]),
  ).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(["cms-content", "cms-images", "component"]),
}

Grid123.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint1: 792,
  breakpoint2: 1200,
  type: "component",
}
