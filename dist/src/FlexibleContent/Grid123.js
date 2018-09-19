"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid123 = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

var _utils = require("../../utils");

var _ImageFit = require("../ImageFit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var Grid123 = function Grid123(_ref) {
  var className = _ref.className,
      adminclass = _ref.adminclass,
      style = _ref.style,
      columnSpace = _ref.columnSpace,
      rowSpace = _ref.rowSpace,
      breakpoint1 = _ref.breakpoint1,
      breakpoint2 = _ref.breakpoint2,
      items = _ref.items,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["className", "adminclass", "style", "columnSpace", "rowSpace", "breakpoint1", "breakpoint2", "items", "type"]);

  return _react2.default.createElement(
    _style.Grid123Wrapper,
    {
      "data-testid": "component-grid123",
      className: "column-single " + className + " " + adminclass,
      style: style,
      columnSpace: columnSpace,
      rowSpace: rowSpace,
      breakpoint1: breakpoint1,
      breakpoint2: breakpoint2
    },
    props.title && _react2.default.createElement("h2", Object.assign({ className: "title" }, (0, _utils.setHtml)(props.title))),
    props.title && props.subtitle && _react2.default.createElement("h3", Object.assign({ className: "subtitle" }, (0, _utils.setHtml)(props.subtitle))),
    _react2.default.createElement(
      "div",
      { className: "grid" },
      items.map(function (item, i) {
        switch (type) {
          case "component":
            return _react2.default.createElement(
              "div",
              { className: "grid-item", key: i },
              item
            );
          case "cms-content":
            return _react2.default.createElement("div", Object.assign({ className: "grid-item", key: i }, (0, _utils.setHtml)(item.content)));
          case "cms-images":
            return _react2.default.createElement(
              "figure",
              { className: "grid-item grid-item-type-image", key: i },
              _react2.default.createElement(_ImageFit.ImageFit, { src: item.url, alt: item.alt }),
              item.caption && _react2.default.createElement(
                "figcaption",
                null,
                item.caption
              )
            );
          default:
            console.error("A type of 'cms-content', 'cms-images', or 'component' must be provided. " + type + " is not a valid type for Grid123.");
            return null;
        }
      })
    )
  );
};

exports.Grid123 = Grid123;
Grid123.propTypes = {
  /** Vertical spacing base */
  rowSpace: _propTypes2.default.number,
  /** Horizontal spacing base */
  columnSpace: _propTypes2.default.number,
  /** At this breakpoint, columns go from 1 to 2 items */
  breakpoint1: _propTypes2.default.number,
  /** At this breakpoint, columns go from 2 to 3 items */
  breakpoint2: _propTypes2.default.number,
  className: _propTypes2.default.string,
  /** Secondary className. With WP/ACF, comes from the admin when content is created  */
  adminclass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /** Array of grid items. Each item can be:
   * a react component (type === component),
   * an image object { url, alt, caption? } (type === cms-images),
   * or markup string (type === cms-content) */
  items: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
    content: _propTypes2.default.string.isRequired
  }).isRequired, _propTypes2.default.node.isRequired, _propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired,
    caption: _propTypes2.default.string
  })])).isRequired,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(["cms-content", "cms-images", "component"])
};

Grid123.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint1: 792,
  breakpoint2: 1200,
  type: "component"
};

//# sourceMappingURL=Grid123.js.map