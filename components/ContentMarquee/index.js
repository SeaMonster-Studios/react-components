import * as React from 'react'
import PropTypes from 'prop-types'
//
import { Styled } from './styled'

export function ContentMarquee({ children, ...props }) {
  const defaults = {
    gradient: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))',
  }

  return (
    <Styled
      {...{
        ...defaults,
        ...props,
      }}
      data-testid="component-content-marquee"
    >
      {children}
    </Styled>
  )
}

ContentMarquee.propTypes = {
  image: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  children: PropTypes.node.isRequired,
  styles: PropTypes.string.isRequired,
}
