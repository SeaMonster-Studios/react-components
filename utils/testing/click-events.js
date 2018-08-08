import { fireEvent } from 'react-testing-library'

export function clickEvent(el) {
  return fireEvent(
    el,
    new MouseEvent('click', {
      bubbles: true, // click events must bubble for React to see it
      cancelable: true,
    }),
  )
}

export function changeEvent(el, newValue, property) {
  el[property] = newValue
  return fireEvent.change(el)
}
