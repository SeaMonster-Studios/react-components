// @flow
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Spring, animated, Trail } from 'react-spring'
//
import { defaultClassName } from './style'

export class OverlayMenu extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
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
    ).isRequired,
    /** Root ID of where your App is mounted */
    rootId: PropTypes.string,
    /** Render prop/function that returns a react component that will render above the menu */
    aboveMenuRender: PropTypes.func,
    /** Render prop/function that returns a react component that will render below the menu */
    belowMenuRender: PropTypes.func,
    /** Render prop/function that receives the props for each item (including react-spring transition styles), and should return a react component with these props passed to it. */
    itemRender: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  }
  static defaultProps = {
    rootId: 'root',
    className: '',
    style: {},
  }
  root
  mount
  rootId
  activeSubMenusDefaultState
  state = {
    scrollTop: 0,
    prevScrollTop: 0,
    activeSubMenus: {},
  }
  constructor(props) {
    super(props)

    this.activeSubMenusDefaultState = {
      ...this.props.items.reduce(
        (obj, item) => ({ ...obj, [item.id]: false }),
        {},
      ),
    }

    this.state.activeSubMenus = this.activeSubMenusDefaultState

    if (typeof document !== 'undefined') {
      this.root = document.getElementById(this.props.rootId)
      this.mount = document.createElement('div')
    }
  }
  componentDidMount() {
    if (typeof document !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll, false)
      this.root.appendChild(this.mount)
    }
  }
  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll, false)
      this.root.removeChild(this.mount)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (typeof document !== 'undefined') {
      // menu was active, but is about to not be
      if (prevProps.isActive && !this.props.isActive) {
        window.scrollTo(0, prevState.prevScrollTop)

        document
          .getElementsByTagName('body')[0]
          .classList.remove('component-overlay-menu-active')
        // menu wasn't active, but is about to be
      } else if (!prevProps.isActive && this.props.isActive) {
        //         window.scrollTo(0, this.state.scrollTop)
        this.setState({ prevScrollTop: prevState.scrollTop })
        window.scrollTo(0, 0)

        document
          .getElementsByTagName('body')[0]
          .classList.add('component-overlay-menu-active')
      }
    }
  }

  toggleSubItem = id => {
    this.setState(prevState => {
      return {
        activeSubMenus: {
          ...this.activeSubMenusDefaultState,
          [id]: !prevState.activeSubMenus[id],
        },
      }
    })
  }

  handleScroll = () => {
    if (typeof document !== 'undefined') {
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement ? document.documentElement.scrollTop : 0)

      this.setState({
        scrollTop,
      })
    }
  }

  render() {
    const {
      itemRender,
      aboveMenuRender,
      belowMenuRender,
      isActive,
      items,
      className,
      style,
    } = this.props

    return isActive
      ? ReactDOM.createPortal(
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} native>
            {styles => (
              <animated.div
                style={{ ...styles, ...style }}
                className={`${defaultClassName} ${className}`}
              >
                {aboveMenuRender && aboveMenuRender()}
                <nav>
                  <Trail
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    keys={items.map(item => item.id)}
                    native
                  >
                    {items.map(item => styles =>
                      itemRender({
                        item,
                        styles,
                        toggleSubMenu: this.toggleSubItem,
                        subMenuActive: this.state.activeSubMenus[item.id],
                      }),
                    )}
                  </Trail>
                </nav>
                {belowMenuRender && belowMenuRender()}
              </animated.div>
            )}
          </Spring>,
          this.mount,
        )
      : null
  }
}
