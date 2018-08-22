import React from 'react'
import { Spring, animated } from 'react-spring'
import PropTypes from 'prop-types'
//
import { setHtml } from '../../utils'

export const SubItemsList = ({ items }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} native>
      {styles => (
        <animated.div style={styles} className="subitem">
          <div className="subitem-inner">
            {items.map(item => (
              <SubItem item={item} key={item.id} />
            ))}
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

SubItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }).isRequired,
  ).isRequired,
}

const SubItem = ({ item }) => {
  const { title, url, items } = item
  if (url && items && items.length) {
    return (
      <div className="subitem-section link-and-items">
        <a href={url} className="section-title">
          {title}
        </a>
        <ul>
          {items.map(subItem => (
            <li key={subItem.id}>
              <a href={subItem.url} {...setHtml(subItem.title)} />
            </li>
          ))}
        </ul>
      </div>
    )
  } else if (!url && items && items.length) {
    return (
      <div className="subitem-section items-only">
        <span className="section-title">{title}</span>
        <ul>
          {items.map(subItem => (
            <li key={subItem.id}>
              <a href={subItem.url} {...setHtml(subItem.title)} />
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="subitem-section link-only">
        <a href={url} className="section-title" {...setHtml(title)} />
      </div>
    )
  }
}

SubItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
}
