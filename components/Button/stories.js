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
          link: '/contact',
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
          link: '/contact',
          tagType: 'a',
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
            link: '/contact',
            tagType: 'Link',
          }}
        >
          Hello
        </Button>
      </Router>
    </Center>
  ))
  .add('File upload', () => (
    <Center>
      <Button
        {...{
          ...common,
          link: '/contact',
          tagType: 'input',
          onFileChange: (event, fileContents) =>
            console.log(
              '---event---\n',
              event,
              '\n---fileContents---\n',
              fileContents,
            ),
          inputAttrs: {
            type: 'file',
          },
        }}
      >
        File Upload
      </Button>
    </Center>
  ))
