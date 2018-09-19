"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultClassName = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  padding: 15px;\n  display: block;\n  background-color: rgba(255, 255, 255, 0.98);\n  position: absolute;\n  z-index: 900;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: scroll;\n  perspective: 1200;\n\n  nav {\n    display: flex;\n    flex-direction: column;\n  }\n"], ["\n  padding: 15px;\n  display: block;\n  background-color: rgba(255, 255, 255, 0.98);\n  position: absolute;\n  z-index: 900;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: scroll;\n  perspective: 1200;\n\n  nav {\n    display: flex;\n    flex-direction: column;\n  }\n"]);

var _emotion = require("emotion");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _emotion.injectGlobal)({
  "body.component-overlay-menu-active": {
    maxHeight: "100vh",
    overflow: "hidden"
  }
});

var defaultClassName = exports.defaultClassName = (0, _emotion.css)(_templateObject);

//# sourceMappingURL=style.js.map