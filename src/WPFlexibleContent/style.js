import styled from 'react-emotion'

export const Wrapper = styled('div')`
  overflow: hidden;

  section {
    margin-top: ${props => props.rowSpace}px;
    margin-bottom: ${props => props.rowSpace}px;
  }

  .title,
  .subtitle {
    text-align: center;
  }

  .column .title,
  .column .subtitle {
    text-align: initial;
  }

  .title {
    margin-bottom: ${props => props.columnSpace}px;

    + .subtitle {
      margin-bottom: ${props => props.columnSpace}px;
      margin-top: -${props => props.columnSpace}px;
    }
  }

  img {
    max-width: 100%;
  }

  img[class*='wp-image'] {
    margin-bottom: ${props => props.columnSpace * 0.5}px;

    &.alignleft {
      margin-right: ${props => props.columnSpace * 0.5}px;
    }

    &.alignright {
      margin-left: ${props => props.columnSpace * 0.5}px;
    }
  }

  .column:not(:last-of-type) {
    margin-bottom: ${props => props.columnSpace}px;
  }

  @media (min-width: ${props => props.breakpoint}px) {
    .row {
      display: flex;
      margin-left: -${props => props.columnSpace}px;
      margin-right: -${props => props.columnSpace}px;
    }

    .column {
      margin-bottom: 0;
      width: 50%;
      margin-left: ${props => props.columnSpace}px;
      margin-right: ${props => props.columnSpace}px;
    }
  }
`

export const TwoColumnsWrapper = styled('div')``

export const TwoColumnsStackedWrapper = styled('div')`
  overflow: hidden;

  img {
    margin-bottom: ${props => props.columnSpace * 0.5}px;
  }

  @media (min-width: ${props => props.breakpoint}px) {
    .row {
      align-items: center;
    }

    .column-two-image {
      order: 2;
    }

    .column-two-content {
      order: 1;
    }
  }
`

export const TwoColumnsImageLeadsWrapper = styled('div')`
  img {
    width: 100%;
    margin-bottom: ${props => props.columnSpace * 0.5}px;
  }

  @media (min-width: ${props => props.breakpoint}px) {
    img {
      width: auto;
      max-width: 100%;
      min-height: ${props => props.minHeight};
    }
  }
`

export const TwoColumnsImageGridWrapper = styled('div')`
  overflow: hidden;

  .column-one-content {
    margin-bottom: ${props => props.columnSpace}px;
  }

  .column-two-grid {
    display: flex;
    flex-wrap: wrap;
    margin-left: -${props => props.columnSpace * 0.25}px;
    margin-right: -${props => props.columnSpace * 0.25}px;

    > div {
      max-width: calc(50% - ${props => props.columnSpace}px);
      padding: ${props => props.columnSpace * 0.25}px;
    }

    img {
      width: 100%;
      display: block;
    }

    .caption {
      font-size: 14px;
      line-height: 1.125;
      background-color: rgb(0, 0, 0, 0.05);
      padding: 10px;
    }
  }

  @media (min-width: ${props => props.breakpoint}px) {
    .column-one-content {
      margin-bottom: 0;
      margin-right: ${props => props.columnSpace * 4}px;
    }

    .row {
      align-items: center;
    }
  }
`
