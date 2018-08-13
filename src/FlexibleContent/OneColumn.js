import React from 'react'
import PropTypes from 'prop-types'
//
import { layoutDefaultProps } from './'
import { Wrapper } from './style'
import { setHtml } from '../../utils'

export const OneColumn = ({
  className,
  adminclass,
  style,
  columnSpace,
  rowSpace,
  breakpoint,
  ...props
}) => (
  <Wrapper
    {...{
      'data-testid': 'component-one-column',
      className: `column-single ${className} ${adminclass}`,
      style,
      columnSpace,
      breakpoint,
      rowSpace,
    }}
  >
    <div {...setHtml(props.content)} />
  </Wrapper>
)

OneColumn.propTypes = {
  columnSpace: PropTypes.number,
  rowSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  adminclass: PropTypes.string,
  style: PropTypes.object,
  content: PropTypes.string.isRequired,
}

OneColumn.defaultProps = layoutDefaultProps
