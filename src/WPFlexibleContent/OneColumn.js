import React from 'react'
import PropTypes from 'prop-types'
//
import { setHtml } from '../../utils'

export const OneColumn = ({ ...props }) => (
  <div className="single-column">
    <div {...setHtml(props.content)} />
  </div>
)

OneColumn.propTypes = {
  content: PropTypes.string.isRequired,
}
