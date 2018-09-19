"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require("react-testing-library");

var _ = require("./");

var _testing = require("../../utils/testing");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var originalEnv = process.env.NODE_ENV;

beforeAll(function () {
  process.env.NODE_ENV = "production";
});

afterAll(function () {
  process.env.NODE_ENV = originalEnv;
});

afterEach(_reactTestingLibrary.cleanup);

describe("ErrorBoundary Component Test", function () {
  it("Renders children when there is no app error", function () {
    var _renderSetup = renderSetup(),
        child = _renderSetup.child;

    expect(child).toBeDefined();
  });

  it("Renders error message and report form when there is an error", function () {
    /* eslint-disable-next-line no-console */
    console.error = function () {
      return undefined;
    };

    var _renderSetup2 = renderSetup(),
        container = _renderSetup2.container,
        queryByTestId = _renderSetup2.queryByTestId,
        child = _renderSetup2.child;

    expect(child).toBeDefined();

    try {
      (0, _testing.clickEvent)(child);
    } catch (error) {
      swallowError();
    }

    expect(queryByTestId("component-error-boundary")).toBeDefined();
    expect(queryByTestId("component-error-boundary-form")).toBeDefined();
    expect(container.firstChild).toMatchSnapshot();
  });
});

var swallowError = function swallowError() {
  return null;
};

function renderSetup() {
  var Child = function (_React$Component) {
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
            "data-testid": "component-error-boundary-test-child",
            onClick: function onClick() {
              return _this2.setState(function (prevState) {
                return Object.assign({}, prevState, {
                  errorMe: true
                });
              });
            }
          },
          this.state.errorMe ? _react2.default.createElement(IDontExist, null) : _react2.default.createElement("span", null)
        );
      }
    }]);

    return Child;
  }(_react2.default.Component);

  var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(
    _.ErrorBoundary,
    null,
    _react2.default.createElement(Child, null)
  ));
  var child = wrapper.getByTestId("component-error-boundary-test-child");

  return Object.assign({}, wrapper, {
    child: child
  });
}

//# sourceMappingURL=index.spec.js.map