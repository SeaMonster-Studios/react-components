// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function combineWithOptionalStyles(styles, styles2) {
  if (styles2 !== undefined) {
    return ReactDOMRe.Style[/* combine */0](styles, Js_primitive.valFromOption(styles2));
  } else {
    return styles;
  }
}

function color_of_rgba(color) {
  return Css.rgba(color.r, color.g, color.b, color.a);
}

function cssInherit(x) {
  return Css.unsafe(x, "inherit");
}

function pseudoContent(x) {
  return Css.unsafe("content", x);
}

exports.combineWithOptionalStyles = combineWithOptionalStyles;
exports.color_of_rgba = color_of_rgba;
exports.cssInherit = cssInherit;
exports.pseudoContent = pseudoContent;
/* Css Not a pure module */