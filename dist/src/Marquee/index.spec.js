"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jestEmotion = require("jest-emotion");

var _emotion = require("emotion");

var emotion = _interopRequireWildcard(_emotion);

var _reactTestingLibrary = require("react-testing-library");

var _ = require("./");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
afterEach(_reactTestingLibrary.cleanup);

expect.addSnapshotSerializer((0, _jestEmotion.createSerializer)(emotion));

describe("Marquee", function () {
  it("Renders", function () {
    var _renderSetup = renderSetup(),
        getByTestId = _renderSetup.getByTestId;

    var Marquee = getByTestId("component-content-marquee");

    expect(Marquee).toBeDefined();
    expect(Marquee).toMatchSnapshot();
  });
});

function renderSetup(overrides) {
  var props = Object.assign({
    image: "https://picsum.photos/1200/500",
    styles: ""
  }, overrides);

  var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(
    _.Marquee,
    props,
    _react2.default.createElement(
      "h2",
      null,
      "Try our newest flavor \u2014 ",
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "em",
        null,
        "banana by bananarama"
      )
    ),
    _react2.default.createElement(
      "button",
      null,
      "Get some"
    )
  ));

  return Object.assign({}, wrapper, {
    props: props
  });
}

//# sourceMappingURL=index.spec.js.map