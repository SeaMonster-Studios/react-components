import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'

export const TwoColumnsImageGrid = props => <span>item</span>

TwoColumnsImageGrid.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  image_grid_position: PropTypes.oneOf(['right', 'left']),
}
