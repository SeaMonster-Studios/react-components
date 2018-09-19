import { css } from 'docz-plugin-css'

export default {
  title: 'React Components',
  protocol: 'http',
  port: 5775,
  plugins: [
    css({
      preprocessor: 'postcss',
    })
  ],
}
