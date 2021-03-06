import React from "react"
import PropTypes from "prop-types"
import styled, { injectGlobal, css } from "react-emotion"

injectGlobal(`
  body {
    position: relative;
  }
`)

export const Wrapper = styled("div")`
  position: relative;
  width: 100%;

  ${(props) => scrollingProps(props)};
  ${(props) => props.styles};
`

function scrollingProps(props) {
  const common = css`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
  `

  switch (props.position) {
    case "hidden":
      return css`
        ${common};
        transform: translateY(-${props.selfHeight}px);

        ${props.hiddenClassName};
      `
    case "ready":
      return css`
        ${common};
        transition: transform 0.5s ease;
        transform: translateY(-${props.selfHeight}px);

        ${props.readyClassName};
      `
    case "active": {
      return css`
        ${common};
        transition: transform 0.5s ease;
        ${props.activeClassName};
      `
    }
    default:
      return ""
  }
}

export class StickyBar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** The return value of emotion's css function */
    activeEmotionClassName: PropTypes.string,
    /** The return value of emotion's css function */
    readyEmotionClassName: PropTypes.string,
    /** The return value of emotion's css function */
    hiddenEmotionClassName: PropTypes.string,
    style: PropTypes.object,
    /** An alternative to emotion-based active styles */
    activeStyle: PropTypes.object,
    /** An alternative to emotion-based ready styles */
    readyStyle: PropTypes.object,
    /** An alternative to emotion-based hidden styles */
    hiddenStyle: PropTypes.object,
    /** In case you need to force a position update */
    forceSelfTopUpdate: PropTypes.bool,
  }
  static defaultProps = {
    className: "",
    activeEmotionClassName: "",
    readyEmotionClassName: "",
    hiddenEmotionClassName: "",
    style: {},
    activeStyle: {},
    readyStyle: {},
    hiddenStyle: {},
  }
  state = {
    scrollLast: 0,
    scrollTop: 0,
    position: "default",
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
    if (typeof document !== "undefined") {
      setTimeout(() => {
        // sometimes the browser will load the page half way and then continue to render content, which would cause the component to think the user is scrolling up. This would cause the sticky bar to hide, then show, then hide.
        window.addEventListener("scroll", this.handleScroll, false)
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
    if (typeof document !== "undefined") {
      window.removeEventListener("scroll", this.handleScroll, false)
    }
  }
  handleScroll = () => {
    console.log("I am scrolling")
    if (typeof document !== "undefined") {
      this.setState((prevState) => {
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
          (position === "active" && scrollingUpOrIdle)
          // (pastAnimationThreshold && position === 'active' && scrollingUpOrIdle)
        ) {
          position = "active"
          hasMoved = true
        } else if (
          (pastAnimationThreshold && !scrollingUp) ||
          (!pastAnimationThreshold && pastBottom && scrollingUp)
        ) {
          position = "ready"
          hasMoved = true
        } else if (pastBottom && !scrollingUp) {
          position = "hidden"
          hasMoved = true
        } else {
          position = "default"
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
      activeStyle,
      readyStyle,
      hiddenStyle,
    } = this.props

    return (
      <React.Fragment>
        <Wrapper
          data-testid="component-sticky-bar"
          className={className}
          style={{
            ...style,
            ...() => {
              switch (this.state.position) {
                case "active":
                  return activeStyle
                case "ready":
                  return readyStyle
                case "hidden":
                  return hiddenStyle
                default:
                  return {}
              }
            },
          }}
          innerRef={(containerRef) => {
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
