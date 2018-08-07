open Css;

let combineWithOptionalStyles = (~styles, ~styles2) =>
  switch (styles2) {
  | None => styles
  | Some(value) => ReactDOMRe.Style.combine(styles, value)
  };

[@bs.deriving abstract]
type jsRgba = {
  r: int,
  g: int,
  b: int,
  a: float,
};

let color_of_rgba = color =>
  Css.rgba(color |. rGet, color |. gGet, color |. bGet, color |. aGet);

let cssInherit = x => unsafe(x, "inherit");
let pseudoContent = x => unsafe("content", x);