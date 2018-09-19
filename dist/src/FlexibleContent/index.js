"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
//


exports.FlexibleContent = FlexibleContent;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpring = require("react-spring");

var _component = require("@reactions/component");

var _component2 = _interopRequireDefault(_component);

var _OneColumn = require("./OneColumn");

var _TwoColumns = require("./TwoColumns");

var _TwoColumnsImageGrid = require("./TwoColumnsImageGrid");

var _TwoColumnsImageLeads = require("./TwoColumnsImageLeads");

var _TwoColumnsStacked = require("./TwoColumnsStacked");

var _TwoColumnsThreeColumnList = require("./TwoColumnsThreeColumnList");

var _OneColumnVideo = require("./OneColumnVideo");

var _Grid = require("./Grid123");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var layoutTypes = ["one_column", "two_columns", "two_columns_image_leads", "two_columns_stacked", "two_columns_three_column_list", "two_columns_image_grid", "video", "content_grid", "image_grid"];

var FlexibleContentItem = (_temp = _class = function (_React$Component) {
  _inherits(FlexibleContentItem, _React$Component);

  function FlexibleContentItem() {
    _classCallCheck(this, FlexibleContentItem);

    return _possibleConstructorReturn(this, (FlexibleContentItem.__proto__ || Object.getPrototypeOf(FlexibleContentItem)).apply(this, arguments));
  }

  _createClass(FlexibleContentItem, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          layout = _props.layout,
          layoutProps = _props.layoutProps;

      switch (layout) {
        case "content_grid":
          return _react2.default.createElement(_Grid.Grid123, Object.assign({}, layoutProps, { type: "cms-content" }));
        case "image_grid":
          return _react2.default.createElement(_Grid.Grid123, Object.assign({}, layoutProps, { type: "cms-images" }));
        case "one_column":
          return _react2.default.createElement(_OneColumn.OneColumn, layoutProps);
        case "two_columns":
          return _react2.default.createElement(_TwoColumns.TwoColumns, layoutProps);
        case "two_columns_image_leads":
          return _react2.default.createElement(_TwoColumnsImageLeads.TwoColumnsImageLeads, layoutProps);
        case "two_columns_stacked":
          return _react2.default.createElement(_TwoColumnsStacked.TwoColumnsStacked, layoutProps);
        case "two_columns_three_column_list":
          return _react2.default.createElement(_TwoColumnsThreeColumnList.TwoColumnsThreeColumnList, layoutProps);
        case "two_columns_image_grid":
          return _react2.default.createElement(_TwoColumnsImageGrid.TwoColumnsImageGrid, layoutProps);
        case "video":
          return _react2.default.createElement(_OneColumnVideo.OneColumnVideo, layoutProps);
        default:
          return null;
      }
    }
  }]);

  return FlexibleContentItem;
}(_react2.default.Component), _class.propTypes = {
  layout: _propTypes2.default.oneOf(layoutTypes).isRequired,
  content: _propTypes2.default.object,
  layoutProps: _propTypes2.default.object
}, _temp);


var AnimatedFlexibleContentItem = (0, _reactSpring.animated)(FlexibleContentItem);

function getitemsProps(itemsProps, layout, animatedStyles) {
  var item = itemsProps.filter(function (item) {
    return item.item === layout;
  })[0];

  // There are default props for each item. However, if the user only passes in one prop for that layout type (say a className for one_column) but doesn't pass in the others (say style) then the defaultProp will be completely overridden and style wiill be undefined.

  if (item) {
    if (item.className && item.style) {
      return Object.assign({}, item, {
        className: layout + " " + item.className + " ",
        style: {}
      });
    } else if (!item.style) {
      return Object.assign({}, item, {
        lassName: layout + " " + item.className + " ",
        style: animatedStyles
      });
    } else if (!item.className) {
      return Object.assign({}, item, {
        className: layout,
        style: Object.assign({}, item.style, animatedStyles)
      });
    } else {
      return Object.assign({}, item, { animatedStyles: animatedStyles });
    }
  }
  return Object.assign({}, item, { style: animatedStyles });
}

function FlexibleContent(_ref) {
  var className = _ref.className,
      items = _ref.items,
      style = _ref.style,
      rowSpace = _ref.rowSpace,
      columnSpace = _ref.columnSpace,
      breakpoint = _ref.breakpoint,
      itemsProps = _ref.itemsProps;

  return _react2.default.createElement(
    "div",
    {
      "data-testid": "component-wp-flexible-content",
      style: style,
      className: className + " flexible-content-component"
    },
    _react2.default.createElement(
      _component2.default,
      { didMount: _utils.wrapIframesInResponsiveVideo },
      _react2.default.createElement(
        _reactSpring.Trail,
        {
          from: { opacity: 0, transform: "scale(0.99)" },
          to: { opacity: 1, transform: "scale(1)" },
          keys: items.map(function (_ref2, i) {
            var layout = _ref2.acf_fc_layout;
            return layout + "-" + i;
          })
        },
        items.map(function (_ref3) {
          var layout = _ref3.acf_fc_layout,
              content = _objectWithoutProperties(_ref3, ["acf_fc_layout"]);

          return function (styles) {
            return _react2.default.createElement(AnimatedFlexibleContentItem, {
              layout: layout,
              layoutProps: Object.assign({}, content, getitemsProps(itemsProps, layout, styles), {
                rowSpace: rowSpace,
                columnSpace: columnSpace,
                breakpoint: breakpoint
              })
            });
          };
        })
      )
    )
  );
}

FlexibleContent.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    acf_fc_layout: _propTypes2.default.oneOf(layoutTypes).isRequired
  }).isRequired).isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /** Vertical spacing base */
  rowSpace: _propTypes2.default.number,
  /** Horizontal spacing base */
  columnSpace: _propTypes2.default.number,
  /** Mobile first breakpoint */
  breakpoint: _propTypes2.default.number,
  /** pass props that will be applied to each item of the type provided. Layout Types: [
  'one_column',
  'two_columns',
  'two_columns_image_leads',
  'two_columns_stacked',
  'two_columns_three_column_list',
  'two_columns_image_grid',
  'video',
  'content_grid',
  'image_grid'
  ]*/
  itemsProps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    item: _propTypes2.default.oneOf(layoutTypes).isRequired,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
  }).isRequired)
};

FlexibleContent.defaultProps = {
  className: "",
  adminclass: "",
  style: {},
  rowSpace: 60,
  columnSpace: 30,
  breakpoint: 992,
  itemsProps: layoutTypes.map(function (type) {
    return {
      item: type,
      className: "",
      style: {}
    };
  })
};

//# sourceMappingURL=index.js.map