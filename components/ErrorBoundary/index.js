// @flow
import * as React from 'react'
import Raven from 'raven-js'
//
import { Wrapper } from './style'

type tProps = {
  children: React.Node,
  styles?: string, // emotion css string
}

type tState = { hasError: boolean }

export class ErrorBoundary extends React.Component<tProps, tState> {
  state = {
    hasError: false,
  }

  componentDidCatch(error: any, info: any) {
    this.setState(() => {
      return {
        hasError: true,
      }
    })

    if (
      process.env.NODE_ENV !== 'development' &&
      typeof document !== 'undefined' &&
      error.message != 'IDontExist is not defined'
    ) {
      /* eslint-disable-next-line no-console */
      console.error('Errors sent to Raven', error, info)
      Raven.captureException(error, { extra: info })
    } else {
      /* eslint-disable-next-line no-console */
      console.error(
        'Error caught in Error ErrorBoundary. This will reported to Sentry when not in development.',
      )
    }
  }

  render() {
    const { children, styles, ...attrs } = this.props
    if (this.state.hasError) {
      return (
        <Wrapper
          data-testid="component-error-boundary"
          options={{
            customStyles: styles || {},
          }}
          {...attrs}
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
  process.env.NODE_ENV !== 'development' && typeof document !== 'undefined' ? (
    <Form />
  ) : (
    <span />
  )

const Form = () => (
  <p data-testid="component-error-boundary-form">
    This error has been reported to our development team. Please{' '}
    <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
      click here to fill out a report.
    </button>
  </p>
)
