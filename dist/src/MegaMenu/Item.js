"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icons = require("../Icons");

var _SubItemsList = require("./SubItemsList");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function Item(_ref) {
  var item = _ref.item,
      subMenuActive = _ref.subMenuActive,
      toggleSubMenu = _ref.toggleSubMenu,
      buttonWithArrow = _ref.buttonWithArrow;

  if (item.url && item.items && item.items.length) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement("a", Object.assign({
        href: item.url,
        className: "item-has-children"
      }, (0, _utils.setHtml)(item.title))),
      _react2.default.createElement(
        "button",
        { onClick: function onClick() {
            return toggleSubMenu(item.id);
          } },
        _react2.default.createElement(_Icons.ArrowDown, null)
      ),
      subMenuActive && _react2.default.createElement(_SubItemsList.SubItemsList, { items: item.items })
    );
  } else if (!item.url && item.items && item.items.length) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        "button",
        {
          className: "item-has-children " + (buttonWithArrow ? "button-has-icon" : ""),
          onClick: function onClick() {
            return toggleSubMenu(item.id);
          }
        },
        _react2.default.createElement("span", (0, _utils.setHtml)(item.title)),
        buttonWithArrow && _react2.default.createElement(_Icons.ArrowDown, null)
      ),
      subMenuActive && _react2.default.createElement(_SubItemsList.SubItemsList, { items: item.items })
    );
  } else {
    return _react2.default.createElement(
      "a",
      { href: item.url },
      item.title
    );
  }
};
//


Item.propTypes = {
  toggleSubMenu: _propTypes2.default.func,
  subMenuActive: _propTypes2.default.bool.isRequired,
  buttonWithArrow: _propTypes2.default.bool.isRequired
};

//# sourceMappingURL=Item.js.map