import React from 'react'
import PropTypes from 'prop-types'
//
import { OneColumnVideoWrapper } from './style'
import { layoutDefaultProps } from './'

export const OneColumnVideo = ({
  columnSpace,
  rowSpace,
  breakpoint,
  className,
  style,
  ...props
}) => (
  <OneColumnVideoWrapper
    {...{
      'data-testid': 'component-one-column-video',
      columnSpace,
      className,
      style,
      breakpoint,
      rowSpace,
    }}
  >
    item
  </OneColumnVideoWrapper>
)

OneColumnVideo.propTypes = {
  columnSpace: PropTypes.number,
  rowSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
}

OneColumnVideo.defaultProps = layoutDefaultProps
