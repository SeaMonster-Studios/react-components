import React from 'react'
import PropTypes from 'prop-types'
//
import { setHtml } from '../../utils'
import { LazyLoadImage } from '../LazyLoadImage'
import { TwoColumnsImageGridWrapper } from './style'
import { layoutDefaultProps } from './'

export const TwoColumnsImageGrid = ({
  rowSpace,
  columnSpace,
  breakpoint,
  className,
  style,
  ...props
}) => (
  <TwoColumnsImageGridWrapper
    {...{
      'data-testid': 'component-two-columns-image-grid',
      rowSpace,
      columnSpace,
      breakpoint,
      className,
      style,
    }}
  >
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row">
      <div className="column column-half column-one-content">
        <div {...setHtml(props.content)} />
      </div>
      <div className="column column-half column-two-grid">
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
  columnSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  rowSpace: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
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

TwoColumnsImageGrid.defaultProps = layoutDefaultProps
