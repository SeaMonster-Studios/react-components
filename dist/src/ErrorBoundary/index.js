"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;
//


var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ravenJs = require("raven-js");

var _ravenJs2 = _interopRequireDefault(_ravenJs);

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = exports.ErrorBoundary = (_temp2 = _class = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasError: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState(function () {
        return {
          hasError: true
        };
      });

      if (process.env.NODE_ENV !== "development" && typeof document !== "undefined" && error.message != "IDontExist is not defined") {
        /* eslint-disable-next-line no-console */
        console.error("Errors sent to Raven", error, info);
        _ravenJs2.default.captureException(error, { extra: info });
      } else {
        /* eslint-disable-next-line no-console */
        console.error("Error caught in Error ErrorBoundary. This will reported to Sentry when not in development.");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          className = _props.className;

      if (this.state.hasError) {
        return React.createElement(
          _style.Wrapper,
          {
            "data-testid": "component-error-boundary",
            className: className,
            style: style
          },
          React.createElement(
            "div",
            null,
            React.createElement(
              "h2",
              null,
              "Sorry, something went wrong."
            ),
            React.createElement(ReportForm, null),
            React.createElement(
              "p",
              null,
              "Please try reloading the page."
            )
          )
        );
      }
      return children;
    }
  }]);

  return ErrorBoundary;
}(React.Component), _class.propTypes = {
  children: _propTypes2.default.node.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
}, _class.defaultProps = {
  style: {},
  className: ""
}, _temp2);


var ReportForm = function ReportForm() {
  return process.env.NODE_ENV !== "development" && typeof document !== "undefined" ? React.createElement(Form, null) : React.createElement("span", null);
};

var Form = function Form() {
  return React.createElement(
    "p",
    { "data-testid": "component-error-boundary-form" },
    "This error has been reported to our development team. Please",
    " ",
    React.createElement(
      "button",
      { onClick: function onClick() {
          return _ravenJs2.default.lastEventId() && _ravenJs2.default.showReportDialog();
        } },
      "click here to fill out a report."
    )
  );
};

//# sourceMappingURL=index.js.map