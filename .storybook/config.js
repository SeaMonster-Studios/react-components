import { configure } from '@storybook/react'

function loadStories() {
  require('../lib/es6_global/src/HelloWorldStories.js'),
    require('../lib/es6_global/src/ContentMarqueeStories.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
