'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clickEvent = clickEvent;
exports.changeEvent = changeEvent;

var _reactTestingLibrary = require('react-testing-library');

function clickEvent(el) {
  return (0, _reactTestingLibrary.fireEvent)(el, new MouseEvent('click', {
    bubbles: true, // click events must bubble for React to see it
    cancelable: true
  }));
}

function changeEvent(el, newValue, property) {
  el[property] = newValue;
  return _reactTestingLibrary.fireEvent.change(el);
}

//# sourceMappingURL=testing.js.map