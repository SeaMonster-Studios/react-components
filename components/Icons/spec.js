// @flow
import React from 'react'
import { render, cleanup } from 'react-testing-library'
//
import * as Icons from './'

afterEach(cleanup)

describe('Icons Tests', () => {
  Object.entries(Icons).map(icon => {
    it(`Renders ${icon[0]}`, () => {
      const Icon = icon[1]
      // $FlowFixMe
      const { container } = render(<Icon />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
