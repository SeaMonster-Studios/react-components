import React from 'react'
import PropTypes from 'prop-types'
//
import { TwoColumnsWrapper } from './style'
import { setHtml } from '../../utils'

export const TwoColumns = props => (
  <TwoColumnsWrapper>
    {props.title && <h2 className="title" {...setHtml(props.title)} />}
    {props.title &&
      props.subtitle && (
        <h3 className="subtitle" {...setHtml(props.subtitle)} />
      )}
    <div className="row">
      <div
        className="column column-one-content"
        {...setHtml(props.one_content)}
      />
      <div
        className="column column-two-content"
        {...setHtml(props.two_content)}
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
