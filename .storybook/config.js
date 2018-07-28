import 'babel-polyfill'
import { configure } from '@storybook/react'

function loadStories() {
  require('../components/ContentMarquee/stories.js')
  require('../components/ErrorBoundary/stories.js')
  require('../components/Button/stories.js')
  require('../components/ImageFit/stories.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
