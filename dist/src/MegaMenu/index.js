"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MegaMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
//


var _templateObject = _taggedTemplateLiteral(["\n              display: flex,\n              align-items: center;\n              justify-content: center;\n              position: relative;\n              width: 100%;\n              z-index: 999;\n\n              .lvl1-wrapper {\n                display: flex;\n                align-items: center;\n                line-height: 1;\n\n                > a, > button {\n                  font-size: 16px;\n                  padding: ", ";\n\n                  &, &:hover, &:focus {\n                    text-decoration: none;\n                  }\n                }\n\n                a.item-has-children {\n                  padding-right: 0;\n                }\n              }\n\n              button {\n                border: none;\n                cursor: pointer;\n                background: rgb(0,0,0,0);\n\n                &.button-has-icon {\n                  padding: 0;\n                  display: flex;\n                  align-items: center;\n\n                  > span {\n                    padding: ", ";\n                  }\n\n                  svg {\n                    margin: ", " + 'px';\n                  }\n                }\n\n                &:focus { outline: none; }\n              }\n\n              .subitem {\n                position: absolute;\n                background-color: #fff;\n                border: 1px solid #ccc;\n                width: calc(100%- 60px);\n                bottom: 0;\n                transform: translateY(100%);\n                left: 0;\n                right: 0;\n                margin: auto;\n                padding ", ";\n              }\n\n              .subitem-inner {\n                display: flex;\n                flex-wrap: wrap;\n              }\n\n              .subitem-section {\n                display: flex;\n                flex-direction: column;\n                padding: ", ";\n                text-align: left;\n\n                ul {\n                  padding: 0;\n                  margin: 0;\n                  display: flex;\n                  flex-direction: column;\n                  font-size: 16px;\n\n                  a {\n                    &, &:hover, &:focus { text-decoration: none; }\n                  }\n                }\n              }\n\n              .section-title {\n                font-size: 18px;\n                margin-bottom: ", ";\n\n                &, &:active, &:hover { text-decoration: none; }\n              }\n            "], ["\n              display: flex,\n              align-items: center;\n              justify-content: center;\n              position: relative;\n              width: 100%;\n              z-index: 999;\n\n              .lvl1-wrapper {\n                display: flex;\n                align-items: center;\n                line-height: 1;\n\n                > a, > button {\n                  font-size: 16px;\n                  padding: ", ";\n\n                  &, &:hover, &:focus {\n                    text-decoration: none;\n                  }\n                }\n\n                a.item-has-children {\n                  padding-right: 0;\n                }\n              }\n\n              button {\n                border: none;\n                cursor: pointer;\n                background: rgb(0,0,0,0);\n\n                &.button-has-icon {\n                  padding: 0;\n                  display: flex;\n                  align-items: center;\n\n                  > span {\n                    padding: ", ";\n                  }\n\n                  svg {\n                    margin: ", " + 'px';\n                  }\n                }\n\n                &:focus { outline: none; }\n              }\n\n              .subitem {\n                position: absolute;\n                background-color: #fff;\n                border: 1px solid #ccc;\n                width: calc(100%- 60px);\n                bottom: 0;\n                transform: translateY(100%);\n                left: 0;\n                right: 0;\n                margin: auto;\n                padding ", ";\n              }\n\n              .subitem-inner {\n                display: flex;\n                flex-wrap: wrap;\n              }\n\n              .subitem-section {\n                display: flex;\n                flex-direction: column;\n                padding: ", ";\n                text-align: left;\n\n                ul {\n                  padding: 0;\n                  margin: 0;\n                  display: flex;\n                  flex-direction: column;\n                  font-size: 16px;\n\n                  a {\n                    &, &:hover, &:focus { text-decoration: none; }\n                  }\n                }\n              }\n\n              .section-title {\n                font-size: 18px;\n                margin-bottom: ", ";\n\n                &, &:active, &:hover { text-decoration: none; }\n              }\n            "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSpring = require("react-spring");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Item = require("./Item");

var _emotion = require("emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MegaMenu = exports.MegaMenu = (_temp = _class = function (_React$Component) {
  _inherits(MegaMenu, _React$Component);

  function MegaMenu(props) {
    _classCallCheck(this, MegaMenu);

    var _this = _possibleConstructorReturn(this, (MegaMenu.__proto__ || Object.getPrototypeOf(MegaMenu)).call(this, props));

    _this.state = {
      subMenuStatuses: {}
    };

    _this.outsideClickListener = function (event) {
      if (!_reactDom2.default.findDOMNode(_this.containerRef.current).contains(event.target)) {
        _this.toggleSubMenu("");
      }
    };

    _this.toggleSubMenu = function (itemId) {
      _this.setState(function (prevState) {
        var subMenuStatuses = {};

        for (var key in prevState.subMenuStatuses) {
          if (key != itemId) {
            subMenuStatuses[key] = false;
          } else {
            subMenuStatuses[key] = !prevState.subMenuStatuses[key];
          }
        }

        return Object.assign({}, prevState, {
          subMenuStatuses: subMenuStatuses
        });
      });
    };

    _this.state = {
      subMenuStatuses: Object.assign({}, _this.props.items.reduce(function (obj, item) {
        return Object.assign(obj, _defineProperty({}, item.id, false));
      }, {}))
    };

    _this.containerRef = _react2.default.createRef();
    return _this;
  }

  _createClass(MegaMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof document !== "undefined") {
        document.addEventListener("click", this.outsideClickListener);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document !== "undefined") {
        document.removeEventListener("click", this.outsideClickListener);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          buttonWithArrow = _props.buttonWithArrow,
          style = _props.style,
          className = _props.className,
          items = _props.items;

      return _react2.default.createElement(
        _reactSpring.Spring,
        { from: { opacity: 0 }, to: { opacity: 1 }, native: true },
        function (styles) {
          return _react2.default.createElement(
            _reactSpring.animated.div,
            { style: styles },
            _react2.default.createElement(
              "nav",
              {
                ref: _this2.containerRef,
                style: style,
                className: (0, _emotion.css)(_templateObject, _this2.props.ySpacing + "px " + _this2.props.xSpacing + "px", _this2.props.xSpacing + "px 0 " + _this2.props.xSpacing + "px " + _this2.props.xSpacing + "px", _this2.props.xSpacing, _this2.props.ySpacing + "px " + _this2.props.ySpacing * 2 + "px 0", "0 " + _this2.props.xSpacing + "px " + _this2.props.ySpacing + "px", _this2.props.ySpacing) + " " + className
              },
              items.map(function (item) {
                return _react2.default.createElement(
                  "span",
                  {
                    className: "lvl1-wrapper is-" + (_this2.state.subMenuStatuses[item.id] ? "active" : "not-active")
                  },
                  _react2.default.createElement(_Item.Item, {
                    buttonWithArrow: buttonWithArrow,
                    item: item,
                    key: item.id,
                    toggleSubMenu: _this2.toggleSubMenu,
                    subMenuActive: _this2.state.subMenuStatuses[item.id]
                  })
                );
              })
            )
          );
        }
      );
    }
  }]);

  return MegaMenu;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /** When true, if an item has a NO `url` and child `items` it will display an arrow next to the `title`.*/
  buttonWithArrow: _propTypes2.default.bool,
  /** horizontal spacing between items (pixels) */
  xSpacing: _propTypes2.default.number,
  /** vertical spacing between items (pixels) */
  ySpacing: _propTypes2.default.number,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    title: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
      title: _propTypes2.default.string.isRequired,
      url: _propTypes2.default.string.isRequired,
      items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
        title: _propTypes2.default.string.isRequired,
        url: _propTypes2.default.string.isRequired
      }).isRequired)
    }).isRequired)
  }).isRequired).isRequired
}, _class.defaultProps = {
  xSpacing: 15,
  ySpacing: 15,
  buttonWithArrow: true,
  style: {},
  className: ""
}, _temp);

//# sourceMappingURL=index.js.map