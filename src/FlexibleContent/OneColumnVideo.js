import React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './style'
import { layoutDefaultProps } from './'
import { Video } from '../Video'

export const OneColumnVideo = ({
  columnSpace,
  rowSpace,
  breakpoint,
  className,
  style,
  videoProps,
  ...props
}) => (
  <Wrapper
    {...{
      'data-testid': 'component-one-column-video',
      columnSpace,
      className,
      style,
      breakpoint,
      rowSpace,
    }}
  >
    <Video {...props} {...videoProps} />
  </Wrapper>
)

OneColumnVideo.propTypes = {
  columnSpace: PropTypes.number,
  rowSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  video: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string,
  videoProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object,
  }),
}

OneColumnVideo.defaultProps = {
  ...layoutDefaultProps,
  videoProps: {
    className: '',
    style: {
      maxWidth: '720px',
      margin: '0 auto',
    },
  },
}
