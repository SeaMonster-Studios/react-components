import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'

export const OneColumn = ({ ...props }) => (
  <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.content) }} />
)

OneColumn.propTypes = {
  content: PropTypes.string.isRequired,
}
