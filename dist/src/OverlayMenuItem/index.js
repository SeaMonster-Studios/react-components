"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayMenuItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;
//


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpring = require("react-spring");

var _ArrowDown = require("../Icons/ArrowDown");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayMenuItem = exports.OverlayMenuItem = (_temp2 = _class = function (_React$Component) {
  _inherits(OverlayMenuItem, _React$Component);

  function OverlayMenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OverlayMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OverlayMenuItem.__proto__ || Object.getPrototypeOf(OverlayMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.toggleSubMenu = function () {
      return _this.props.toggleSubMenu(_this.props.item.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OverlayMenuItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          item = _props.item,
          subMenuActive = _props.subMenuActive;


      return _react2.default.createElement(
        _reactSpring.animated.div,
        { style: style, className: "item-container " + className },
        _react2.default.createElement(
          "div",
          { className: "item-wrapper" },
          (!item.url || item.url === "#") && item.items.length > 0 ? _react2.default.createElement(
            "button",
            {
              onClick: this.toggleSubMenu,
              className: "item  " + (subMenuActive ? "is-active" : "")
            },
            item.title
          ) : _react2.default.createElement("a", Object.assign({
            href: item.url,
            className: "item " + (subMenuActive ? "is-active" : "")
          }, (0, _utils.setHtml)(item.title))),
          item.items && item.items.length > 0 && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
              "button",
              {
                onClick: this.toggleSubMenu,
                className: "icon-wrapper " + (subMenuActive ? "is-active" : "")
              },
              _react2.default.createElement(_ArrowDown.ArrowDown, null)
            ),
            subMenuActive && _react2.default.createElement(
              "div",
              { className: "subitems-container" },
              _react2.default.createElement(
                _reactSpring.Trail,
                {
                  keys: item.items.map(function (item) {
                    return item.id;
                  }),
                  from: { opacity: 0 },
                  to: { opacity: 1 }
                },
                item.items.map(function (subItem) {
                  return function (styles) {
                    return _react2.default.createElement(
                      "div",
                      { style: styles, className: "subitem-wrapper" },
                      _react2.default.createElement("a", Object.assign({
                        href: subItem.url,
                        className: "subitem"
                      }, (0, _utils.setHtml)(subItem.title))),
                      _react2.default.createElement(
                        _reactSpring.Trail,
                        {
                          keys: item.items.map(function (item) {
                            return item.id;
                          }),
                          from: { opacity: 0 },
                          to: { opacity: 1 }
                        },
                        subItem.items.map(function (subsubItem) {
                          return function (styles) {
                            return _react2.default.createElement(
                              "div",
                              {
                                style: styles,
                                className: "subsubitem-wrapper"
                              },
                              _react2.default.createElement("a", Object.assign({
                                href: subsubItem.url,
                                className: "subsubitem"
                              }, (0, _utils.setHtml)(subsubItem.title)))
                            );
                          };
                        })
                      )
                    );
                  };
                })
              )
            )
          )
        )
      );
    }
  }]);

  return OverlayMenuItem;
}(_react2.default.Component), _class.propTypes = {
  item: _propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    title: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      url: _propTypes2.default.string.isRequired,
      id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
      title: _propTypes2.default.string.isRequired
    }).isRequired)
  }).isRequired,
  subMenuActive: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  /** Function that receives the item's `id` and will toggle that item's sub menu */
  toggleSubMenu: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  style: {},
  className: ""
}, _temp2);

//# sourceMappingURL=index.js.map