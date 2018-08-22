import React from 'react'
import ReactDOM from 'react-dom'
import { Spring, Trail, animated } from 'react-spring'
import PropTypes from 'prop-types'
//
import { Item } from './Item'
import { css } from 'emotion'

export class MegaMenu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    /** When true, if an item has a NO `url` and child `items` it will display an arrow next to the `title`.*/
    buttonWithArrow: PropTypes.bool,
    /** horizontal spacing between items (pixels) */
    xSpacing: PropTypes.number,
    /** vertical spacing between items (pixels) */
    ySpacing: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              .isRequired,
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
        ),
      }).isRequired,
    ).isRequired,
  }
  static defaultProps = {
    xSpacing: 15,
    ySpacing: 15,
    buttonWithArrow: true,
    style: {},
    className: '',
  }
  containerRef
  state = {
    subMenuStatuses: {},
  }
  constructor(props) {
    super(props)

    this.state = {
      subMenuStatuses: {
        ...this.props.items.reduce(
          (obj, item) => Object.assign(obj, { [item.id]: false }),
          {},
        ),
      },
    }

    this.containerRef = React.createRef()
  }
  componentDidMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('click', this.outsideClickListener)
    }
  }
  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', this.outsideClickListener)
    }
  }
  outsideClickListener = event => {
    if (
      !ReactDOM.findDOMNode(this.containerRef.current).contains(event.target)
    ) {
      this.toggleSubMenu('')
    }
  }
  toggleSubMenu = itemId => {
    this.setState(prevState => {
      const subMenuStatuses = {}

      for (let key in prevState.subMenuStatuses) {
        if (key != itemId) {
          subMenuStatuses[key] = false
        } else {
          subMenuStatuses[key] = !prevState.subMenuStatuses[key]
        }
      }

      return {
        ...prevState,
        subMenuStatuses,
      }
    })
  }
  render() {
    let { buttonWithArrow, style, className, items } = this.props
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} native>
        {styles => (
          <animated.nav
            ref={this.containerRef}
            style={{
              ...styles,
              ...style,
            }}
            className={
              css`
              display: flex,
              align-items: center;
              justify-content: center;
              position: relative;
              width: 100%;
              zIndex: 999;

              .lvl1-wrapper {
                display: flex;
                align-items: center;
                line-height: 1;

                > a, > button {
                  font-size: 16px;
                  padding: ${`${this.props.ySpacing}px ${
                    this.props.xSpacing
                  }px`};

                  &, &:hover, &:focus {
                    text-decoration: none;
                  }
                }

                a.item-has-children {
                  padding-right: 0;
                }
              }

              button {
                border: none;
                cursor: pointer;
                background: rgb(0,0,0,0);

                &.button-has-icon {
                  padding: 0;
                  display: flex;
                  align-items: center;

                  > span {
                    padding: ${`${this.props.xSpacing}px 0 ${
                      this.props.xSpacing
                    }px ${this.props.xSpacing}px`};
                  }

                  svg {
                    margin: ${this.props.xSpacing} + 'px';
                  }
                }

                &:focus { outline: none; }
              }

              .subitem {
                position: absolute;
                background-color: #fff;
                border: 1px solid #ccc;
                width: calc(100%- 60px);
                bottom: 0;
                transform: translateY(100%);
                left: 0;
                right: 0;
                margin: auto;
                padding ${this.props.ySpacing +
                  'px ' +
                  this.props.ySpacing * 2 +
                  'px 0'};
              }

              .subitem-inner {
                display: flex;
                flex-wrap: wrap;
              }

              .subitem-section {
                display: flex;
                flex-direction: column;
                padding: ${'0 ' +
                  this.props.xSpacing +
                  'px ' +
                  this.props.ySpacing +
                  'px'};
                text-align: left;

                ul {
                  padding: 0;
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                  font-size: 16px;

                  a {
                    &, &:hover, &:focus { text-decoration: none; }
                  }
                }
              }

              .section-title {
                font-size: 18px;
                margin-bottom: ${this.props.ySpacing};

                &, &:active, &:hover { text-decoration: none; }
              }
            ` +
              ' ' +
              className
            }
          >
            <Trail
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              keys={items.map(item => item.id)}
            >
              {items.map(item => styles => (
                <span
                  className={`lvl1-wrapper is-${
                    this.state.subMenuStatuses[item.id]
                      ? 'active'
                      : 'not-active'
                  }`}
                  style={styles}
                >
                  <Item
                    buttonWithArrow={buttonWithArrow}
                    item={item}
                    key={item.id}
                    toggleSubMenu={this.toggleSubMenu}
                    subMenuActive={this.state.subMenuStatuses[item.id]}
                  />
                </span>
              ))}
            </Trail>
          </animated.nav>
        )}
      </Spring>
    )
  }
}
