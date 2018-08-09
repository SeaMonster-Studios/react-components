import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'
//
import { TwoColumnsImageGridWrapper } from './style'

export const TwoColumnsImageGrid = ({ columnSpace, breakpoint, ...props }) => (
  <TwoColumnsImageGridWrapper
    {...{
      columnSpace,
      breakpoint,
    }}
  >
    <div className="row">
      <div className="column column-one-content">
        {props.title && (
          <h2
            className={`title ${props.subtitle ? 'has-subtitle' : ''}`}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.title) }}
          />
        )}
        {props.title &&
          props.subtitle && (
            <h3
              className="subtitle"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.subtitle) }}
            />
          )}
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.content) }}
        />
      </div>
      <div className="column column-two-grid">
        {props.images.map((image, i) => (
          <div key={image.url + i} className="img-wrapper">
            <img src={image.url} alt={image.alt} />
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
