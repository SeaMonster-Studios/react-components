"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoColumnsStacked = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

var _utils = require("../../utils");

var _LazyLoadImage = require("../LazyLoadImage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var TwoColumnsStacked = function TwoColumnsStacked(_ref) {
  var className = _ref.className,
      style = _ref.style,
      columnSpace = _ref.columnSpace,
      adminclass = _ref.adminclass,
      breakpoint = _ref.breakpoint,
      rowSpace = _ref.rowSpace,
      one_content = _ref.one_content,
      two_content = _ref.two_content,
      props = _objectWithoutProperties(_ref, ["className", "style", "columnSpace", "adminclass", "breakpoint", "rowSpace", "one_content", "two_content"]);

  return _react2.default.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-two-columns-stacked",
      columnSpace: columnSpace,
      className: className + " " + adminclass,
      style: style,
      breakpoint: breakpoint,
      rowSpace: rowSpace
    },
    props.title && _react2.default.createElement("h2", Object.assign({ className: "title" }, (0, _utils.setHtml)(props.title))),
    props.title && props.subtitle && _react2.default.createElement("h3", Object.assign({ className: "subtitle" }, (0, _utils.setHtml)(props.subtitle))),
    _react2.default.createElement(
      "div",
      { className: "row bp-align-center row-stacked" },
      _react2.default.createElement(
        "div",
        { className: "column column-half " },
        _react2.default.createElement(_LazyLoadImage.LazyLoadImage, {
          className: "column-image",
          src: props.one_image.url,
          alt: props.one_image.alt
        })
      ),
      typeof one_content === "string" ? _react2.default.createElement("div", Object.assign({
        className: "column column-half column-one-content"
      }, (0, _utils.setHtml)(one_content))) : _react2.default.createElement(
        "div",
        { className: "column column-half column-one-content" },
        one_content()
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "row bp-align-center" },
      _react2.default.createElement(
        "div",
        { className: "column column-half order-bp-2" },
        _react2.default.createElement(_LazyLoadImage.LazyLoadImage, {
          className: "column-image",
          src: props.two_image.url,
          alt: props.two_image.alt
        })
      ),
      typeof one_content === "string" ? _react2.default.createElement("div", Object.assign({
        className: "column column-half column-two-content order-bp-1"
      }, (0, _utils.setHtml)(two_content))) : _react2.default.createElement(
        "div",
        { className: "column column-half column-two-content order-bp-1" },
        two_content()
      )
    )
  );
};

exports.TwoColumnsStacked = TwoColumnsStacked;
TwoColumnsStacked.propTypes = {
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
  two_content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  one_image: _propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired
  }).isRequired,
  two_image: _propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired
  }).isRequired
};

TwoColumnsStacked.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992
};

//# sourceMappingURL=TwoColumnsStacked.js.map