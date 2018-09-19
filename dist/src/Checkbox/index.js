"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
//


var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpring = require("react-spring");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = exports.Checkbox = (_temp = _class = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      checked: false
    };

    _this.handleChange = function () {
      _this.setState(function (prevState) {
        var checked = !prevState.checked;

        if (_this.props.checkedHasChanged) _this.props.checkedHasChanged(checked);

        return { checked: checked };
      });
    };

    if (_this.props.checked !== undefined && !_this.props.onChange || _this.props.checked === undefined && _this.props.onChange) throw new Error("If you want to control the state of Checkbox, you must provide both the `checked` and `onChange` props.");
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          size = _props.size,
          style = _props.style,
          className = _props.className,
          activeStyles = _props.activeStyles,
          checked = _props.checked,
          onChange = _props.onChange,
          checkedHasChanged = _props.checkedHasChanged,
          OffIcon = _props.OffIcon,
          OnIcon = _props.OnIcon,
          iconsTransitionFrom = _props.iconsTransitionFrom,
          iconsTransitionEnter = _props.iconsTransitionEnter,
          iconsTransitionLeave = _props.iconsTransitionLeave,
          attrs = _objectWithoutProperties(_props, ["size", "style", "className", "activeStyles", "checked", "onChange", "checkedHasChanged", "OffIcon", "OnIcon", "iconsTransitionFrom", "iconsTransitionEnter", "iconsTransitionLeave"]);

      var isChecked = checked || this.state.checked;

      return React.createElement(
        _style.Wrapper,
        Object.assign({
          "data-testid": "component-checkbox",
          className: className,
          isChecked: isChecked,
          size: size,
          hasOnIcon: OnIcon ? true : false,
          hasOffIcon: OffIcon ? true : false,
          style: style,
          activeStyles: activeStyles
        }, attrs),
        React.createElement(
          "div",
          {
            className: "input-wrapper",
            "data-testid": "component-checkbox-input-wrapper"
          },
          React.createElement("input", {
            type: "checkbox",
            "data-testid": "component-checkbox-input",
            onChange: onChange || this.handleChange,
            checked: isChecked
          })
        ),
        OnIcon && OffIcon && React.createElement(
          _reactSpring.Transition,
          {
            from: iconsTransitionFrom,
            enter: iconsTransitionEnter,
            leave: iconsTransitionLeave
          },
          isChecked ? function (styles) {
            return buildIcon(OnIcon, styles, "on-mark");
          } : function (styles) {
            return buildIcon(OffIcon, styles, "off-mark");
          }
        )
      );
    }
  }]);

  return Checkbox;
}(React.Component), _class.propTypes = {
  /** Height and Width */
  size: _propTypes2.default.number,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  activeStyles: _propTypes2.default.string,
  /** For user/non-component controlled state */
  checked: _propTypes2.default.bool,
  /** For user/non-component controlled state */
  onChange: _propTypes2.default.func,
  /** Receives new value each time it's updated */
  checkedHasChanged: _propTypes2.default.func,
  /** Svg (component) used when `checked` is true */
  OnIcon: _propTypes2.default.func,
  /** Svg (component) used when `checked` is flase */
  OffIcon: _propTypes2.default.func,
  iconsTransitionFrom: _propTypes2.default.object,
  iconsTransitionEnter: _propTypes2.default.object,
  iconsTransitionLeave: _propTypes2.default.object
}, _class.defaultProps = {
  size: 30,
  style: {},
  className: "",
  activeStyles: "",
  iconsTransitionFrom: {
    opacity: 0,
    transform: "rotate(90deg)"
  },
  iconsTransitionEnter: {
    opacity: 1,
    transform: "rotate(0deg)"
  },
  iconsTransitionLeave: {
    opacity: 0,
    transform: "rotate(-90deg)"
  }
}, _temp);


var buildIcon = function buildIcon(Icon, styles, testid) {
  return React.createElement(
    "div",
    { style: styles, className: "mark", "data-testid": testid },
    React.createElement(Icon, null)
  );
};

//# sourceMappingURL=index.js.map