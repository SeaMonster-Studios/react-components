import styled, { css } from "react-emotion"

const common = (rowSpace, columnSpace) => css`
  overflow: hidden;
  padding-top: ${rowSpace}px;
  padding-bottom: ${rowSpace}px;

  .title,
  .subtitle {
    text-align: center;
  }

  .column .title,
  .column .subtitle {
    text-align: initial;
  }

  .title {
    margin-bottom: ${columnSpace}px;

    + .subtitle {
      margin-bottom: ${columnSpace}px;
      margin-top: -${columnSpace}px;
    }
  }

  .caption,
  figcaption {
    font-size: 14px;
    line-height: 1.125;
    background-color: #f2f2f2;
    padding: 10px;
  }

  img {
    max-width: 100%;
  }
  img {
    &:not(.thumbnail) {
      margin-bottom: ${columnSpace * 0.5}px;
    }

    + .caption {
      margin-top: -${columnSpace * 0.5}px;
    }

    &.alignleft {
      margin-right: ${columnSpace * 0.5}px;
    }

    &.alignright {
      margin-left: ${columnSpace * 0.5}px;
    }

    &.aligncenter {
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }

  .column:not(:first-of-type) {
    margin-top: ${columnSpace}px;
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
      margin-top: ${columnSpace}px;
    }
  }

  .row + .row {
    margin-top: ${columnSpace}px;
  }

  .column-grid {
    display: flex;
    flex-wrap: wrap;
    margin-left: -${columnSpace * 0.25}px;
    margin-right: -${columnSpace * 0.25}px;
    margin-bottom: -${columnSpace * 0.5}px;

    > div {
      width: calc(50% - ${columnSpace * 0.25}px);
      margin-bottom: ${columnSpace * 0.5}px;

      &:nth-of-type(odd) {
        padding-right: ${columnSpace * 0.25}px;
      }

      &:nth-of-type(even) {
        padding-left: ${columnSpace * 0.25}px;
      }

      img {
        width: 100%;
        display: block;
      }
    }
  }
`

export const Wrapper = styled("section")`
  ${(props) => css`
    ${common(props.rowSpace, props.columnSpace)};

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

export const Grid123Wrapper = styled("section")`
  ${(props) => css`
    ${common(props.rowSpace, props.columnSpace)};

    .grid-item:not(:last-of-type) {
      margin-bottom: ${props.columnSpace}px;
    }

    @media (min-width: ${props.breakpoint1}px) {
      .grid {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
      }

      .grid-item-type-image img {
        width: 100%;
        display: block;
      }

      .grid-item {
        width: calc(50% - 15px);
        margin: 0;

        &:nth-of-type(odd) {
          margin-right: 30px;
        }
      }
    }

    @media (min-width: ${props.breakpoint2}px) {
      .grid {
        display: flex;
        flex-flow: row wrap;
      }

      .grid-item {
        width: calc(33.333333333% - 20px);

        &:nth-of-type(odd) {
          margin-right: 0;
        }

        &:nth-of-type(3n - 2),
        &:nth-of-type(3n - 1) {
          margin-right: 30px;
        }
      }
    }
  `};
`
