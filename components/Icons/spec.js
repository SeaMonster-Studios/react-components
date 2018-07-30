// @flow
import React from 'react'
import { render, cleanup } from 'react-testing-library'
//
import { ArrowDownIcon } from './'

afterEach(cleanup)

describe('Icons Tests', () => {
  it('Renders ArrowDownIcon', () => {
    const { container } = render(<ArrowDownIcon />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
