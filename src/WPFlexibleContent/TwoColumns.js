import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'

export const TwoColumns = props => <span>item</span>

TwoColumns.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  one_content: PropTypes.string.isRequired,
  two_content: PropTypes.string.isRequired,
}
