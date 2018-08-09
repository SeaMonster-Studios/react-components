import React from 'react'
import ReactDOM from 'react-dom'
import { Spring, animated, Trail } from 'react-spring'
import PropTypes from 'prop-types'
//
import { Wrapper } from './style'
import { Item } from './Item'

const AnimatedWrapper = animated(Wrapper)

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
          <AnimatedWrapper
            ref={this.containerRef}
            style={{
              ...styles,
              ...style,
            }}
            className={className}
            xSpacing={this.props.xSpacing}
            ySpacing={this.props.ySpacing}
          >
            <Trail
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              keys={items.map(item => item.id)}
            >
              {items.map(item => styles => (
                <span className="lvl1-wrapper" style={styles}>
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
          </AnimatedWrapper>
        )}
      </Spring>
    )
  }
}
