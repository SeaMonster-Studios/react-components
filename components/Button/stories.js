// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Router } from 'react-static'
import { action } from '@storybook/addon-actions'
//
import { Button } from './'

const common = {
  baseColor: '255,89,89',
  textColor: '255,255,255',
  hoverEffect: 'ripple',
  styles: {
    transition: '0.5s ease',
    padding: '8px 25px',
    textTransform: 'uppercase',
    fontSize: 14,
  },
}

storiesOf('Button', module)
  .add('button tag', () => (
    <Button
      {...{
        ...common,
        type: 'submit',
        inverse: true,
        link: '/contact',
        tagType: 'button',
        onClick: action('button click'),
      }}
    >
      Hello
    </Button>
  ))
  .add('a tag', () => (
    <Button
      {...{
        ...common,
        link: '/contact',
        tagType: 'a',
        hoverBaseColor: '184,68,72',
        hoverEffect: 'default',
        styles: {
          ...common.styles,
          textTransform: 'none',
        },
      }}
    >
      Hello
    </Button>
  ))
  .add('Link tag', () => (
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
  ))
  .add('File upload', () => (
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
  ))
