import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { Spring, animated } from "react-spring"
import PropTypes from "prop-types"
import { css } from "emotion"
import { ArrowDown } from "./Icons";
import { setHtml } from "../../utils/index"

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
    className: "",
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
    if (typeof document !== "undefined") {
      document.addEventListener("click", this.outsideClickListener)
    }
  }
  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", this.outsideClickListener)
    }
  }
  outsideClickListener = (event) => {
    if (
      !ReactDOM.findDOMNode(this.containerRef.current).contains(event.target)
    ) {
      this.toggleSubMenu("")
    }
  }
  toggleSubMenu = (itemId) => {
    this.setState((prevState) => {
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
        {(styles) => (
          <animated.div style={styles}>
            <nav
              ref={this.containerRef}
              style={style}
              className={
                css`
              display: flex,
              align-items: center;
              justify-content: center;
              position: relative;
              width: 100%;
              z-index: 999;

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
                  "px " +
                  this.props.ySpacing * 2 +
                  "px 0"};
              }

              .subitem-inner {
                display: flex;
                flex-wrap: wrap;
              }

              .subitem-section {
                display: flex;
                flex-direction: column;
                padding: ${"0 " +
                  this.props.xSpacing +
                  "px " +
                  this.props.ySpacing +
                  "px"};
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
                " " +
                className
              }
            >
              {items.map((item) => (
                <span
                  className={`lvl1-wrapper is-${
                    this.state.subMenuStatuses[item.id]
                      ? "active"
                      : "not-active"
                  }`}
                >
                  <MegaMenuItem
                    buttonWithArrow={buttonWithArrow}
                    item={item}
                    key={item.id}
                    toggleSubMenu={this.toggleSubMenu}
                    subMenuActive={this.state.subMenuStatuses[item.id]}
                  />
                </span>
              ))}
            </nav>
          </animated.div>
        )}
      </Spring>
    )
  }
}

export const MegaMenuItem = ({
  item,
  subMenuActive,
  toggleSubMenu,
  buttonWithArrow,
}) => {
  if (item.url && item.items && item.items.length) {
    return (
      <Fragment>
        <a
          href={item.url}
          className="item-has-children"
          {...setHtml(item.title)}
        />
        <button onClick={() => toggleSubMenu(item.id)}>
          <ArrowDown />
        </button>
        {subMenuActive && <MegaMenuSubItemsList items={item.items} />}
      </Fragment>
    )
  } else if (!item.url && item.items && item.items.length) {
    return (
      <Fragment>
        <button
          className={`item-has-children ${
            buttonWithArrow ? "button-has-icon" : ""
          }`}
          onClick={() => toggleSubMenu(item.id)}
        >
          <span {...setHtml(item.title)} />
          {buttonWithArrow && <ArrowDown />}
        </button>
        {subMenuActive && <MegaMenuSubItemsList items={item.items} />}
      </Fragment>
    )
  } else {
    return <a href={item.url}>{item.title}</a>
  }
}

MegaMenuItem.propTypes = {
  toggleSubMenu: PropTypes.func,
  subMenuActive: PropTypes.bool.isRequired,
  buttonWithArrow: PropTypes.bool.isRequired,
}

export const MegaMenuSubItemsList = ({ items }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} native>
      {(styles) => (
        <animated.div style={styles} className="subitem">
          <div className="subitem-inner">
            {items.map((item) => (
              <SubItem item={item} key={item.id} />
            ))}
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

MegaMenuSubItemsList.propTypes = {
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
          {items.map((subItem) => (
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
          {items.map((subItem) => (
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
