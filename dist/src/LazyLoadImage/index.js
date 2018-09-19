"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyLoadImage = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoadImage = exports.LazyLoadImage = function LazyLoadImage(props) {
  if (typeof document !== "undefined") {
    return _react2.default.createElement(_reactLazyLoadImageComponent.LazyLoadImage, props);
  } else {
    return _react2.default.createElement("img", props);
  }
};

LazyLoadImage.propTypes = {
  src: _propTypes2.default.string.isRequired
};

//# sourceMappingURL=index.js.map