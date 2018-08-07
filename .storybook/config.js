import { configure } from '@storybook/react'

function loadStories() {
  require('../lib/es6_global/src/ContentMarqueeStories.js')
  require('../lib/es6_global/src/ButtonStories.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
