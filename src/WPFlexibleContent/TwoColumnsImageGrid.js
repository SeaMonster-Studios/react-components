import React from 'react'
import PropTypes from 'prop-types'
//
import { setHtml } from '../../utils'
import { LazyLoadImage } from '../LazyLoadImage'
import { TwoColumnsImageGridWrapper } from './style'

export const TwoColumnsImageGrid = ({ columnSpace, breakpoint, ...props }) => (
  <TwoColumnsImageGridWrapper
    {...{
      columnSpace,
      breakpoint,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row">
      <div className="column column-one-content">
        {console.log(props.content)}
        <div {...setHtml(props.content)} />
      </div>
      <div className="column column-two-grid">
        {props.images.map((image, i) => (
          <div key={image.url + i} className="img-wrapper">
            <LazyLoadImage src={image.url} alt={image.alt} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  </TwoColumnsImageGridWrapper>
)

TwoColumnsImageGrid.propTypes = {
  columnSpace: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  image_grid_position: PropTypes.oneOf(['right', 'left']),
}
