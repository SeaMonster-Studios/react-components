let combineWithOptionalStyles = (~styles, ~styles2) =>
  switch (styles2) {
  | None => styles
  | Some(value) => ReactDOMRe.Style.combine(styles, value)
  };