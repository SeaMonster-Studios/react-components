import React from "react"
import PropTypes from "prop-types"
import objectFitImages from "object-fit-images"
//
import { Wrapper } from "./style"

export class ImageFit extends React.Component {
  static propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
    fit: PropTypes.oneOf(["cover", "contain", "fill", "scale-down", "none"]),
    position: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  }
  static defaultProps = {
    position: "center",
    fit: "cover",
    className: "",
    alt: "",
    style: {},
  }
  imgRef
  componentDidMount() {
    objectFitImages(this.imgRef)
  }
  render() {
    const { style, fit, position, className, src, alt } = this.props
    return (
      <Wrapper
        src={src}
        alt={alt}
        data-testid="component-image-fit"
        style={style}
        className={className}
        innerRef={(ref) => (this.imgRef = ref)}
        fit={fit}
        position={position}
      />
    )
  }
}
