import React from "react"
import PropTypes from "prop-types"
import { Trail, animated } from "react-spring"
import Component from "@reactions/component"
import { OneColumn } from "./OneColumn"
import { TwoColumns } from "./TwoColumns"
import { TwoColumnsImageGrid } from "./TwoColumnsImageGrid"
import { TwoColumnsImageLeads } from "./TwoColumnsImageLeads"
import { TwoColumnsStacked } from "./TwoColumnsStacked"
import { TwoColumnsThreeColumnList } from "./TwoColumnsThreeColumnList"
import { OneColumnVideo } from "./OneColumnVideo"
import { Grid123 } from "./Grid123"
import { wrapIframesInResponsiveVideo } from "../utils/index"

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

const layoutTypes = [
  "one_column",
  "two_columns",
  "two_columns_image_leads",
  "two_columns_stacked",
  "two_columns_three_column_list",
  "two_columns_image_grid",
  "video",
  "content_grid",
  "image_grid",
]

class FlexibleContentItem extends React.Component {
  static propTypes = {
    layout: PropTypes.oneOf(layoutTypes).isRequired,
    content: PropTypes.object,
    layoutProps: PropTypes.object,
  }
  render() {
    const { layout, layoutProps } = this.props
    switch (layout) {
      case "content_grid":
        return <Grid123 {...layoutProps} type="cms-content" />
      case "image_grid":
        return <Grid123 {...layoutProps} type="cms-images" />
      case "one_column":
        return <OneColumn {...layoutProps} />
      case "two_columns":
        return <TwoColumns {...layoutProps} />
      case "two_columns_image_leads":
        return <TwoColumnsImageLeads {...layoutProps} />
      case "two_columns_stacked":
        return <TwoColumnsStacked {...layoutProps} />
      case "two_columns_three_column_list":
        return <TwoColumnsThreeColumnList {...layoutProps} />
      case "two_columns_image_grid":
        return <TwoColumnsImageGrid {...layoutProps} />
      case "video":
        return <OneColumnVideo {...layoutProps} />
      default:
        return null
    }
  }
}

const AnimatedFlexibleContentItem = animated(FlexibleContentItem)

function getitemsProps(itemsProps, layout, animatedStyles) {
  const item = itemsProps.filter((item) => item.item === layout)[0]

  // There are default props for each item. However, if the user only passes in one prop for that layout type (say a className for one_column) but doesn't pass in the others (say style) then the defaultProp will be completely overridden and style wiill be undefined.

  if (item) {
    if (item.className && item.style) {
      return {
        ...item,
        className: `${layout} ${item.className} `,
        style: {},
      }
    } else if (!item.style) {
      return {
        ...item,
        lassName: `${layout} ${item.className} `,
        style: animatedStyles,
      }
    } else if (!item.className) {
      return {
        ...item,
        className: layout,
        style: {
          ...item.style,
          ...animatedStyles,
        },
      }
    } else {
      return { ...item, animatedStyles }
    }
  }
  return { ...item, style: animatedStyles }
}

export function FlexibleContent({
  className,
  items,
  style,
  rowSpace,
  columnSpace,
  breakpoint,
  itemsProps,
}) {
  return (
    <div
      data-testid="component-wp-flexible-content"
      style={style}
      className={`${className} flexible-content-component`}
    >
      <Component didMount={wrapIframesInResponsiveVideo}>
        <Trail
          from={{ opacity: 0, transform: "scale(0.99)" }}
          to={{ opacity: 1, transform: "scale(1)" }}
          keys={items.map(({ acf_fc_layout: layout }, i) => `${layout}-${i}`)}
        >
          {items.map(({ acf_fc_layout: layout, ...content }) => (styles) => (
            <AnimatedFlexibleContentItem
              {...{
                layout,
                layoutProps: {
                  ...content,
                  ...getitemsProps(itemsProps, layout, styles),
                  rowSpace,
                  columnSpace,
                  breakpoint,
                },
              }}
            />
          ))}
        </Trail>
      </Component>
    </div>
  )
}

FlexibleContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      acf_fc_layout: PropTypes.oneOf(layoutTypes).isRequired,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Vertical spacing base */
  rowSpace: PropTypes.number,
  /** Horizontal spacing base */
  columnSpace: PropTypes.number,
  /** Mobile first breakpoint */
  breakpoint: PropTypes.number,
  /** pass props that will be applied to each item of the type provided. Layout Types: [
  'one_column',
  'two_columns',
  'two_columns_image_leads',
  'two_columns_stacked',
  'two_columns_three_column_list',
  'two_columns_image_grid',
  'video',
  'content_grid',
  'image_grid'
]*/
  itemsProps: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.oneOf(layoutTypes).isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
    }).isRequired,
  ),
}

FlexibleContent.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
  itemsProps: layoutTypes.map((type) => ({
    item: type,
    className: "",
    style: {},
  })),
}
