"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoColumns = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var TwoColumns = function TwoColumns(_ref) {
  var className = _ref.className,
      adminclass = _ref.adminclass,
      style = _ref.style,
      columnSpace = _ref.columnSpace,
      rowSpace = _ref.rowSpace,
      breakpoint = _ref.breakpoint,
      one_content = _ref.one_content,
      two_content = _ref.two_content,
      props = _objectWithoutProperties(_ref, ["className", "adminclass", "style", "columnSpace", "rowSpace", "breakpoint", "one_content", "two_content"]);

  return _react2.default.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-two-columns",
      columnSpace: columnSpace,
      breakpoint: breakpoint,
      className: className + " " + adminclass,
      style: style,
      rowSpace: rowSpace
    },
    props.title && _react2.default.createElement("h2", Object.assign({ className: "title" }, (0, _utils.setHtml)(props.title))),
    props.title && props.subtitle && _react2.default.createElement("h3", Object.assign({ className: "subtitle" }, (0, _utils.setHtml)(props.subtitle))),
    _react2.default.createElement(
      "div",
      { className: "row" },
      typeof one_content === "string" ? _react2.default.createElement("div", Object.assign({
        className: "column column-half column-one-content"
      }, (0, _utils.setHtml)(one_content))) : _react2.default.createElement(
        "div",
        { className: "column column-half column-one-content" },
        one_content()
      ),
      typeof two_content === "string" ? _react2.default.createElement("div", Object.assign({
        className: "column column-half column-two-content"
      }, (0, _utils.setHtml)(two_content))) : _react2.default.createElement(
        "div",
        { className: "column column-half column-two-content" },
        two_content()
      )
    )
  );
};

exports.TwoColumns = TwoColumns;
TwoColumns.propTypes = {
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
  one_content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  /** HTML string (typically from a CMS), or a render prop */
  two_content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired
};

TwoColumns.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992
};

//# sourceMappingURL=TwoColumns.js.map