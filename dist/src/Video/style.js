"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  .caption {\n    font-size: 14px;\n    line-height: 1.125;\n    background-color: rgb(0, 0, 0, 0.05);\n    padding: 10px;\n  }\n\n  .video-toggle {\n    background: none;\n    border: none;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n\n    img {\n      position: relative;\n      z-index: 1;\n    }\n\n    .toggle-bg {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 0, 0, 0.8);\n      z-index: 2;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      transition: width 0.2s ease, height 0.2s ease, border 0.2s ease;\n    }\n\n    .icon-wrapper {\n      z-index: 3;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      svg {\n        width: 35px;\n\n        path {\n          fill: rgba(255, 255, 255, 1);\n        }\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .toggle-bg {\n        width: 100px;\n        height: 65px;\n        border-radius: 5px;\n      }\n    }\n  }\n"], ["\n  .caption {\n    font-size: 14px;\n    line-height: 1.125;\n    background-color: rgb(0, 0, 0, 0.05);\n    padding: 10px;\n  }\n\n  .video-toggle {\n    background: none;\n    border: none;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n\n    img {\n      position: relative;\n      z-index: 1;\n    }\n\n    .toggle-bg {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 0, 0, 0.8);\n      z-index: 2;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      transition: width 0.2s ease, height 0.2s ease, border 0.2s ease;\n    }\n\n    .icon-wrapper {\n      z-index: 3;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      svg {\n        width: 35px;\n\n        path {\n          fill: rgba(255, 255, 255, 1);\n        }\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .toggle-bg {\n        width: 100px;\n        height: 65px;\n        border-radius: 5px;\n      }\n    }\n  }\n"]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

(0, _reactEmotion.injectGlobal)("\n  .video-responsive {\n    overflow: hidden;\n    padding-bottom: 56.25%;\n    position: relative;\n    height: 0;\n  }\n\n  .video-responsive iframe {\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n  }\n");

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("div")(_templateObject);

//# sourceMappingURL=style.js.map