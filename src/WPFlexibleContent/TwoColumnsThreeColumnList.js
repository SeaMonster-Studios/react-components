import React from 'react'
import PropTypes from 'prop-types'

export const TwoColumnsThreeColumnList = props => <span>item</span>

TwoColumnsThreeColumnList.propTypes = {
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
