"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  border: ", "px solid #000;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  .input-wrapper {\n    min-width: ", "px;\n    min-height: ", "px;\n    margin-top: -", "px;\n    overflow: hidden;\n    position: relative;\n    padding: 0;\n  }\n\n  input {\n    opacity: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: scale(100);\n    cursor: pointer;\n    position: absolute;\n    z-index: 2;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  .mark {\n    position: absolute;\n    z-index: 1;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    > * {\n      position: absolute;\n    }\n  }\n\n  ", " ", ";\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border: ", "px solid #000;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  .input-wrapper {\n    min-width: ", "px;\n    min-height: ", "px;\n    margin-top: -", "px;\n    overflow: hidden;\n    position: relative;\n    padding: 0;\n  }\n\n  input {\n    opacity: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: scale(100);\n    cursor: pointer;\n    position: absolute;\n    z-index: 2;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  .mark {\n    position: absolute;\n    z-index: 1;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    > * {\n      position: absolute;\n    }\n  }\n\n  ", " ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n      background-color: #000;\n\n      ", ";\n    "], ["\n      background-color: #000;\n\n      ", ";\n    "]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var borderWidth = 2;

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("button")(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, borderWidth, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, borderWidth * 2, function (props) {
  return props.styles;
}, function (props) {
  return setActiveStyles(props);
});

function setActiveStyles(props) {
  if (props.isChecked && !props.hasOnIcon) {
    return (0, _reactEmotion.css)(_templateObject2, props.activeStyles);
  } else if (props.isChecked) {
    return props.activeStyles;
  } else {
    return "";
  }
}

//# sourceMappingURL=style.js.map