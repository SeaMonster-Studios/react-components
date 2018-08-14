import styled, { css } from 'react-emotion'

export const Wrapper = styled('section')`
  ${props => css`
    overflow: hidden;
    padding-top: ${props.rowSpace}px;
    padding-bottom: ${props.rowSpace}px;

    .title,
    .subtitle {
      text-align: center;
    }

    .column .title,
    .column .subtitle {
      text-align: initial;
    }

    .title {
      margin-bottom: ${props.columnSpace}px;

      + .subtitle {
        margin-bottom: ${props.columnSpace}px;
        margin-top: -${props.columnSpace}px;
      }
    }

    img {
      max-width: 100%;
    }

    img {
      &:not(.thumbnail) {
        margin-bottom: ${props.columnSpace * 0.5}px;
      }

      + .caption {
        margin-top: -${props.columnSpace * 0.5}px;
      }

      &.alignleft {
        margin-right: ${props.columnSpace * 0.5}px;
      }

      &.alignright {
        margin-left: ${props.columnSpace * 0.5}px;
      }

      &.aligncenter {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    }

    .column:not(:first-of-type) {
      margin-top: ${props.columnSpace}px;
    }

    .row,
    .column,
    .column-single {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: ${props.columnSpace}px;
      }
    }

    .row + .row {
      margin-top: ${props.columnSpace}px;
    }

    .caption {
      font-size: 14px;
      line-height: 1.125;
      background-color: rgb(0, 0, 0, 0.05);
      padding: 10px;
    }

    .column-grid {
      display: flex;
      flex-wrap: wrap;
      margin-left: -${props.columnSpace * 0.25}px;
      margin-right: -${props.columnSpace * 0.25}px;
      margin-bottom: -${props.columnSpace * 0.5}px;

      > div {
        width: calc(50% - ${props.columnSpace * 0.25}px);
        margin-bottom: ${props.columnSpace * 0.5}px;

        &:nth-of-type(odd) {
          padding-right: ${props.columnSpace * 0.25}px;
        }

        &:nth-of-type(even) {
          padding-left: ${props.columnSpace * 0.25}px;
        }

        img {
          width: 100%;
          display: block;
        }
      }
    }

    @media (min-width: ${props.breakpoint}px) {
      .column:not(:first-of-type) {
        margin-top: 0;
      }

      .column-grid {
        margin-left: ${props.columnSpace * 4}px;
      }

      img.column-lead {
        width: auto;
        max-width: 100%;
        min-height: ${props.minHeight || 0};
      }

      .row {
        display: flex;

        &:not(:last-of-type) {
          margin-bottom: ${props.columnSpace}px;
        }

        &.row-stacked {
          .column-image {
            margin-bottom: 0;
          }
        }

        + .row {
          margin-top: 0;
        }
      }

      .column-half {
        width: 50%;

        &:first-of-type:not(.order-bp-2),
        &.order-bp-1 {
          padding-right: ${props.columnSpace * 0.5}px;
        }

        &:last-of-type:not(.order-bp-1),
        &.order-bp-2 {
          padding-left: ${props.columnSpace * 0.5}px;
        }
      }

      .order-bp-2 {
        order: 2;
      }

      .order-bp-1 {
        order: 1;
      }

      .column-third {
        width: 33.333333333%;

        &:nth-of-type(3n - 2) {
          padding-right: ${props.columnSpace * 0.5}px;
        }

        &:nth-of-type(3n - 1) {
          padding-right: ${props.columnSpace * 0.5}px;
          padding-left: ${props.columnSpace * 0.5}px;
        }

        &:nth-of-type(3n) {
          padding-left: ${props.columnSpace * 0.5}px;
        }
      }

      .bp-align-center {
        align-items: center;
      }
    }
  `};
`
