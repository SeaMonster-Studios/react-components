import React from 'react'
import { storiesOf } from '@storybook/react'
import { css } from 'react-emotion'
//
import { ContentMarquee } from './'

const common = {
  image: 'https://picsum.photos/1200/500',
  styles: css`
    padding: 50px 100px;
    color: #fff;
    font-family: sans-serif;

    em {
      font-size: 32px;
      color: yellow;
    }
  `,
}

storiesOf('ContentMarquee', module)
  .add('Without gradient', () => (
    <ContentMarquee
      {...{
        ...common,
      }}
    >
      <h2>
        Try our newest flavor — <br />
        <em>banana by bananarama</em>
      </h2>
      <button>Get some</button>
    </ContentMarquee>
  ))
  .add('With gradient', () => (
    <ContentMarquee
      {...{
        ...common,
        gradient:
          'linear-gradient(to right, rgb(74, 194, 154), rgba(189, 255, 243, 0.5))',
      }}
    >
      <h2>
        Try our newest flavor — <br />
        <em>banana by bananarama</em>
      </h2>
      <button>Get some</button>
    </ContentMarquee>
  ))
