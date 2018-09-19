"use strict";

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactTestingLibrary = require("react-testing-library");

var _ = require("./");

var _io = require("../../utils/io");

var io = _interopRequireWildcard(_io);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//


var inputTypes = ["color", "date", "datetime", "datetime-local", "email", "hidden", "month", "number", "password", "range", "search", "tel", "text", "time", "url", "week", "button", "submit", "file"];

afterEach(_reactTestingLibrary.cleanup);

describe("Button Component Test", function () {
  it("Renders", function () {
    var _renderSetup = renderSetup({
      type: "text"
    }),
        getByTestId = _renderSetup.getByTestId;

    var input = getByTestId("component-input");

    expect(input).toBeDefined();
  });

  it("Renders with all valid input types that are in the inputTypes.simple list", function () {
    inputTypes.map(function (type) {
      (0, _reactTestingLibrary.cleanup)();

      if (type === "button" || type === "file" || type === "submit") {
        var _render = (0, _reactTestingLibrary.render)(React.createElement(
          _.Input,
          { type: type },
          function (_ref) {
            var input = _ref.input;
            return React.createElement(
              "span",
              null,
              input
            );
          }
        )),
            getByTestId = _render.getByTestId;

        var input = getByTestId("component-input");
        var wrapper = getByTestId("component-input-wrapper");
        var label = getByTestId("component-input-label");

        expect(input.type).toBe(type);
        expect(wrapper).toBeDefined();
        expect(label).toBeDefined();
      } else {
        var _render2 = (0, _reactTestingLibrary.render)(React.createElement(_.Input, { type: type })),
            _getByTestId = _render2.getByTestId;

        var _input = _getByTestId("component-input");
        expect(_input.type).toBe(type);
      }
    });
  });

  it("Input with a type of `file` renders correctly, and provides the user with file contents onChange", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var fileContents, file, valueHasChangedMock, _render3, getByTestId, input;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileContents = "dummy content";
            file = new File([fileContents], "example.png", { type: "image/png" });


            io.readUploadedFileAsText = jest.fn(function () {
              return Promise.resolve(fileContents);
            });

            valueHasChangedMock = jest.fn();
            _render3 = (0, _reactTestingLibrary.render)(React.createElement(
              _.Input,
              { type: "file", valueHasChanged: valueHasChangedMock },
              function (_ref3) {
                var input = _ref3.input;
                return React.createElement(
                  "span",
                  null,
                  input
                );
              }
            )), getByTestId = _render3.getByTestId;
            input = getByTestId("component-input");


            Object.defineProperty(input, "files", {
              value: [file]
            });

            _reactTestingLibrary.fireEvent.change(input);

            _context.next = 10;
            return expect(io.readUploadedFileAsText).toHaveBeenCalled();

          case 10:

            expect(valueHasChangedMock).toHaveBeenCalled();
            expect(valueHasChangedMock).toHaveBeenCalledWith(expect.any(Object), // the react ref, but not sure how to get that here yet.
            fileContents);
            expect(input.nodeName).toBe("INPUT");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});

function renderSetup(overrides) {
  var valueHadChanged = jest.fn();
  var props = Object.assign({
    valueHadChanged: valueHadChanged
  }, overrides);

  var wrapper = (0, _reactTestingLibrary.render)(React.createElement(_.Input, props));

  return Object.assign({}, wrapper, {
    props: props
  });
}

//# sourceMappingURL=spec.js.map