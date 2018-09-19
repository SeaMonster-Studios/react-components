"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneColumnVideo = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

var _Video = require("../Video");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var OneColumnVideo = function OneColumnVideo(_ref) {
  var columnSpace = _ref.columnSpace,
      rowSpace = _ref.rowSpace,
      breakpoint = _ref.breakpoint,
      className = _ref.className,
      adminclass = _ref.adminclass,
      style = _ref.style,
      videoProps = _ref.videoProps,
      props = _objectWithoutProperties(_ref, ["columnSpace", "rowSpace", "breakpoint", "className", "adminclass", "style", "videoProps"]);

  return _react2.default.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-one-column-video",
      className: className + " " + adminclass,
      columnSpace: columnSpace,
      style: style,
      breakpoint: breakpoint,
      rowSpace: rowSpace
    },
    _react2.default.createElement(_Video.Video, Object.assign({}, props, videoProps))
  );
};

exports.OneColumnVideo = OneColumnVideo;
OneColumnVideo.propTypes = {
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
  video: _propTypes2.default.string.isRequired,
  thumbnail: _propTypes2.default.string.isRequired,
  caption: _propTypes2.default.string,
  videoProps: _propTypes2.default.shape({
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
  })
};

OneColumnVideo.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
  videoProps: {
    className: "",
    style: {
      maxWidth: "720px",
      margin: "0 auto"
    }
  }
};

//# sourceMappingURL=OneColumnVideo.js.map