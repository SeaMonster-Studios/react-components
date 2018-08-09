import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'

export const TwoColumnsImageLeads = props => <span>item</span>

TwoColumnsImageLeads.propTypes = {
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
