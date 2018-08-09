import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'
//
import { TwoColumnsImageLeadsWrapper } from './style'
import { ImageFit } from '../ImageFit'

export const TwoColumnsImageLeads = ({
  columnSpace,
  rowSpace,
  breakpoint,
  ...props
}) => {
  return (
    <TwoColumnsImageLeadsWrapper
      {...{
        columnSpace,
        breakpoint,
        rowSpace,
        minHeight: props.one_image.height + 'px',
      }}
    >
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
        <div className="column column-one-content">
          <div className="img-wrapper">
            <ImageFit src={props.one_image.url} alt={props.one_image.alt} />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(props.one_content),
            }}
          />
        </div>
        <div className="column column-one-content">
          <div className="img-wrapper">
            <ImageFit src={props.two_image.url} alt={props.two_image.alt} />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(props.two_content),
            }}
          />
        </div>
      </div>
    </TwoColumnsImageLeadsWrapper>
  )
}

TwoColumnsImageLeads.propTypes = {
  columnSpace: PropTypes.number.isRequired,
  rowSpace: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  one_content: PropTypes.string.isRequired,
  one_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  two_content: PropTypes.string.isRequired,
  two_image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}