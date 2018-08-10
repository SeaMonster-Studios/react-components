import React from 'react'
import PropTypes from 'prop-types'
//
import { layoutDefaultProps } from './'
import { OneColumnWrapper } from './style'
import { setHtml } from '../../utils'

export const OneColumn = ({
  className,
  style,
  columnSpace,
  rowSpace,
  breakpoint,
  ...props
}) => (
  <OneColumnWrapper
    {...{
      'data-testid': 'component-one-column',
      className,
      style,
      columnSpace,
      breakpoint,
      rowSpace,
    }}
    className="column-single"
  >
    <div {...setHtml(props.content)} />
  </OneColumnWrapper>
)

OneColumn.propTypes = {
  columnSpace: PropTypes.number,
  rowSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  content: PropTypes.string.isRequired,
}

OneColumn.defaultProps = layoutDefaultProps
