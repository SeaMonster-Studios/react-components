import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'

export const OneColumn = props => <span>item</span>

OneColumn.propTypes = {
  content: PropTypes.string.isRequired,
}
