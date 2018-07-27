import { fireEvent } from 'react-testing-library'

export function clickEvent(el) {
  fireEvent(
    el,
    new MouseEvent('click', {
      bubbles: true, // click events must bubble for React to see it
      cancelable: true,
    }),
  )
}
