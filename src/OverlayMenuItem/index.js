// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { animated, Trail } from 'react-spring'
//
import { ArrowDown } from '../Icons/ArrowDown'

export class OverlayMenuItem extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }).isRequired,
    subMenuActive: PropTypes.bool.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    /** Function that receives the item's `id` and will toggle that item's sub menu */
    toggleSubMenu: PropTypes.func.isRequired,
  }
  static defaultProps = {
    style: {},
    className: '',
  }
  toggleSubMenu = () => this.props.toggleSubMenu(this.props.item.id)
  render() {
    const { style, className, item, subMenuActive } = this.props

    return (
      <animated.div style={style} className={`item-container ${className}`}>
        <div className="item-wrapper">
          {(!item.url || item.url === '#') && item.items.length > 0 ? (
            <button
              onClick={this.toggleSubMenu}
              className={`item  ${subMenuActive ? 'is-active' : ''}`}
            >
              {item.title}
            </button>
          ) : (
            <a
              href={item.url}
              className={`item ${subMenuActive ? 'is-active' : ''}`}
            >
              {item.title}
            </a>
          )}

          {item.items &&
            item.items.length > 0 && (
              <React.Fragment>
                <button
                  onClick={this.toggleSubMenu}
                  className={`icon-wrapper ${subMenuActive ? 'is-active' : ''}`}
                >
                  <ArrowDown />
                </button>

                {subMenuActive && (
                  <div className="subitems-container">
                    <Trail
                      keys={item.items.map(item => item.id)}
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                    >
                      {item.items.map(subItem => styles => (
                        <div style={styles} className="subitem-wrapper">
                          <a href={subItem.url} className="subitem">
                            {subItem.title}
                          </a>
                          <Trail
                            keys={item.items.map(item => item.id)}
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                          >
                            {subItem.items.map(subsubItem => styles => (
                              <div
                                style={styles}
                                className="subsubitem-wrapper"
                              >
                                <a href={subsubItem.url} className="subsubitem">
                                  {subsubItem.title}
                                </a>
                              </div>
                            ))}
                          </Trail>
                        </div>
                      ))}
                    </Trail>
                  </div>
                )}
              </React.Fragment>
            )}
        </div>
      </animated.div>
    )
  }
}
