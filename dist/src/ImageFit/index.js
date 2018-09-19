"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageFit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
//


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectFitImages = require("object-fit-images");

var _objectFitImages2 = _interopRequireDefault(_objectFitImages);

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageFit = exports.ImageFit = (_temp = _class = function (_React$Component) {
  _inherits(ImageFit, _React$Component);

  function ImageFit() {
    _classCallCheck(this, ImageFit);

    return _possibleConstructorReturn(this, (ImageFit.__proto__ || Object.getPrototypeOf(ImageFit)).apply(this, arguments));
  }

  _createClass(ImageFit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _objectFitImages2.default)(this.imgRef);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          fit = _props.fit,
          position = _props.position,
          className = _props.className,
          src = _props.src,
          alt = _props.alt;

      return _react2.default.createElement(_style.Wrapper, {
        src: src,
        alt: alt,
        "data-testid": "component-image-fit",
        style: style,
        className: className,
        innerRef: function innerRef(ref) {
          return _this2.imgRef = ref;
        },
        fit: fit,
        position: position
      });
    }
  }]);

  return ImageFit;
}(_react2.default.Component), _class.propTypes = {
  alt: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,
  fit: _propTypes2.default.oneOf(["cover", "contain", "fill", "scale-down", "none"]),
  position: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
}, _class.defaultProps = {
  position: "center",
  fit: "cover",
  className: "",
  alt: "",
  style: {}
}, _temp);

//# sourceMappingURL=index.js.map