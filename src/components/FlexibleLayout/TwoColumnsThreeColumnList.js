import React from "react"
import PropTypes from "prop-types"
import { setHtml } from "../../utils/index"
import { Wrapper } from "./"

export const TwoColumnsThreeColumnList = ({
  columnSpace,
  rowSpace,
  breakpoint,
  className,
  adminclass,
  style,
  column_one,
  column_two,
  renderItem,
  ...props
}) => {
  return (
    <Wrapper
      {...{
        "data-testid": "component-two-columns-three-column-list",
        className: `${className} ${adminclass}`,
        style,
        columnSpace,
        breakpoint,
        rowSpace,
      }}
    >
      {props.title && <h2 className="title" {...setHtml(props.title)} />}
      {props.title &&
        props.subtitle && (
          <h3 className="subtitle" {...setHtml(props.subtitle)} />
        )}
      <div className="row">
        <div className="column column-half column-one-content">
          {typeof column_one === "string" ? (
            <div {...setHtml(column_one)} />
          ) : (
            <div>{column_one()}</div>
          )}
        </div>
        <div className="column column-half column-two-content">
          {typeof column_two === "string" ? (
            <div {...setHtml(column_two)} />
          ) : (
            <div>{column_two()}</div>
          )}
        </div>
      </div>
      <div className="row">
        {props.column_list.map((item, i) => {
          return renderItem ? (
            <div
              key={`column-list=item-${i}`}
              className="column column-third column-list-item"
            >
              {renderItem(item)}
            </div>
          ) : (
            <div
              key={`column-list=item-${i}`}
              className="column column-third column-list-item"
              {...setHtml(item.content)}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

TwoColumnsThreeColumnList.propTypes = {
  /** Vertical spacing base */
  rowSpace: PropTypes.number,
  /** Horizontal spacing base */
  columnSpace: PropTypes.number,
  /** Mobile first breakpoint */
  breakpoint: PropTypes.number,
  className: PropTypes.string,
  /** Secondary className. With WP/ACF, comes from the admin when content is created  */
  adminclass: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  /** HTML string (typically from a CMS), or a render prop */
  column_one: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  /** HTML string (typically from a CMS), or a render prop */
  column_two: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  column_list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  /** Custom render prop for each item in the column_list (passes item object) */
  renderItem: PropTypes.func,
}

TwoColumnsThreeColumnList.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
}
