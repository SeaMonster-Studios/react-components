"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  text-decoration: none;\n  border-color: ", ";\n  cursor: pointer;\n\n  ", ";\n  ", ";\n\n  ", ";\n"], ["\n  text-decoration: none;\n  border-color: ", ";\n  cursor: pointer;\n\n  ", ";\n  ", ";\n\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n          background-color: rgba(255, 255, 255, 0);\n          color: ", ";\n        "], ["\n          background-color: rgba(255, 255, 255, 0);\n          color: ", ";\n        "]),
    _templateObject3 = _taggedTemplateLiteral(["\n          background-color: ", ";\n          color: ", ";\n        "], ["\n          background-color: ", ";\n          color: ", ";\n        "]),
    _templateObject4 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "]),
    _templateObject5 = _taggedTemplateLiteral(["\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0;\n  }\n"], ["\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0;\n  }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n        transform-origin: center;\n        position: relative;\n        border-color: ", ";\n\n        &::after {\n          content: \"\";\n          position: absolute;\n          border: 1px solid;\n          border-radius: inherit;\n          border-color: inherit;\n          top: -1px;\n          right: -1px;\n          bottom: -1px;\n          left: -1px;\n        }\n\n        &:hover,\n        &:focus {\n          text-decoration: none;\n          color: ", ";\n          background-color: ", ";\n\n          &::after {\n            animation: ", " 0.5s;\n          }\n        }\n      "], ["\n        transform-origin: center;\n        position: relative;\n        border-color: ", ";\n\n        &::after {\n          content: \"\";\n          position: absolute;\n          border: 1px solid;\n          border-radius: inherit;\n          border-color: inherit;\n          top: -1px;\n          right: -1px;\n          bottom: -1px;\n          left: -1px;\n        }\n\n        &:hover,\n        &:focus {\n          text-decoration: none;\n          color: ", ";\n          background-color: ", ";\n\n          &::after {\n            animation: ", " 0.5s;\n          }\n        }\n      "]),
    _templateObject7 = _taggedTemplateLiteral(["\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          color: ", ";\n          background-color: ", ";\n\n          border-color: ", ";\n        }\n      "], ["\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          color: ", ";\n          background-color: ", ";\n\n          border-color: ", ";\n        }\n      "]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("button")(_templateObject, function (props) {
  return props.borderColor;
}, function (props) {
  return colorProps(props);
}, function (props) {
  return hoverProps(props);
}, function (props) {
  return props.styles;
});

function colorProps(props) {
  if (props.inverse) {
    switch (props.inverseStyle) {
      case "transparent":
        return (0, _reactEmotion.css)(_templateObject2, props.baseColor);
      case "default":
      default:
        return (0, _reactEmotion.css)(_templateObject3, props.textColor, props.baseColor);
    }
  } else {
    return (0, _reactEmotion.css)(_templateObject4, props.baseColor, props.textColor);
  }
}

var rippleOut = (0, _reactEmotion.keyframes)(_templateObject5);

function hoverProps(props) {
  switch (props.hoverStyle) {
    case "ripple":
      return (0, _reactEmotion.css)(_templateObject6, props.hoverBorderColor, props.inverse ? props.hoverBaseColor : props.hoverTextColor, props.inverse ? props.hoverTextColor : props.hoverBaseColor, rippleOut);
    case "default":
    default:
      return (0, _reactEmotion.css)(_templateObject7, props.inverse ? props.hoverBaseColor : props.hoverTextColor, props.inverse ? props.hoverTextColor : props.hoverBaseColor, props.hoverBorderColor);
  }
}

//# sourceMappingURL=style.js.map