import React from 'react'
import PropTypes from 'prop-types'
//
import { setHtml } from '../../utils'
import { TwoColumnsThreeColumnListWrapper } from './style'
import { layoutDefaultProps } from './'

export const TwoColumnsThreeColumnList = ({
  columnSpace,
  rowSpace,
  breakpoint,
  className,
  style,
  ...props
}) => {
  return (
    <TwoColumnsThreeColumnListWrapper
      {...{
        'data-testid': 'component-two-columns-three-column-list',
        className,
        style,
        columnSpace,
        breakpoint,
        rowSpace,
      }}
    >
      {props.title && <h2 className="title" {...setHtml(props.title)} />}
      {props.title &&
        props.subtitle && (
          <h3 className="subtitle" {...setHtml(props.subtitle)} />
        )}
      <div className="row">
        <div className="column column-half column-one-content">
          <div {...setHtml(props.column_one)} />
        </div>
        <div className="column column-half column-two-content">
          <div {...setHtml(props.column_one)} />
        </div>
      </div>
      <div className="row">
        {props.column_list.map((item, i) => (
          <div
            key={`column-list=item-${i}`}
            className="column column-third column-list-item"
            {...setHtml(item.content)}
          />
        ))}
      </div>
    </TwoColumnsThreeColumnListWrapper>
  )
}

TwoColumnsThreeColumnList.propTypes = {
  columnSpace: PropTypes.number.isRequired,
  rowSpace: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  column_one: PropTypes.string.isRequired,
  column_two: PropTypes.string.isRequired,
  column_list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

TwoColumnsThreeColumnList.defaultProps = layoutDefaultProps
