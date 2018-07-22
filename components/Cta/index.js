// @flow
import * as React from 'react'
//
import Styled from './index.style'

export default function Cta(props: {
  options: {
    image: string,
    gradient?: string,
    styles?: {}, // Emotion style object
  },
  children: React.Node,
}) {
  const defaults = {
    gradient: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))',
  }

  return (
    <Styled
      options={{
        ...defaults,
        ...props.options,
      }}
      data-testid="component-cta"
    >
      {props.children}
    </Styled>
  )
}
