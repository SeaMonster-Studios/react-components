let combineWithOptionalStyles = (~styles, ~styles2) =>
  switch (styles2) {
  | None => styles
  | Some(value) => ReactDOMRe.Style.combine(styles, value)
  };

/* type rgba = {
     r: int,
     g: int,
     b: int,
     a: float,
   }; */

[@bs.deriving abstract]
type jsRgba = {
  r: int,
  g: int,
  b: int,
  a: float,
};

/* let rgba_of_js_rgba = rgbaFromJs => {
     /* let newColor = jsRgba(~r=255, ~g=233, ~b=0, ~a=0.5); */
     let newColor =
       jsRgba(
         ~r=rgbaFromJs##rGet,
         ~g=rgbaFromJs##gGet,
         ~b=rgbaFromJs##bGet,
         ~a=rgbaFromJs##aGet,
       );
     Js.log(newColor.r);
   }; */

/* let rgba_of_js_rgba = rgbaFromJs => {
     /* let newColor = jsRgba(~r=255, ~g=233, ~b=0, ~a=0.5); */
     let newColor = jsRgba(~r=rgbaFromJs#r, ~g=233, ~b=0, ~a=0.5);
     /* let newColor =
        jsRgba(
          ~r=rgbaFromJs |. rGet,
          ~g=rgbaFromJs |. gGet,
          ~b=rgbaFromJs |. bGet,
          ~a=rgbaFromJs |. aGet,
        ); */
     Js.log(jsRgba);
   }; */

let color_of_rgba = color => {
  /* let rgba = rgba_of_js_rgba(color); */
  Js.log("rgba");
  Js.log(color |. rGet);

  Css.rgba(color |. rGet, color |. gGet, color |. bGet, color |. aGet);
  /* Css.rgba(0, 0, 0, 1.0); */
};

/* let color_of_js_rgba = color =>
     /* let reColor = re_color_of_js_color(color);
        Js.log(reColor |. rGet);
        Css.rgba(reColor |. rGet, reColor |. gGet, reColor |. bGet, reColor |. aGet); */
     Css.rgba(0, 0, 0, 1.0);

   /* let re_color_of_js_color = color => {
        [@bs.val] external color : jsRgba = {
          r:
        }
        Css.rgba(color##r, color##g, color##b, color##a);
      } */ */