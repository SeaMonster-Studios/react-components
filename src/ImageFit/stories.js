import React from 'react'
import { storiesOf } from '@storybook/react'
import { css } from 'react-emotion'
//
import { ImageFit } from './'

const common = {
  src: 'https://picsum.photos/1200/500',
  alt: 'something descriptive about my random image',
}

storiesOf('Image Fit', module)
  .add('Cover/Center. height: 200px, min-width: 100%', () => (
    <ImageFit
      {...{
        ...common,
        fit: 'cover',
        position: 'center',
        styles: css`
          height: 200px;
          min-width: 100%;
        `,
      }}
    />
  ))
  .add('Cover/top right. min-height: 100vh, max-width: 100%', () => (
    <ImageFit
      {...{
        ...common,
        fit: 'cover',
        position: 'top right',
        styles: css`
          min-height: 100vh;
          max-width: 100%;
        `,
      }}
    />
  ))
  .add('Contain/-200px -200px. min-height: 100px, maxwidth: 100%', () => (
    <ImageFit
      {...{
        ...common,
        fit: 'contain',
        position: '-200px -200px',
        styles: css`
          min-height: 100px;
          width: 100%;
        `,
      }}
    />
  ))
