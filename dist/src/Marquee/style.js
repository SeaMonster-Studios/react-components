"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n      background: ", ", url(", ");\n      background-size: cover;\n      background-position: center center;\n\n      ", ";\n    "], ["\n      background: ", ", url(", ");\n      background-size: cover;\n      background-position: center center;\n\n      ", ";\n    "]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("div")(_templateObject, function (_ref) {
  var gradient = _ref.gradient,
      image = _ref.image,
      styles = _ref.styles;
  return (0, _reactEmotion.css)(_templateObject2, gradient, image, styles);
});

//# sourceMappingURL=style.js.map