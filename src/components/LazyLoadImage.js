import React from "react"
import PropTypes from "prop-types"
import { LazyLoadImage as LibLazyLoadImage } from "react-lazy-load-image-component"

export const LazyLoadImage = (props) => {
  if (typeof document !== "undefined") {
    return <LibLazyLoadImage {...props} data-testid={'component-lazy-load-image'}/>
  } else {
    return <img {...props} />
  }
}

LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
}
