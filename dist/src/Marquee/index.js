"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marquee = Marquee;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function Marquee(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    _style.Wrapper,
    Object.assign({}, props, { "data-testid": "component-content-marquee" }),
    children
  );
}

Marquee.propTypes = {
  image: _propTypes2.default.string.isRequired,
  gradient: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};

Marquee.defaultProps = {
  gradient: "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))",
  style: {
    minHeight: "510px",
    padding: "45px 0"
  }
};

//# sourceMappingURL=index.js.map