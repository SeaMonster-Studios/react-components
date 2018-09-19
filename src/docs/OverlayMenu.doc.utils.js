// @flow
import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "react-emotion"
//

export const Wrapper = styled("header")`
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-wrapper {
    img {
      padding-right: 30px;
      max-width: 80px;
    }
  }

  .hamburger {
    transform: scale(0.75);
  }

  .btn {
    display: none;
    margin-right: 15px;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

export const overlayClassName = css`
  background-color: rgb(255, 255, 255);

  a:not(.btn) {
    color: rgb(0, 0, 0);
  }

  .above {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-wrapper {
    img {
      padding-right: 30px;
      max-width: 80px;
    }
  }

  .hamburger {
    transform: scale(0.75);
  }

  .btn {
    display: none;
    margin-right: 15px;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav {
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 28px;
    margin-bottom: 60px;
    margin-top: 60px;

    a {
      display: block;
      padding: 20px;

      &:hover,
      &:focus {
        text-decoration: none;
        color: tomato;
      }
    }
  }

  .below {
    padding-bottom: 60px;
    text-align: center;
  }

  .btns-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    .btn {
      margin: 0 15px;
    }
  }
`

const MobileBar = (props) => (
  <React.Fragment>
    <div className="left">
      <div className="logo-wrapper">
        <img src="https://picsum.photos/100x100" alt="" />
      </div>
    </div>
    <div className="right">
      <button
        className={`${props.overlayIsActive ? "is-active" : ""}`}
        type="button"
        onClick={props.toggleOverlay}
      >
        {props.overlayIsActive ? "Close" : "Open"}
      </button>
    </div>
  </React.Fragment>
)

MobileBar.propTypes = {
  overlayIsActive: PropTypes.bool.isRequired,
  toggleOverlay: PropTypes.func.isRequired,
}

export class ExampleHeader extends React.Component {
  static propTypes = {
    /** A function that receives the isActive state, the toggle function, a className for styles, and the same Bar used when overlay isn't active */
    children: PropTypes.func.isRequired,
  }
  toggleOverlay = () => {
    this.setState((prevState) => ({
      overlayIsActive: !prevState.overlayIsActive,
    }))
  }
  initialState = {
    overlayIsActive: false,
  }
  state = this.initialState
  render() {
    return (
      <Wrapper>
        <MobileBar
          overlayIsActive={this.state.overlayIsActive}
          toggleOverlay={this.toggleOverlay}
        />
        {this.props.children({
          isActive: this.state.overlayIsActive,
          className: overlayClassName,
          toggle: this.toggleOverlay,
          bar: (
            <MobileBar
              overlayIsActive={this.state.overlayIsActive}
              toggleOverlay={this.toggleOverlay}
            />
          ),
        })}
      </Wrapper>
    )
  }
}
