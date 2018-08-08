import React from 'react'
import { storiesOf } from '@storybook/react'
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
  hoverTextColor: color.rgb.white[0],
  className: css`
    transition: 0.5s ease;
    padding: 20px 35px;
    font-size: 22px;
    font-weight: 300;
    font-family: ${font.family.sans};
  `,
}

storiesOf('Button', module)
  .add('default', () => (
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
  .add('With ripple hover effect', () => (
    <Center>
      <Button
        {...{
          ...common,
          type: 'submit',
          tagType: 'button',
          hoverStyle: 'ripple',
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

  .add('With **transparent** inverseStyle, and **ripple** hoverStyle', () => (
    <Center>
      <Button
        {...{
          ...common,
          type: 'submit',
          tagType: 'button',
          inverse: true,
          inverseStyle: 'transparent',
          hoverStyle: 'ripple',
          onClick: action('button click'),
        }}
      >
        Hello
      </Button>
    </Center>
  ))
