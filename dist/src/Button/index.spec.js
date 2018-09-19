"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require("react-testing-library");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
//


describe("Button Component Test", function () {
  it("Renders", function () {
    var _renderSetup = renderSetup(),
        getByTestId = _renderSetup.getByTestId,
        getByText = _renderSetup.getByText,
        props = _renderSetup.props;

    var button = getByTestId("component-button");

    expect(getByText(props.children)).toBeDefined();
    expect(button.nodeName).toBe("BUTTON");
  });
});

function renderSetup(overrides) {
  var props = Object.assign({
    children: "Contact Us",
    baseColor: "rgb(0,0,0)",
    textColor: "rgb(255,255,255)"
  }, overrides);

  var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(_.Button, props));

  return Object.assign({}, wrapper, {
    props: props
  });
}

//# sourceMappingURL=index.spec.js.map