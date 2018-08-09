import React from 'react'
import PropTypes from 'prop-types'
import { Trail, animated } from 'react-spring'
//
import { OneColumn } from './OneColumn'
import { TwoColumns } from './TwoColumns'
import { TwoColumnsImageGrid } from './TwoColumnsImageGrid'
import { TwoColumnsImageLeads } from './TwoColumnsImageLeads'
import { TwoColumnsStacked } from './TwoColumnsStacked'
import { TwoColumnsThreeColumnList } from './TwoColumnsThreeColumnList'
import { Video } from './Video'

const FlexibleContentItem = ({ layout, content }) => {
  switch (layout) {
    case 'one_column':
      return <OneColumn {...content} />
    case 'two_columns':
      return <TwoColumns {...content} />
    case 'two_columns_image_leads':
      return <TwoColumnsImageLeads {...content} />
    case 'two_columns_stacked':
      return <TwoColumnsStacked {...content} />
    case 'two_columns_three_column_list':
      return <TwoColumnsThreeColumnList {...content} />
    case 'two_columns_image_grid':
      return <TwoColumnsImageGrid {...content} />
    case 'video':
      return <Video {...content} />
    default:
      return null
  }
}

FlexibleContentItem.propTypes = {
  layout: PropTypes.oneOf([
    'one_column',
    'two_columns',
    'two_columns_image_leads',
    'two_columns_stacked',
    'two_columns_three_column_list',
    'two_columns_image_grid',
    'video',
  ]).isRequired,
  content: PropTypes.object,
}

export const WPFlexibleContent = ({ className, items, style }) => (
  <div
    data-testid="component-wp-flexible-content"
    style={style}
    className={className}
  >
    <Trail
      from={{ opacity: 0, transform: 'scale(0.99)' }}
      to={{ opacity: 1, transform: 'scale(1)' }}
      keys={items.map(item => item.key)}
    >
      {items.map(({ acf_fc_layout: layout, ...content }, i) => styles => (
        <animated.section
          style={styles}
          key={`${layout}-${i}`}
          data-testid="component-wp-flexible-content-item"
        >
          <FlexibleContentItem {...{ layout, content }} />
        </animated.section>
      ))}
    </Trail>
  </div>
)

WPFlexibleContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      acf_fc_layout: PropTypes.oneOf([
        'one_column',
        'two_columns',
        'two_columns_image_leads',
        'two_columns_stacked',
        'two_columns_three_column_list',
        'two_columns_image_grid',
        'video',
      ]).isRequired,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

WPFlexibleContent.defaultProps = {
  className: '',
  style: {},
}
