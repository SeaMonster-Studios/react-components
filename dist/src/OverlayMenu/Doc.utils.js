"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExampleHeader = exports.overlayClassName = exports.Wrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _templateObject = _taggedTemplateLiteral(["\n  padding: 15px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  .logo-wrapper {\n    img {\n      padding-right: 30px;\n      max-width: 80px;\n    }\n  }\n\n  .hamburger {\n    transform: scale(0.75);\n  }\n\n  .btn {\n    display: none;\n    margin-right: 15px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n"], ["\n  padding: 15px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  .logo-wrapper {\n    img {\n      padding-right: 30px;\n      max-width: 80px;\n    }\n  }\n\n  .hamburger {\n    transform: scale(0.75);\n  }\n\n  .btn {\n    display: none;\n    margin-right: 15px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  background-color: rgb(255, 255, 255);\n\n  a:not(.btn) {\n    color: rgb(0, 0, 0);\n  }\n\n  .above {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .logo-wrapper {\n    img {\n      padding-right: 30px;\n      max-width: 80px;\n    }\n  }\n\n  .hamburger {\n    transform: scale(0.75);\n  }\n\n  .btn {\n    display: none;\n    margin-right: 15px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  nav {\n    text-align: center;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-size: 28px;\n    margin-bottom: 60px;\n    margin-top: 60px;\n\n    a {\n      display: block;\n      padding: 20px;\n\n      &:hover,\n      &:focus {\n        text-decoration: none;\n        color: tomato;\n      }\n    }\n  }\n\n  .below {\n    padding-bottom: 60px;\n    text-align: center;\n  }\n\n  .btns-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 30px;\n\n    .btn {\n      margin: 0 15px;\n    }\n  }\n"], ["\n  background-color: rgb(255, 255, 255);\n\n  a:not(.btn) {\n    color: rgb(0, 0, 0);\n  }\n\n  .above {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .logo-wrapper {\n    img {\n      padding-right: 30px;\n      max-width: 80px;\n    }\n  }\n\n  .hamburger {\n    transform: scale(0.75);\n  }\n\n  .btn {\n    display: none;\n    margin-right: 15px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  nav {\n    text-align: center;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-size: 28px;\n    margin-bottom: 60px;\n    margin-top: 60px;\n\n    a {\n      display: block;\n      padding: 20px;\n\n      &:hover,\n      &:focus {\n        text-decoration: none;\n        color: tomato;\n      }\n    }\n  }\n\n  .below {\n    padding-bottom: 60px;\n    text-align: center;\n  }\n\n  .btns-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 30px;\n\n    .btn {\n      margin: 0 15px;\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var Wrapper = exports.Wrapper = (0, _reactEmotion2.default)("header")(_templateObject);

var overlayClassName = exports.overlayClassName = (0, _reactEmotion.css)(_templateObject2);

var MobileBar = function MobileBar(props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "div",
      { className: "left" },
      _react2.default.createElement(
        "div",
        { className: "logo-wrapper" },
        _react2.default.createElement("img", { src: "https://picsum.photos/100x100", alt: "" })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "right" },
      _react2.default.createElement(
        "button",
        {
          className: "" + (props.overlayIsActive ? "is-active" : ""),
          type: "button",
          onClick: props.toggleOverlay
        },
        props.overlayIsActive ? "Close" : "Open"
      )
    )
  );
};

MobileBar.propTypes = {
  overlayIsActive: _propTypes2.default.bool.isRequired,
  toggleOverlay: _propTypes2.default.func.isRequired
};

var ExampleHeader = exports.ExampleHeader = (_temp2 = _class = function (_React$Component) {
  _inherits(ExampleHeader, _React$Component);

  function ExampleHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExampleHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExampleHeader.__proto__ || Object.getPrototypeOf(ExampleHeader)).call.apply(_ref, [this].concat(args))), _this), _this.toggleOverlay = function () {
      _this.setState(function (prevState) {
        return {
          overlayIsActive: !prevState.overlayIsActive
        };
      });
    }, _this.initialState = {
      overlayIsActive: false
    }, _this.state = _this.initialState, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExampleHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(MobileBar, {
          overlayIsActive: this.state.overlayIsActive,
          toggleOverlay: this.toggleOverlay
        }),
        this.props.children({
          isActive: this.state.overlayIsActive,
          className: overlayClassName,
          toggle: this.toggleOverlay,
          bar: _react2.default.createElement(MobileBar, {
            overlayIsActive: this.state.overlayIsActive,
            toggleOverlay: this.toggleOverlay
          })
        })
      );
    }
  }]);

  return ExampleHeader;
}(_react2.default.Component), _class.propTypes = {
  /** A function that receives the isActive state, the toggle function, a className for styles, and the same Bar used when overlay isn't active */
  children: _propTypes2.default.func.isRequired
}, _temp2);

//# sourceMappingURL=Doc.utils.js.map