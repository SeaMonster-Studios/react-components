"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  ", ";\n  ", ";\n"], ["\n  position: relative;\n  width: 100%;\n\n  ", ";\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    right: 0;\n  "], ["\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    right: 0;\n  "]),
    _templateObject3 = _taggedTemplateLiteral(["\n        ", ";\n        transform: translateY(-", "px);\n\n        ", ";\n      "], ["\n        ", ";\n        transform: translateY(-", "px);\n\n        ", ";\n      "]),
    _templateObject4 = _taggedTemplateLiteral(["\n        ", ";\n        transition: transform 0.5s ease;\n        transform: translateY(-", "px);\n\n        ", ";\n      "], ["\n        ", ";\n        transition: transform 0.5s ease;\n        transform: translateY(-", "px);\n\n        ", ";\n      "]),
    _templateObject5 = _taggedTemplateLiteral(["\n        ", ";\n        transition: transform 0.5s ease;\n        ", ";\n      "], ["\n        ", ";\n        transition: transform 0.5s ease;\n        ", ";\n      "]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _reactEmotion.injectGlobal)("\n  body {\n    position: relative;\n  }\n");

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("div")(_templateObject, function (props) {
  return scrollingProps(props);
}, function (props) {
  return props.styles;
});

function scrollingProps(props) {
  var common = (0, _reactEmotion.css)(_templateObject2);

  switch (props.position) {
    case "hidden":
      return (0, _reactEmotion.css)(_templateObject3, common, props.selfHeight, props.hiddenClassName);
    case "ready":
      return (0, _reactEmotion.css)(_templateObject4, common, props.selfHeight, props.readyClassName);
    case "active":
      {
        return (0, _reactEmotion.css)(_templateObject5, common, props.activeClassName);
      }
    default:
      return "";
  }
}

//# sourceMappingURL=style.js.map