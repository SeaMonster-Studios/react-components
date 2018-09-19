// @flow
import * as React from "react"
import { css } from "react-emotion"
import { Spring, animated } from "react-spring"

type tContainer = {
  children: React.Node,
  className?: string,
  style?: {},
  spacing: {
    horizontal: {
      sm: string,
      md: string,
      lg: string,
    },
  },
  mediaQueries: {
    md: (string) => string,
    lg: (string) => string,
  },
}

export class Container extends React.PureComponent<tContainer> {
  render() {
    return (
      <div
        style={this.props.style || {}}
        className={
          css`
            padding-left: ${this.props.spacing.horizontal.sm};
            padding-right: ${this.props.spacing.horizontal.sm};
            max-width: 100%;

            ${this.props.mediaQueries.md(css`
              padding-left: ${this.props.spacing.horizontal.md};
              padding-right: ${this.props.spacing.horizontal.md};
            `)};

            ${this.props.mediaQueries.lg(css`
              padding-left: ${this.props.spacing.horizontal.lg};
              padding-right: ${this.props.spacing.horizontal.lg};
              max-width: 1290px;
              margin-left: auto;
              margin-right: auto;
            `)};
          ` +
          " " +
          (this.props.className || "")
        }
      >
        {this.props.children}
      </div>
    )
  }
}

type tSection = {
  children: React.Node,
  position: "even" | "odd",
  className?: string,
  style?: {},
  animation?: {
    from: {},
    to: {},
  },
  spacing: {
    vertical: {
      sm: string,
      md: string,
      lg: string,
    },
  },
  mediaQueries: {
    md: (string) => string,
    lg: (string) => string,
  },
}

export class Section extends React.PureComponent<tSection> {
  render() {
    return (
      <Spring
        native
        from={
          this.props.animation && this.props.animation.from
            ? this.props.animation.from
            : {
                opacity: 0,
                transform: `scale(1.0125) translateX(${
                  this.props.position === "even" ? "10px" : "-10px"
                })`,
              }
        }
        to={
          this.props.animation && this.props.animation.to
            ? this.props.animation.to
            : { opacity: 1, transform: `scale(1) translateX(0)` }
        }
        config={{ tension: 1, friction: 5 }}
      >
        {(styles) => (
          <animated.section
            style={{ ...(this.props.style || {}), ...styles }}
            className={
              css`
                margin-top: ${this.props.spacing.vertical.sm};
                margin-bottom: ${this.props.spacing.vertical.sm};

                ${this.props.mediaQueries.md(css`
                  margin-top: ${this.props.spacing.vertical.md};
                  margin-bottom: ${this.props.spacing.vertical.md};
                `)};

                ${this.props.mediaQueries.lg(css`
                  margin-top: ${this.props.spacing.vertical.lg};
                  margin-bottom: ${this.props.spacing.vertical.lg};
                `)};
              ` +
              " " +
              (this.props.className || "")
            }
          >
            {this.props.children}
          </animated.section>
        )}
      </Spring>
    )
  }
}
