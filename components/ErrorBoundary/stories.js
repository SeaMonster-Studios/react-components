import React from 'react'
import { storiesOf } from '@storybook/react'
//
import { ErrorBoundary } from './'
import { Center } from '../../styles/stories'

class Child extends React.Component {
  state = {
    errorMe: false,
  }
  render() {
    return (
      <span
        style={{ cursor: 'pointer' }}
        data-testid="component-error-boundary-test-child"
        onClick={() =>
          this.setState(prevState => ({
            ...prevState,
            errorMe: true,
          }))
        }
      >
        <span>
          I am a child of an `ErrorBoundary`. Click me to see what happens when
          an error occurs beneath an `ErrorBoundary`
        </span>
        <br />
        <br />
        <span>
          Please note: I will provide a Report Form if you have Sentry.io/Raven
          setup within your app (when the error occurs)
        </span>

        {/* eslint-disable-next-line react/jsx-no-undef */}
        {this.state.errorMe ? <IDontExist /> : <span />}
      </span>
    )
  }
}

storiesOf('ErrorBoundary', module).add('default', () => (
  <ErrorBoundary>
    <Center>
      <Child />
    </Center>
  </ErrorBoundary>
))
