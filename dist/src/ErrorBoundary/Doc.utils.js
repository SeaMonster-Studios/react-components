"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Child = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Child = exports.Child = function (_React$Component) {
  _inherits(Child, _React$Component);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMe: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "span",
        {
          style: { cursor: "pointer" },
          "data-testid": "component-error-boundary-test-child",
          onClick: function onClick() {
            return _this2.setState(function (prevState) {
              return Object.assign({}, prevState, {
                errorMe: true
              });
            });
          }
        },
        _react2.default.createElement(
          "span",
          null,
          "I am a child of an `ErrorBoundary`. Click me to see what happens when an error occurs beneath an `ErrorBoundary`"
        ),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null),
        _react2.default.createElement(
          "span",
          null,
          "Please note: I will provide a Report Form if you have Sentry.io/Raven setup within your app (when the error occurs)"
        ),
        this.state.errorMe ? _react2.default.createElement(IDontExist, null) : _react2.default.createElement("span", null)
      );
    }
  }]);

  return Child;
}(_react2.default.Component);

//# sourceMappingURL=Doc.utils.js.map