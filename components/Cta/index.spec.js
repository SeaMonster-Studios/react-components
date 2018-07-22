import React from 'react'
import faker from 'faker'
//
import { render } from 'react-testing-library'
import Cta from './'

describe('Cta Component Test', () => {
  it('Renders', () => {
    const { getByTestId } = renderSetup()
    const cta = getByTestId('component-cta')

    expect(cta).toBeDefined()
  })
})

function renderSetup(overrides) {
  const props = {
    image: `${faker.image.imageUrl()}/`,
    ...overrides,
  }

  const wrapper = render(<Cta {...props}>{faker.random.words()}</Cta>)

  return {
    ...wrapper,
    props,
  }
}
