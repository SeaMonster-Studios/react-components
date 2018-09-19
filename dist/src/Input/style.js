"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n\n  input {\n    font-size: 0;\n    display: inline-block;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    width: 100%;\n    opacity: 0;\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  > span {\n    position: relative;\n    z-index: 1;\n    display: inline-block;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  input {\n    font-size: 0;\n    display: inline-block;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    width: 100%;\n    opacity: 0;\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  > span {\n    position: relative;\n    z-index: 1;\n    display: inline-block;\n  }\n"]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("span")(_templateObject);

//# sourceMappingURL=style.js.map