import React from 'react'
import PropTypes from 'prop-types'
import objectFitImages from 'object-fit-images'
//
import { Wrapper } from './style'

export class ImageFit extends React.Component {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    fit: PropTypes.oneOf(['cover', 'contain', 'fill', 'scale-down', 'none']),
    position: PropTypes.string,
    styles: PropTypes.string,
  }
  imgRef
  componentDidMount() {
    objectFitImages(this.imgRef)
  }
  render() {
    const { styles, fit, position, ...attrs } = this.props
    return (
      <Wrapper
        data-testid="component-image-fit"
        {...attrs}
        innerRef={ref => (this.imgRef = ref)}
        options={{ styles: styles || '', fit, position: position || 'center' }}
      />
    )
  }
}
