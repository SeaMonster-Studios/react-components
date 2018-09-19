"use strict";

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require("react-testing-library");

var _ = require("./");

var Icons = _interopRequireWildcard(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
//


describe("Icons Tests", function () {
  (0, _entries2.default)(Icons).map(function (icon) {
    it("Renders " + icon[0], function () {
      var Icon = icon[1];

      var _render = (0, _reactTestingLibrary.render)(_react2.default.createElement(Icon, null)),
          container = _render.container;

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

//# sourceMappingURL=spec.js.map