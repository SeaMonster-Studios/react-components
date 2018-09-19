"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
//


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickyBar = exports.StickyBar = (_temp = _class = function (_React$Component) {
  _inherits(StickyBar, _React$Component);

  function StickyBar(props) {
    _classCallCheck(this, StickyBar);

    var _this = _possibleConstructorReturn(this, (StickyBar.__proto__ || Object.getPrototypeOf(StickyBar)).call(this, props));

    _this.state = {
      scrollLast: 0,
      scrollTop: 0,
      position: "default",
      hasMoved: false,
      rendered: false,
      screenHeight: 0
    };
    _this.forceSelfTopUpdate = false;

    _this.handleScroll = function () {
      console.log("I am scrolling");
      if (typeof document !== "undefined") {
        _this.setState(function (prevState) {
          var scrollTop = (window.pageYOffset || (document.documentElement ? document.documentElement.scrollTop : 0)) - document.documentElement.scrollHeight + prevState.screenHeight; // if the sticky bar has any children that make the bar change height while it's active, it will mess up the scrollTop and think we're scrolling if we don't remove the scrollHeight and add the previous scrollheight (before the children changed StickyBar's height)

          var position = prevState.position;
          var hasMoved = prevState.hasMoved;

          var pastBottom = scrollTop >= prevState.selfTop + _this.ref.offsetHeight;

          var pastAnimationThreshold = scrollTop >= (prevState.selfTop + _this.ref.offsetHeight) * 2;

          var scrollingUp = scrollTop < prevState.scrollTop;

          var scrollingUpOrIdle = scrollTop <= prevState.scrollTop;

          if (pastAnimationThreshold && scrollingUp || position === "active" && scrollingUpOrIdle
          // (pastAnimationThreshold && position === 'active' && scrollingUpOrIdle)
          ) {
              position = "active";
              hasMoved = true;
            } else if (pastAnimationThreshold && !scrollingUp || !pastAnimationThreshold && pastBottom && scrollingUp) {
            position = "ready";
            hasMoved = true;
          } else if (pastBottom && !scrollingUp) {
            position = "hidden";
            hasMoved = true;
          } else {
            position = "default";
            hasMoved = false;
          }

          return {
            scrollTop: scrollTop,
            position: position,
            hasMoved: hasMoved
          };
        });
      }
    };

    if (props.forceSelfTopUpdate !== undefined) _this.forceSelfTopUpdate = props.forceSelfTopUpdate;
    return _this;
  }

  _createClass(StickyBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (typeof document !== "undefined") {
        setTimeout(function () {
          // sometimes the browser will load the page half way and then continue to render content, which would cause the component to think the user is scrolling up. This would cause the sticky bar to hide, then show, then hide.
          window.addEventListener("scroll", _this2.handleScroll, false);
        }, 1000);

        var selfTop = this.ref.offsetTop;

        this.setState({
          screenHeight: document.documentElement.scrollHeight,
          triggerTopBeforeMoved: selfTop,
          selfTop: selfTop
        });
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps, prevState) {
      var snapshot = {};

      if (this.ref.offsetTop !== prevState.selfTop && !prevState.hasMoved || !this.forceSelfTopUpdate && this.props.forceSelfTopUpdate) {
        snapshot.newSelfTop = this.ref.offsetTop;
      }

      if (Object.keys(snapshot).length !== 0) {
        return snapshot;
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot !== null && snapshot.newSelfTop) {
        this.setState({
          selfTop: snapshot.newSelfTop || prevState.selfTop,
          screenHeight: document.documentElement.scrollHeight
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document !== "undefined") {
        window.removeEventListener("scroll", this.handleScroll, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          activeEmotionClassName = _props.activeEmotionClassName,
          readyEmotionClassName = _props.readyEmotionClassName,
          hiddenEmotionClassName = _props.hiddenEmotionClassName,
          activeStyle = _props.activeStyle,
          readyStyle = _props.readyStyle,
          hiddenStyle = _props.hiddenStyle;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _style.Wrapper,
          Object.assign({
            "data-testid": "component-sticky-bar",
            className: className,
            style: Object.assign({}, style, function () {
              switch (_this3.state.position) {
                case "active":
                  return activeStyle;
                case "ready":
                  return readyStyle;
                case "hidden":
                  return hiddenStyle;
                default:
                  return {};
              }
            }),
            innerRef: function innerRef(containerRef) {
              _this3.ref = containerRef;
            }
          }, {
            selfHeight: this.ref && this.ref.offsetHeight ? this.ref.offsetHeight : 0,
            position: this.state.position,
            activeClassName: activeEmotionClassName,
            readyClassName: readyEmotionClassName,
            hiddenClassName: hiddenEmotionClassName
          }),
          children
        ),
        this.state.hasMoved && _react2.default.createElement("div", {
          style: {
            height: this.ref && this.ref.offsetHeight ? this.ref.offsetHeight : 0
          }
        })
      );
    }
  }]);

  return StickyBar;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  /** The return value of emotion's css function */
  activeEmotionClassName: _propTypes2.default.string,
  /** The return value of emotion's css function */
  readyEmotionClassName: _propTypes2.default.string,
  /** The return value of emotion's css function */
  hiddenEmotionClassName: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /** An alternative to emotion-based active styles */
  activeStyle: _propTypes2.default.object,
  /** An alternative to emotion-based ready styles */
  readyStyle: _propTypes2.default.object,
  /** An alternative to emotion-based hidden styles */
  hiddenStyle: _propTypes2.default.object,
  /** In case you need to force a position update */
  forceSelfTopUpdate: _propTypes2.default.bool
}, _class.defaultProps = {
  className: "",
  activeEmotionClassName: "",
  readyEmotionClassName: "",
  hiddenEmotionClassName: "",
  style: {},
  activeStyle: {},
  readyStyle: {},
  hiddenStyle: {}
}, _temp);

//# sourceMappingURL=index.js.map