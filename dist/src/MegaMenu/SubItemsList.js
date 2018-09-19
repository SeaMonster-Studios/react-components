"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubItemsList = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSpring = require("react-spring");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubItemsList = exports.SubItemsList = function SubItemsList(_ref) {
  var items = _ref.items;

  return _react2.default.createElement(
    _reactSpring.Spring,
    { from: { opacity: 0 }, to: { opacity: 1 }, native: true },
    function (styles) {
      return _react2.default.createElement(
        _reactSpring.animated.div,
        { style: styles, className: "subitem" },
        _react2.default.createElement(
          "div",
          { className: "subitem-inner" },
          items.map(function (item) {
            return _react2.default.createElement(SubItem, { item: item, key: item.id });
          })
        )
      );
    }
  );
};
//


SubItemsList.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    title: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
      title: _propTypes2.default.string.isRequired,
      url: _propTypes2.default.string.isRequired
    }).isRequired)
  }).isRequired).isRequired
};

var SubItem = function SubItem(_ref2) {
  var item = _ref2.item;
  var title = item.title,
      url = item.url,
      items = item.items;

  if (url && items && items.length) {
    return _react2.default.createElement(
      "div",
      { className: "subitem-section link-and-items" },
      _react2.default.createElement(
        "a",
        { href: url, className: "section-title" },
        title
      ),
      _react2.default.createElement(
        "ul",
        null,
        items.map(function (subItem) {
          return _react2.default.createElement(
            "li",
            { key: subItem.id },
            _react2.default.createElement("a", Object.assign({ href: subItem.url }, (0, _utils.setHtml)(subItem.title)))
          );
        })
      )
    );
  } else if (!url && items && items.length) {
    return _react2.default.createElement(
      "div",
      { className: "subitem-section items-only" },
      _react2.default.createElement(
        "span",
        { className: "section-title" },
        title
      ),
      _react2.default.createElement(
        "ul",
        null,
        items.map(function (subItem) {
          return _react2.default.createElement(
            "li",
            { key: subItem.id },
            _react2.default.createElement("a", Object.assign({ href: subItem.url }, (0, _utils.setHtml)(subItem.title)))
          );
        })
      )
    );
  } else {
    return _react2.default.createElement(
      "div",
      { className: "subitem-section link-only" },
      _react2.default.createElement("a", Object.assign({ href: url, className: "section-title" }, (0, _utils.setHtml)(title)))
    );
  }
};

SubItem.propTypes = {
  item: _propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    title: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
      title: _propTypes2.default.string.isRequired,
      url: _propTypes2.default.string.isRequired
    }).isRequired)
  }).isRequired
};

//# sourceMappingURL=SubItemsList.js.map