import React from 'react'
import { createSerializer } from 'jest-emotion'
import * as emotion from 'emotion'
//
import { render, cleanup } from 'react-testing-library'
import { ContentMarquee } from './'

afterEach(cleanup)

expect.addSnapshotSerializer(createSerializer(emotion))

describe('ContentMarquee', () => {
  it('Renders', () => {
    const { getByTestId } = renderSetup()
    const contentMarquee = getByTestId('component-content-marquee')

    expect(contentMarquee).toBeDefined()
    expect(contentMarquee).toMatchSnapshot()
  })
})

function renderSetup(overrides) {
  const props = {
    image: 'https://picsum.photos/1200/500',
    styles: ``,
    ...overrides,
  }

  const wrapper = render(
    <ContentMarquee {...props}>
      <h2>
        Try our newest flavor — <br />
        <em>banana by bananarama</em>
      </h2>
      <button>Get some</button>
    </ContentMarquee>,
  )

  return {
    ...wrapper,
    props,
  }
}
