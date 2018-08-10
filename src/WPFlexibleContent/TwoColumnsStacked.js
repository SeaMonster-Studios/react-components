import React from 'react'
import PropTypes from 'prop-types'
//
import { TwoColumnsStackedWrapper } from './style'
import { setHtml } from '../../utils'
import { LazyLoadImage } from '../LazyLoadImage'

export const TwoColumnsStacked = ({
  columnSpace,
  breakpoint,
  rowSpace,
  ...props
}) => (
  <TwoColumnsStackedWrapper {...{ columnSpace, breakpoint, rowSpace }}>
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row">
      <div className="column column-one-image">
        <LazyLoadImage src={props.one_image.url} alt={props.one_image.alt} />
      </div>
      <div
        className="column column-one-content"
        {...setHtml(props.one_content)}
      />
    </div>
    <div className="row">
      <div className="column column-two-image">
        <LazyLoadImage src={props.two_image.url} alt={props.two_image.alt} />
      </div>
      <div
        className="column column-two-content"
        {...setHtml(props.two_content)}
      />
    </div>
  </TwoColumnsStackedWrapper>
)

TwoColumnsStacked.propTypes = {
  columnSpace: PropTypes.number.isRequired,
  rowSpace: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
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
