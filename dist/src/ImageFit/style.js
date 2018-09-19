"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  font-family: 'object-fit: ", "; object-position: ", "';\n  object-fit: ", ";\n  object-position: ", ";\n"], ["\n  font-family: 'object-fit: ", "; object-position: ", "';\n  object-fit: ", ";\n  object-position: ", ";\n"]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("img")(_templateObject, function (props) {
  return props.fit;
}, function (props) {
  return props.position;
}, function (props) {
  return props.fit;
}, function (props) {
  return props.position;
});

//# sourceMappingURL=style.js.map