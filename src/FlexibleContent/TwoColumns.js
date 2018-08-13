import React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './style'
import { setHtml } from '../../utils'
import { layoutDefaultProps } from './'

export const TwoColumns = ({
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
      'data-testid': 'component-two-columns',
      columnSpace,
      breakpoint,
      className: `${className} ${adminclass}`,
      style,
      rowSpace,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row">
      <div
        className="column column-half column-one-content"
        {...setHtml(props.one_content)}
      />
      <div
        className="column column-half column-two-content"
        {...setHtml(props.two_content)}
      />
    </div>
  </Wrapper>
)

TwoColumns.propTypes = {
  columnSpace: PropTypes.number,
  rowSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  adminclass: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  one_content: PropTypes.string.isRequired,
  two_content: PropTypes.string.isRequired,
}

TwoColumns.defaultProps = layoutDefaultProps
