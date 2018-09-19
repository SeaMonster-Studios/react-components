"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Button = exports.Button = function Button(props) {
  var baseColor = props.baseColor,
      textColor = props.textColor,
      borderColor = props.borderColor,
      hoverBaseColor = props.hoverBaseColor,
      hoverTextColor = props.hoverTextColor,
      hoverBorderColor = props.hoverBorderColor,
      inverse = props.inverse,
      inverseStyle = props.inverseStyle,
      hoverStyle = props.hoverStyle,
      style = props.style,
      className = props.className,
      children = props.children;


  return React.createElement(
    _style.Wrapper,
    {
      "data-testid": "component-button",
      baseColor: baseColor,
      textColor: textColor,
      borderColor: borderColor || baseColor,
      inverse: inverse,
      inverseStyle: inverseStyle,
      hoverStyle: hoverStyle,
      hoverBaseColor: hoverBaseColor || baseColor,
      hoverTextColor: hoverTextColor || textColor,
      hoverBorderColor: hoverBorderColor || hoverBaseColor || baseColor,
      style: style,
      className: className
    },
    children
  );
};
//


Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  /** Css color value. */
  baseColor: _propTypes2.default.string,
  /** Css color value. */
  textColor: _propTypes2.default.string,
  /** Css color value. Defaults to baseColor */
  borderColor: _propTypes2.default.string,
  /** Css color value. Defaults to baseColor */
  hoverBaseColor: _propTypes2.default.string,
  /** Css color value. Defaults to textColor */
  hoverTextColor: _propTypes2.default.string,
  /** Css color value. Defaults to hoverBaseColor || baseColor */
  hoverBorderColor: _propTypes2.default.string,
  inverse: _propTypes2.default.bool,
  inverseStyle: _propTypes2.default.oneOf(["default", "transparent"]),
  hoverStyle: _propTypes2.default.oneOf(["default", "ripple"]),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

Button.defaultProps = {
  inverse: false,
  inverseStyle: "default",
  hoverStyle: "default",
  textColor: "rgb(255,255,255)",
  baseColor: "rgb(0,0,0)",
  className: "",
  style: {
    transition: "all 0.5s ease",
    padding: "10px 30px"
  }
};

//# sourceMappingURL=index.js.map