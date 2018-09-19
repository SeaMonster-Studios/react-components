"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoColumnsThreeColumnList = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var TwoColumnsThreeColumnList = function TwoColumnsThreeColumnList(_ref) {
  var columnSpace = _ref.columnSpace,
      rowSpace = _ref.rowSpace,
      breakpoint = _ref.breakpoint,
      className = _ref.className,
      adminclass = _ref.adminclass,
      style = _ref.style,
      column_one = _ref.column_one,
      column_two = _ref.column_two,
      renderItem = _ref.renderItem,
      props = _objectWithoutProperties(_ref, ["columnSpace", "rowSpace", "breakpoint", "className", "adminclass", "style", "column_one", "column_two", "renderItem"]);

  return _react2.default.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-two-columns-three-column-list",
      className: className + " " + adminclass,
      style: style,
      columnSpace: columnSpace,
      breakpoint: breakpoint,
      rowSpace: rowSpace
    },
    props.title && _react2.default.createElement("h2", Object.assign({ className: "title" }, (0, _utils.setHtml)(props.title))),
    props.title && props.subtitle && _react2.default.createElement("h3", Object.assign({ className: "subtitle" }, (0, _utils.setHtml)(props.subtitle))),
    _react2.default.createElement(
      "div",
      { className: "row" },
      _react2.default.createElement(
        "div",
        { className: "column column-half column-one-content" },
        typeof column_one === "string" ? _react2.default.createElement("div", (0, _utils.setHtml)(column_one)) : _react2.default.createElement(
          "div",
          null,
          column_one()
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "column column-half column-two-content" },
        typeof column_two === "string" ? _react2.default.createElement("div", (0, _utils.setHtml)(column_two)) : _react2.default.createElement(
          "div",
          null,
          column_two()
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "row" },
      props.column_list.map(function (item, i) {
        return renderItem ? _react2.default.createElement(
          "div",
          {
            key: "column-list=item-" + i,
            className: "column column-third column-list-item"
          },
          renderItem(item)
        ) : _react2.default.createElement("div", Object.assign({
          key: "column-list=item-" + i,
          className: "column column-third column-list-item"
        }, (0, _utils.setHtml)(item.content)));
      })
    )
  );
};

exports.TwoColumnsThreeColumnList = TwoColumnsThreeColumnList;
TwoColumnsThreeColumnList.propTypes = {
  /** Vertical spacing base */
  rowSpace: _propTypes2.default.number,
  /** Horizontal spacing base */
  columnSpace: _propTypes2.default.number,
  /** Mobile first breakpoint */
  breakpoint: _propTypes2.default.number,
  className: _propTypes2.default.string,
  /** Secondary className. With WP/ACF, comes from the admin when content is created  */
  adminclass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  /** HTML string (typically from a CMS), or a render prop */
  column_one: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  /** HTML string (typically from a CMS), or a render prop */
  column_two: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  column_list: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    content: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  /** Custom render prop for each item in the column_list (passes item object) */
  renderItem: _propTypes2.default.func
};

TwoColumnsThreeColumnList.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992
};

//# sourceMappingURL=TwoColumnsThreeColumnList.js.map