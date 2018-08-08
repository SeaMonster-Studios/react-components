import * as React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './styled'

const defaults = {
  gradient: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))',
}

export function ContentMarquee({ children, ...props }) {
  return (
    <Wrapper
      {...{
        ...defaults,
        ...props,
      }}
      data-testid="component-content-marquee"
    >
      {children}
    </Wrapper>
  )
}

ContentMarquee.propTypes = {
  image: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  children: PropTypes.node.isRequired,
  styles: PropTypes.string.isRequired,
}
