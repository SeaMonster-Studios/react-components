import * as React from "react"
import PropTypes from "prop-types"
import * as Sentry from "@sentry/browser"
import styled from "react-emotion"

const Wrapper = styled("div")`
  background-color: #f8ebe6;
  box-shadow: inset 0 0 0 0 transparent, 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  position: absolute;
  border-top: 2px solid rgb(222, 54, 24);
  top: 50%;

  width: calc(100% - 40px);
  margin: 0 20px;
  padding: 20px;
  text-align: center;
  line-height: 1.5;

  &,
  button {
    font-size: 1rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.625rem;
    padding-bottom: 10;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    border-bottom: 1px solid rgb(222, 54, 24);
  }
`

export class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
  }
  static defaultProps = {
    style: {},
    className: "",
  }
  state = {
    hasError: false,
  }

  componentDidCatch(error, errorInfo) {
    this.setState(() => {
      return {
        hasError: true,
      }
    })

    if (
      process.env.NODE_ENV !== "development" &&
      typeof document !== "undefined" &&
      error.message != "IDontExist is not defined"
    ) {
      /* eslint-disable-next-line no-console */
      console.error("Errors sent to Sentry.io", error, errorInfo)

      Sentry.configureScope((scope) => {
        Object.keys(errorInfo).forEach((key) => {
          scope.setExtra(key, errorInfo[key])
        })
      })
      Sentry.captureException(error)

    } else {
      /* eslint-disable-next-line no-console */
      console.error(
        "Error caught in Error ErrorBoundary. This will reported to Sentry when not in development.",
      )
    }
  }

  render() {
    const { children, style, className } = this.props
    if (this.state.hasError) {
      return (
        <Wrapper
          data-testid="component-error-boundary"
          className={className}
          style={style}
        >
          <div>
            <h2>Sorry, something went wrong.</h2>
            <ReportForm />
            <p>Please try reloading the page.</p>
          </div>
        </Wrapper>
      )
    }
    return children
  }
}

const ReportForm = () =>
  process.env.NODE_ENV !== "development" && typeof document !== "undefined" ? (
    <Form />
  ) : (
    <span />
  )

const Form = () => (
  <p data-testid="component-error-boundary-form">
    This error has been reported to our development team. Please{" "}
    <button onClick={() => Sentry.showReportDialog()}>
      click here to fill out a report.
    </button>
  </p>
)
