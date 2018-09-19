"use strict";

var _templateObject = _taggedTemplateLiteral(["\n        background-color: ", ";\n      "], ["\n        background-color: ", ";\n      "]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestingLibrary = require("react-testing-library");

var _testing = require("../../utils/testing");

var _ = require("./");

var _Icons = require("../Icons");

var _emotion = require("emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

afterEach(_reactTestingLibrary.cleanup);

describe("Checkbox Component Test", function () {
  it("Renders", function () {
    var _renderSetup = renderSetup(),
        getByTestId = _renderSetup.getByTestId;

    var checkbox = getByTestId("component-checkbox");

    expect(checkbox).toBeDefined();
  });

  it("Returns changed value when clicked", function () {
    var _renderSetup2 = renderSetup(),
        props = _renderSetup2.props,
        getByTestId = _renderSetup2.getByTestId;

    var input = getByTestId("component-checkbox-input");

    (0, _testing.changeEvent)(input, true, "checked");

    expect(props.checkedHasChanged).toHaveBeenCalledWith(true);

    (0, _testing.changeEvent)(input, false, "checked");

    expect(props.checkedHasChanged).toHaveBeenCalledWith(false);
  });

  it("Renders with the correct width and height, base don the `size` prop. And applies custom styles from the `styles` prop.", function () {
    var testColor = "rgb(145, 34, 34)";
    var activeTestColor = "rgb(244, 122, 109)";

    var _renderSetup3 = renderSetup({
      styles: (0, _emotion.css)(_templateObject, testColor),
      activeStyles: (0, _emotion.css)(_templateObject, activeTestColor)
    }),
        props = _renderSetup3.props,
        getByTestId = _renderSetup3.getByTestId;

    var input = getByTestId("component-checkbox-input");
    var checkbox = getByTestId("component-checkbox");
    var inputWrapper = getByTestId("component-checkbox-input-wrapper");

    var checkboxStyles = window.getComputedStyle(checkbox);
    var inputWrapperStyles = window.getComputedStyle(inputWrapper);

    expect(checkboxStyles.height).toBe(props.size + "px");
    expect(checkboxStyles.width).toBe(props.size + "px");
    expect(checkboxStyles.backgroundColor).toBe(testColor);
    expect(inputWrapperStyles.minHeight).toBe(props.size + "px");
    expect(inputWrapperStyles.minWidth).toBe(props.size + "px");

    (0, _testing.changeEvent)(input, true, "checked");

    expect(window.getComputedStyle(checkbox).backgroundColor).toBe(activeTestColor);
  });

  it("Renders with `OnIcon` and `OffIcon` when passed in as props and displays them relevant to the value of `checked`", function () {
    var _renderSetup4 = renderSetup({
      OnIcon: _Icons.Check,
      OffIcon: _Icons.Close
    }),
        getByTestId = _renderSetup4.getByTestId;

    var OffIcon = getByTestId("off-mark");
    var input = getByTestId("component-checkbox-input");

    expect(OffIcon).toBeDefined();

    (0, _testing.changeEvent)(input, true, "checked");

    var OnIcon = getByTestId("on-mark");

    expect(OnIcon).toBeDefined();
  });
});

it("Does not use internal state when `checked` and `onChange` props are passed in. These props are used accordingly to control checkbox state.", function () {
  var onChange = jest.fn();

  var _renderSetup5 = renderSetup({
    checked: true,
    onChange: onChange
  }),
      getByTestId = _renderSetup5.getByTestId;

  var input = getByTestId("component-checkbox-input");

  expect(input.checked).toBe(true);

  (0, _testing.changeEvent)(input, true, "checked");

  expect(onChange).toHaveBeenCalled();
});

function renderSetup(overrides) {
  var checkedHasChanged = jest.fn();
  var props = Object.assign({
    checkedHasChanged: checkedHasChanged,
    size: 32
  }, overrides);

  var wrapper = (0, _reactTestingLibrary.render)(_react2.default.createElement(_.Checkbox, props));

  return Object.assign({}, wrapper, {
    props: props
  });
}

//# sourceMappingURL=spec.js.map