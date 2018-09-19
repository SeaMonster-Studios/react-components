"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

var _LazyLoadImage = require("../LazyLoadImage");

var _Icons = require("../Icons");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var Video = exports.Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      videoIsPlaying: false
    }, _this.videoWrapperRef = _react2.default.createRef(), _this.playVideo = function () {
      _this.setState({ videoIsPlaying: true });
      setTimeout(function () {
        var videoWrapper = _this.videoWrapperRef.current;

        if (videoWrapper) {
          var video = videoWrapper.querySelector("iframe");

          if (video) {
            video.setAttribute("src", video.getAttribute("src") + "&autoplay=1");
          }
        }
      }, 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          props = _objectWithoutProperties(_props, ["className", "style"]);

      return _react2.default.createElement(
        _style.Wrapper,
        {
          "data-testid": "component-video",
          className: className,
          style: style
        },
        this.state.videoIsPlaying ? _react2.default.createElement("div", Object.assign({
          className: "video-responsive",
          ref: this.videoWrapperRef
        }, (0, _utils.setHtml)(props.video))) : _react2.default.createElement(
          "button",
          { className: "video-toggle", onClick: this.playVideo },
          _react2.default.createElement("div", { className: "toggle-bg" }),
          _react2.default.createElement(_LazyLoadImage.LazyLoadImage, { src: props.thumbnail, className: "thumbnail" }),
          _react2.default.createElement(
            "div",
            { className: "icon-wrapper" },
            _react2.default.createElement(_Icons.Play, null)
          )
        ),
        props.caption && _react2.default.createElement(
          "p",
          { className: "caption" },
          props.caption
        )
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

Video.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  video: _propTypes2.default.string.isRequired,
  thumbnail: _propTypes2.default.string.isRequired,
  caption: _propTypes2.default.string
};

Video.defaultProps = {
  className: "",
  style: {
    maxWidth: "720px",
    margin: "0 auto"
  }
};

//# sourceMappingURL=index.js.map