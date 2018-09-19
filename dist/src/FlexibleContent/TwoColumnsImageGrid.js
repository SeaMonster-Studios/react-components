"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoColumnsImageGrid = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _LazyLoadImage = require("../LazyLoadImage");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var TwoColumnsImageGrid = function TwoColumnsImageGrid(_ref) {
  var rowSpace = _ref.rowSpace,
      columnSpace = _ref.columnSpace,
      breakpoint = _ref.breakpoint,
      className = _ref.className,
      adminclass = _ref.adminclass,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["rowSpace", "columnSpace", "breakpoint", "className", "adminclass", "style"]);

  return _react2.default.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-two-columns-image-grid",
      rowSpace: rowSpace,
      columnSpace: columnSpace,
      breakpoint: breakpoint,

      className: className + " " + adminclass,
      style: style
    },
    props.title && _react2.default.createElement("h2", Object.assign({ className: "title" }, (0, _utils.setHtml)(props.title))),
    props.title && props.subtitle && _react2.default.createElement("h3", Object.assign({ className: "subtitle" }, (0, _utils.setHtml)(props.subtitle))),
    _react2.default.createElement(
      "div",
      { className: "row bp-align-center" },
      typeof props.content === "string" ? _react2.default.createElement("div", Object.assign({
        className: "column column-half column-content"
      }, (0, _utils.setHtml)(props.content))) : _react2.default.createElement(
        "div",
        { className: "column column-half column-content" },
        props.content()
      ),
      _react2.default.createElement(
        "div",
        { className: "column column-half column-grid" },
        props.images.map(function (image, i) {
          return props.renderImage ? _react2.default.createElement(
            "div",
            { key: image.url + i, className: "img-wrapper" },
            props.renderImage(image)
          ) : _react2.default.createElement(
            "div",
            { key: image.url + i, className: "img-wrapper" },
            _react2.default.createElement(_LazyLoadImage.LazyLoadImage, { src: image.url, alt: image.alt }),
            _react2.default.createElement(
              "div",
              { className: "caption" },
              image.caption
            )
          );
        })
      )
    )
  );
};

exports.TwoColumnsImageGrid = TwoColumnsImageGrid;
TwoColumnsImageGrid.propTypes = {
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
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired,
    caption: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  /** Custom render prop for each image in the grid (passes image object) */
  renderImage: _propTypes2.default.func,
  image_grid_position: _propTypes2.default.oneOf(["right", "left"])
};

TwoColumnsImageGrid.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992
};

//# sourceMappingURL=TwoColumnsImageGrid.js.map