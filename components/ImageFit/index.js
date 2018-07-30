// @flow
import React from 'react'
import objectFitImages from 'object-fit-images'
//
import { Wrapper } from './style'

export class ImageFit extends React.Component<{
  alt: string,
  src: string,
  fit: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none',
  position?: string,
  styles?: string, // emotion css string
}> {
  imgRef: ?HTMLImageElement
  componentDidMount() {
    objectFitImages(this.imgRef)
  }
  render() {
    const { styles, fit, position, ...attrs } = this.props
    return (
      <Wrapper
        data-testid="component-image-fit"
        {...attrs}
        innerRef={(ref: ?HTMLImageElement) => (this.imgRef = ref)}
        options={{ styles: styles || '', fit, position: position || 'center' }}
      />
    )
  }
}