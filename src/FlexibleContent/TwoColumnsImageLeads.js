import React from 'react'
import PropTypes from 'prop-types'
//
import { setHtml } from '../../utils'
import { TwoColumnsImageLeadsWrapper } from './style'
import { ImageFit } from '../ImageFit'
import { layoutDefaultProps } from './'

export const TwoColumnsImageLeads = ({
  columnSpace,
  className,
  style,
  rowSpace,
  breakpoint,
  ...props
}) => {
  return (
    <TwoColumnsImageLeadsWrapper
      {...{
        'data-testid': 'component-two-columns-image-leads',
        columnSpace,
        className,
        style,
        breakpoint,
        rowSpace,
        minHeight: props.one_image.height + 'px',
      }}
    >
      {props.title && <h2 className="title" {...setHtml(props.title)} />}
      {props.title &&
        props.subtitle && (
          <h3 className="subtitle" {...setHtml(props.subtitle)} />
        )}
      <div className="row">
        <div className="column column-half column-one-content">
          <ImageFit
            className="alignnone column-image column-lead"
            src={props.one_image.url}
            alt={props.one_image.alt}
          />
          <div {...setHtml(props.one_content)} />
        </div>
        <div className="column column-half column-one-content">
          <ImageFit
            className="alignnone column-image column-lead"
            src={props.two_image.url}
            alt={props.two_image.alt}
          />
          <div {...setHtml(props.two_content)} />
        </div>
      </div>
    </TwoColumnsImageLeadsWrapper>
  )
}

TwoColumnsImageLeads.propTypes = {
  columnSpace: PropTypes.number.isRequired,
  rowSpace: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
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

TwoColumnsImageLeads.defaultProps = layoutDefaultProps
