// @flow
import * as React from 'react'
//
import { Styled } from './styled'

type tProps = {
  image: string,
  gradient?: string,
  children: any,
  styles: string,
}

export function ContentMarquee({ children, ...props }: tProps) {
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
