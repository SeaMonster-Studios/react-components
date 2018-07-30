// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Router } from 'react-static'
import { action } from '@storybook/addon-actions'
import { css } from 'react-emotion'
//
import { color, font } from '../../styles'
import { Checkbox } from './'
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

storiesOf('Checkbox', module).add('button tag', () => (
  <Center>
    <Checkbox
      {...{
        ...common,
        size: 22,
      }}
    >
      Hello
    </Checkbox>
  </Center>
))
