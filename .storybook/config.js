import { configure } from '@storybook/react'

function loadStories() {
  require('../components/Cta/index.stories.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
