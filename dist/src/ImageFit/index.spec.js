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

afterEach(_reactTestingLibrary.cleanup);

expect.addSnapshotSerializer((0, _jestEmotion.createSerializer)(emotion));

describe("ImageFit", function () {
  it("Renders with the correct object styles applied from `fit` and `position` props.", function () {
    var _renderSetup = renderSetup(),
        getByTestId = _renderSetup.getByTestId,
        props = _renderSetup.props;

    var imageFit = getByTestId("component-image-fit");

    var renderedStyles = window.getComputedStyle(imageFit);

    expect(renderedStyles.fontFamily).toBe("'object-fit: " + props.fit + "; object-position: " + props.position + "'");

    expect(imageFit).toBeDefined();
    expect(imageFit).toMatchSnapshot();
  });
});

function renderSetup(overrides) {
  var props = Object.assign({
    src: "https://picsum.photos/1200/500",
    alt: "something descriptive about my random image",
    fit: "cover",
    position: "top center"

  }, overrides);

  var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(_.ImageFit, props));

  return Object.assign({}, wrapper, {
    props: props
  });
}

//# sourceMappingURL=index.spec.js.map