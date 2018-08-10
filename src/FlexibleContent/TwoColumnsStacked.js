import React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './style'
import { setHtml } from '../../utils'
import { LazyLoadImage } from '../LazyLoadImage'
import { layoutDefaultProps } from '.'

export const TwoColumnsStacked = ({
  className,
  style,
  columnSpace,
  breakpoint,
  rowSpace,
  ...props
}) => (
  <Wrapper
    {...{
      'data-testid': 'component-two-columns-stacked',
      columnSpace,
      className,
      style,
      breakpoint,
      rowSpace,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row bp-align-center row-stacked">
      <div className="column column-half ">
        <LazyLoadImage
          className="column-image"
          src={props.one_image.url}
          alt={props.one_image.alt}
        />
      </div>
      <div
        className="column column-half column-one-content"
        {...setHtml(props.one_content)}
      />
    </div>
    <div className="row bp-align-center">
      <div className="column column-half order-bp-2">
        <LazyLoadImage
          className="column-image"
          src={props.two_image.url}
          alt={props.two_image.alt}
        />
      </div>
      <div
        className="column column-half column-two-content order-bp-1"
        {...setHtml(props.two_content)}
      />
    </div>
  </Wrapper>
)

TwoColumnsStacked.propTypes = {
  columnSpace: PropTypes.number.isRequired,
  rowSpace: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  one_content: PropTypes.string.isRequired,
  one_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  two_content: PropTypes.string.isRequired,
  two_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

TwoColumnsStacked.defaultProps = layoutDefaultProps
