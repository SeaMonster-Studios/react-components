import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'
//
import { TwoColumnsWrapper } from './style'

export const TwoColumns = props => (
  <TwoColumnsWrapper>
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
    <div className="row">
      <div
        className="column column-one-content"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.one_content) }}
      />
      <div
        className="column column-two-content"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.two_content) }}
      />
    </div>
  </TwoColumnsWrapper>
)

TwoColumns.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  one_content: PropTypes.string.isRequired,
  two_content: PropTypes.string.isRequired,
}
