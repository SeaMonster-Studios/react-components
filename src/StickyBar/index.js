import React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './style'

export class StickyBar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    activeEmotionClassName: PropTypes.string,
    readyEmotionClassName: PropTypes.string,
    hiddenEmotionClassName: PropTypes.string,
    style: PropTypes.object,
    forceSelfTopUpdate: PropTypes.bool,
  }
  static defaultProps = {
    className: '',
    activeEmotionClassName: '',
    readyEmotionClassName: '',
    hiddenEmotionClassName: '',
    style: {},
  }
  state = {
    scrollLast: 0,
    scrollTop: 0,
    position: 'default',
    hasMoved: false,
    rendered: false,
    screenHeight: 0,
  }
  forceSelfTopUpdate = false
  constructor(props) {
    super(props)

    if (props.forceSelfTopUpdate !== undefined)
      this.forceSelfTopUpdate = props.forceSelfTopUpdate
  }
  componentDidMount() {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        // sometimes the browser will load the page half way and then continue to render content, which would cause the component to think the user is scrolling up. This would cause the sticky bar to hide, then show, then hide.
        window.addEventListener('scroll', this.handleScroll, false)
      }, 1000)

      let selfTop = this.ref.offsetTop

      this.setState({
        screenHeight: document.documentElement.scrollHeight,
        triggerTopBeforeMoved: selfTop,
        selfTop,
      })
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    let snapshot = {}

    if (
      (this.ref.offsetTop !== prevState.selfTop && !prevState.hasMoved) ||
      (!this.forceSelfTopUpdate && this.props.forceSelfTopUpdate)
    ) {
      snapshot.newSelfTop = this.ref.offsetTop
    }

    if (Object.keys(snapshot).length !== 0) {
      return snapshot
    }

    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null && snapshot.newSelfTop) {
      this.setState({
        selfTop: snapshot.newSelfTop || prevState.selfTop,
        screenHeight: document.documentElement.scrollHeight,
      })
    }
  }
  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll, false)
    }
  }
  handleScroll = () => {
    if (typeof document !== 'undefined') {
      this.setState(prevState => {
        const scrollTop =
          (window.pageYOffset ||
            (document.documentElement
              ? document.documentElement.scrollTop
              : 0)) -
          document.documentElement.scrollHeight +
          prevState.screenHeight // if the sticky bar has any children that make the bar change height while it's active, it will mess up the scrollTop and think we're scrolling if we don't remove the scrollHeight and add the previous scrollheight (before the children changed StickyBar's height)

        let position = prevState.position
        let hasMoved = prevState.hasMoved

        const pastBottom =
          scrollTop >= prevState.selfTop + this.ref.offsetHeight

        const pastAnimationThreshold =
          scrollTop >= (prevState.selfTop + this.ref.offsetHeight) * 2

        const scrollingUp = scrollTop < prevState.scrollTop

        const scrollingUpOrIdle = scrollTop <= prevState.scrollTop

        if (
          (pastAnimationThreshold && scrollingUp) ||
          (position === 'active' && scrollingUpOrIdle)
          // (pastAnimationThreshold && position === 'active' && scrollingUpOrIdle)
        ) {
          position = 'active'
          hasMoved = true
        } else if (
          (pastAnimationThreshold && !scrollingUp) ||
          (!pastAnimationThreshold && pastBottom && scrollingUp)
        ) {
          position = 'ready'
          hasMoved = true
        } else if (pastBottom && !scrollingUp) {
          position = 'hidden'
          hasMoved = true
        } else {
          position = 'default'
          hasMoved = false
        }

        return {
          scrollTop,
          position,
          hasMoved,
        }
      })
    }
  }
  render() {
    const {
      children,
      className,
      style,
      activeEmotionClassName,
      readyEmotionClassName,
      hiddenEmotionClassName,
    } = this.props

    return (
      <React.Fragment>
        <Wrapper
          data-testid="component-sticky-bar"
          className={className}
          style={style}
          innerRef={containerRef => {
            this.ref = containerRef
          }}
          {...{
            selfHeight:
              this.ref && this.ref.offsetHeight ? this.ref.offsetHeight : 0,
            position: this.state.position,
            activeClassName: activeEmotionClassName,
            readyClassName: readyEmotionClassName,
            hiddenClassName: hiddenEmotionClassName,
          }}
        >
          {children}
        </Wrapper>
        {this.state.hasMoved && (
          <div
            style={{
              height:
                this.ref && this.ref.offsetHeight ? this.ref.offsetHeight : 0,
            }}
          />
        )}
      </React.Fragment>
    )
  }
}
