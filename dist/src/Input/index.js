"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;
//


var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _io = require("../../utils/io");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = exports.Input = (_temp2 = _class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ""
    }, _this.handleChange = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.persist();
                if (event.currentTarget instanceof HTMLInputElement) {
                  _this.setState({ value: event.currentTarget.value });

                  if (event.currentTarget instanceof HTMLInputElement && _this.props.valueHasChanged) {
                    _this.props.valueHasChanged(event.currentTarget.value);
                  }
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.handleFileChange = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
        var fileContents;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.persist();

                if (!(event.currentTarget instanceof HTMLInputElement && event.currentTarget.files.length)) {
                  _context2.next = 12;
                  break;
                }

                _context2.prev = 2;
                _context2.next = 5;
                return (0, _io.readUploadedFileAsText)(event.currentTarget.files[0]);

              case 5:
                fileContents = _context2.sent;

                if (_this.props.valueHasChanged) {
                  _this.props.valueHasChanged(event.currentTarget, fileContents);
                } else {
                  console.error("You must provide an valueHasChanged to retrieve file info for inputs with a type of `file`");
                }
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);

                console.error(_context2.t0.message);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 9]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          type = _props.type,
          value = _props.value,
          onChange = _props.onChange,
          valueHasChanged = _props.valueHasChanged,
          children = _props.children,
          label = _props.label,
          className = _props.className,
          style = _props.style;


      var outerProps = {
        className: className,
        style: style
      };

      var innerProps = {
        "data-testid": "component-input",
        type: type,
        value: value || this.state.value,
        onChange: type === "file" ? this.handleFileChange : onChange || this.handleChange
      };

      switch (type) {
        case "file":
        case "button":
        case "submit":
          if (children) {
            return children({
              input: React.createElement(
                _style.Wrapper,
                { "data-testid": "component-input-wrapper" },
                React.createElement("input", innerProps),
                React.createElement(
                  "span",
                  {
                    "data-testid": "component-input-label",
                    className: className,
                    style: style
                  },
                  label
                )
              )
            });
          }
          return null;
        default:
          return React.createElement("input", Object.assign({}, innerProps, outerProps));
      }
    }
  }]);

  return Input;
}(React.Component), _class.propTypes = {
  /** 'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'hidden',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
    'button',
    'submit',
    'file'
   */
  type: _propTypes2.default.oneOf(["color", "date", "datetime", "datetime-local", "email", "hidden", "month", "number", "password", "range", "search", "tel", "text", "time", "url", "week", "button", "submit", "file"]),
  /** It's provided the new value each time it changes */
  valueHasChanged: _propTypes2.default.func,
  /** Used for User/non-component controlled state */
  onChange: _propTypes2.default.func,
  /** Required for and wsed with types of 'file', 'button', and 'submit' */
  children: _propTypes2.default.func,
  /** Used for User/non-component controlled state */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /** Used with type of 'file' */
  label: _propTypes2.default.string
}, _class.defaultProps = {
  type: "text",
  style: {},
  label: "Upload",
  className: ""
}, _temp2);

//# sourceMappingURL=index.js.map