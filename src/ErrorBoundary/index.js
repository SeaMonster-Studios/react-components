import * as React from "react"
import PropTypes from "prop-types"
import Raven from "raven-js"
//
import { Wrapper } from "./style"

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

  componentDidCatch(error, info) {
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
      console.error("Errors sent to Raven", error, info)
      Raven.captureException(error, { extra: info })
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
    <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
      click here to fill out a report.
    </button>
  </p>
)
