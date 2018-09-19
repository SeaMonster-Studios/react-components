"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
//


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSpring = require("react-spring");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayMenu = exports.OverlayMenu = (_temp = _class = function (_React$Component) {
  _inherits(OverlayMenu, _React$Component);

  function OverlayMenu(props) {
    _classCallCheck(this, OverlayMenu);

    var _this = _possibleConstructorReturn(this, (OverlayMenu.__proto__ || Object.getPrototypeOf(OverlayMenu)).call(this, props));

    _this.state = {
      scrollTop: 0,
      prevScrollTop: 0,
      activeSubMenus: {}
    };

    _this.toggleSubItem = function (id) {
      _this.setState(function (prevState) {
        return {
          activeSubMenus: Object.assign({}, _this.activeSubMenusDefaultState, _defineProperty({}, id, !prevState.activeSubMenus[id]))
        };
      });
    };

    _this.handleScroll = function () {
      if (typeof document !== "undefined") {
        var scrollTop = window.pageYOffset || (document.documentElement ? document.documentElement.scrollTop : 0);

        _this.setState({
          scrollTop: scrollTop
        });
      }
    };

    _this.activeSubMenusDefaultState = Object.assign({}, _this.props.items.reduce(function (obj, item) {
      return Object.assign({}, obj, _defineProperty({}, item.id, false));
    }, {}));

    _this.state.activeSubMenus = _this.activeSubMenusDefaultState;

    if (typeof document !== "undefined") {
      _this.root = document.getElementById(_this.props.rootId);
      _this.mount = document.createElement("div");
    }
    return _this;
  }

  _createClass(OverlayMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof document !== "undefined") {
        window.addEventListener("scroll", this.handleScroll, false);
        this.root.appendChild(this.mount);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document !== "undefined") {
        window.removeEventListener("scroll", this.handleScroll, false);
        this.root.removeChild(this.mount);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (typeof document !== "undefined") {
        // menu was active, but is about to not be
        if (prevProps.isActive && !this.props.isActive) {
          window.scrollTo(0, prevState.prevScrollTop);

          document.getElementsByTagName("body")[0].classList.remove("component-overlay-menu-active");
          // menu wasn't active, but is about to be
        } else if (!prevProps.isActive && this.props.isActive) {
          //         window.scrollTo(0, this.state.scrollTop)
          this.setState({ prevScrollTop: prevState.scrollTop });
          window.scrollTo(0, 0);

          document.getElementsByTagName("body")[0].classList.add("component-overlay-menu-active");
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          itemRender = _props.itemRender,
          aboveMenuRender = _props.aboveMenuRender,
          belowMenuRender = _props.belowMenuRender,
          isActive = _props.isActive,
          items = _props.items,
          className = _props.className,
          style = _props.style;


      return isActive ? _reactDom2.default.createPortal(_react2.default.createElement(
        _reactSpring.Spring,
        { from: { opacity: 0 }, to: { opacity: 1 }, native: true },
        function (styles) {
          return _react2.default.createElement(
            _reactSpring.animated.div,
            {
              style: Object.assign({}, styles, style),
              className: _style.defaultClassName + " " + className
            },
            aboveMenuRender && aboveMenuRender(),
            _react2.default.createElement(
              "nav",
              null,
              _react2.default.createElement(
                _reactSpring.Trail,
                {
                  from: { opacity: 0 },
                  to: { opacity: 1 },
                  keys: items.map(function (item) {
                    return item.id;
                  }),
                  native: true
                },
                items.map(function (item) {
                  return function (styles) {
                    return itemRender({
                      item: item,
                      styles: styles,
                      toggleSubMenu: _this2.toggleSubItem,
                      subMenuActive: _this2.state.activeSubMenus[item.id]
                    });
                  };
                })
              )
            ),
            belowMenuRender && belowMenuRender()
          );
        }
      ), this.mount) : null;
    }
  }]);

  return OverlayMenu;
}(_react2.default.Component), _class.propTypes = {
  isActive: _propTypes2.default.bool.isRequired,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    title: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      url: _propTypes2.default.string.isRequired,
      id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
      title: _propTypes2.default.string.isRequired
    }).isRequired)
  }).isRequired).isRequired,
  /** Root ID of where your App is mounted */
  rootId: _propTypes2.default.string,
  /** Render prop/function that returns a react component that will render above the menu */
  aboveMenuRender: _propTypes2.default.func,
  /** Render prop/function that returns a react component that will render below the menu */
  belowMenuRender: _propTypes2.default.func,
  /** Render prop/function that receives the props for each item (including react-spring transition styles), and should return a react component with these props passed to it. */
  itemRender: _propTypes2.default.func,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  rootId: "root",
  className: "",
  style: {}
}, _temp);

//# sourceMappingURL=index.js.map