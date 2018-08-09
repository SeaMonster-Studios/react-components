import styled from 'react-emotion'

export const Wrapper = styled('div')`
  overflow: hidden;

  section {
    margin-top: ${props => props.rowSpace}px;
    margin-bottom: ${props => props.rowSpace}px;
  }

  .title {
    margin-bottom: ${props => props.columnSpace}px;

    &.has-subtitle {
      margin-bottom: 0;

      + .subtitle {
        margin-bottom: ${props => props.columnSpace}px;
      }
    }
  }

  @media (min-width: ${props => props.breakpoint}px) {
    .row {
      display: flex;
      margin-left: -${props => props.columnSpace}px;
      margin-right: -${props => props.columnSpace}px;
    }

    .column {
      width: 50%;
      margin-left: ${props => props.columnSpace}px;
      margin-right: ${props => props.columnSpace}px;
    }
  }
`

export const TwoColumnsWrapper = styled('div')`
  .title,
  .subtitle {
    text-align: center;
  }
`

export const TwoColumnsImageLeadsWrapper = styled('div')`
  .title,
  .subtitle {
    text-align: center;
  }

  img {
    width: 100%;
    margin-bottom: ${props => props.columnSpace}px;
  }

  .column {
    margin-bottom: ${props => props.columnSpace * 2}px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${props => props.breakpoint}px) {
    .column {
      margin-bottom: 0;
    }

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
