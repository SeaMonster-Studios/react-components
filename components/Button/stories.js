// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Router } from 'react-static'
import { action } from '@storybook/addon-actions'
import { css } from 'react-emotion'
//
import { color, font } from '../../styles'
import { Button } from './'
import { Center } from '../../styles/stories'

const common = {
  baseColor: color.rgb.red[1],
  hoverBaseColor: color.rgb.red[2],
  textColor: color.rgb.white[1],
  styles: css`
    transition: 0.5s ease;
    padding: 20px 35px;
    font-size: 22px;
    font-weight: 300;
    font-family: ${font.family.sans};
  `,
}

storiesOf('Button', module)
  .add('button tag', () => (
    <Center>
      <Button
        {...{
          ...common,
          type: 'submit',
          tagType: 'button',
          onClick: action('button click'),
        }}
      >
        Hello
      </Button>
    </Center>
  ))
  .add('a tag', () => (
    <Center>
      <Button
        {...{
          ...common,
          tagType: 'a',
          href: '/contact',
        }}
      >
        Hello
      </Button>
    </Center>
  ))
  .add('Link tag', () => (
    <Center>
      <Router>
        <Button
          {...{
            ...common,
            to: '/contact',
            tagType: 'Link',
          }}
        >
          Hello
        </Button>
      </Router>
    </Center>
  ))
  .add('With ripple hover effect', () => (
    <Center>
      <Button
        {...{
          ...common,
          type: 'submit',
          tagType: 'button',
          hoverEffect: 'ripple',
          onClick: action('button click'),
        }}
      >
        Hello
      </Button>
    </Center>
  ))
  .add('With inverse style', () => (
    <Center>
      <Button
        {...{
          ...common,
          type: 'submit',
          tagType: 'button',
          inverse: true,
          onClick: action('button click'),
        }}
      >
        Hello
      </Button>
    </Center>
  ))

  .add('With transparent inverse style, and ripple hover effect', () => (
    <Center>
      <Button
        {...{
          ...common,
          type: 'submit',
          tagType: 'button',
          inverse: true,
          inverseStyle: 'transparent',
          hoverEffect: 'ripple',
          onClick: action('button click'),
        }}
      >
        Hello
      </Button>
    </Center>
  ))
