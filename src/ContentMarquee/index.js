import * as React from 'react'
import PropTypes from 'prop-types'
//
import { Wrapper } from './styled'

export function ContentMarquee({ children, ...props }) {
  return (
    <Wrapper
      {...props}
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
  style: PropTypes.object,
  className: PropTypes.string
}

ContentMarquee.defaultProps = {
  gradient: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))'
}
