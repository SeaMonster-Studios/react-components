import React from 'react'
import PropTypes from 'prop-types'
import { Trail, animated } from 'react-spring'
//
import { Wrapper } from './style'
import { OneColumn } from './OneColumn'
import { TwoColumns } from './TwoColumns'
import { TwoColumnsImageGrid } from './TwoColumnsImageGrid'
import { TwoColumnsImageLeads } from './TwoColumnsImageLeads'
import { TwoColumnsStacked } from './TwoColumnsStacked'
import { TwoColumnsThreeColumnList } from './TwoColumnsThreeColumnList'
import { OneColumnVideo } from './OneColumnVideo'

const layoutTypes = [
  'one_column',
  'two_columns',
  'two_columns_image_leads',
  'two_columns_stacked',
  'two_columns_three_column_list',
  'two_columns_image_grid',
  'video',
]

export const layoutDefaultProps = {
  className: '',
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}

const FlexibleContentItem = ({ layout, layoutProps }) => {
  switch (layout) {
    case 'one_column':
      return <OneColumn {...layoutProps} />
    case 'two_columns':
      return <TwoColumns {...layoutProps} />
    case 'two_columns_image_leads':
      return <TwoColumnsImageLeads {...layoutProps} />
    case 'two_columns_stacked':
      return <TwoColumnsStacked {...layoutProps} />
    case 'two_columns_three_column_list':
      return <TwoColumnsThreeColumnList {...layoutProps} />
    case 'two_columns_image_grid':
      return <TwoColumnsImageGrid {...layoutProps} />
    case 'video':
      return <OneColumnVideo {...layoutProps} />
    default:
      return null
  }
}

FlexibleContentItem.propTypes = {
  layout: PropTypes.oneOf(layoutTypes).isRequired,
  content: PropTypes.object,
}

function getitemsProps(itemsProps, layout, animatedStyles) {
  const item = itemsProps.filter(item => item.item === layout)[0]

  // There are default props for each item. However, if the user only passes in one prop for that layout type (say a className for one_column) but doesn't pass in the others (say style) then the defaultProp will be completely overridden and style wiill be undefined.

  if (item) {
    if (item.className && item.style) {
      return {
        ...item,
        className: `${layout} ${item.className} `,
        style: {},
      }
    } else if (!item.style) {
      return {
        ...item,
        lassName: `${layout} ${item.className} `,
        style: animatedStyles,
      }
    } else if (!item.className) {
      return {
        ...item,
        className: layout,
        style: {
          ...item.style,
          ...animatedStyles,
        },
      }
    } else {
      return { ...item, animatedStyles }
    }
  }
  return { ...item, style: animatedStyles }
}

export function FlexibleContent({
  className,
  items,
  style,
  rowSpace,
  columnSpace,
  breakpoint,
  itemsProps,
}) {
  return (
    <Wrapper
      data-testid="component-wp-flexible-content"
      style={style}
      className={className}
    >
      <Trail
        from={{ opacity: 0, transform: 'scale(0.99)' }}
        to={{ opacity: 1, transform: 'scale(1)' }}
        keys={items.map(({ acf_fc_layout: layout }, i) => `${layout}-${i}`)}
      >
        {items.map(({ acf_fc_layout: layout, ...content }) => styles => (
          <animated.div data-testid="component-wp-flexible-content-item">
            <FlexibleContentItem
              {...{
                layout,
                layoutProps: {
                  ...content,
                  ...getitemsProps(itemsProps, layout, styles),
                  rowSpace,
                  columnSpace,
                  breakpoint,
                },
              }}
            />
          </animated.div>
        ))}
      </Trail>
    </Wrapper>
  )
}

FlexibleContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      acf_fc_layout: PropTypes.oneOf(layoutTypes).isRequired,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  rowSpace: PropTypes.number,
  columnSpace: PropTypes.number,
  breakpoint: PropTypes.number,
  itemsProps: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.oneOf(layoutTypes).isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
    }).isRequired,
  ),
}

FlexibleContent.defaultProps = {
  ...layoutDefaultProps,
  itemsProps: layoutTypes.map(type => ({
    item: type,
    className: '',
    style: {},
  })),
}
