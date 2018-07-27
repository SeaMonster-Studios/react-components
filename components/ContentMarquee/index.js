// @flow
import * as React from 'react'
//
import { Wrapper } from './styled'

type tProps = {
  image: string,
  gradient?: string,
  children: React.Node,
  styles: string,
}

const defaults = {
  gradient: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))',
}

export function ContentMarquee({ children, ...props }: tProps) {
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
