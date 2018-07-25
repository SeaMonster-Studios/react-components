import { configure } from '@storybook/react'

function loadStories() {
  require('../lib/es6_global/src/HelloWorld/HelloWorldStories.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
