"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneColumn = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var OneColumn = exports.OneColumn = function OneColumn(_ref) {
  var className = _ref.className,
      adminclass = _ref.adminclass,
      style = _ref.style,
      columnSpace = _ref.columnSpace,
      rowSpace = _ref.rowSpace,
      breakpoint = _ref.breakpoint,
      content = _ref.content;
  return _react2.default.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-one-column",
      className: "column-single " + className + " " + adminclass,
      style: style,
      columnSpace: columnSpace,
      breakpoint: breakpoint,
      rowSpace: rowSpace
    },
    typeof content === "string" ? _react2.default.createElement("div", (0, _utils.setHtml)(content)) : _react2.default.createElement(
      "div",
      null,
      content()
    )
  );
};

OneColumn.propTypes = {
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
  /** HTML string (typically from a CMS), or a render prop */
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired
};

OneColumn.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992
};

//# sourceMappingURL=OneColumn.js.map