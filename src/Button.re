open Css;
open StyleUtils;

let component = ReasonReact.statelessComponent("Button");

[@bs.deriving jsConverter]
type inverseStyle = [ | `default | `transparent];

[@bs.deriving jsConverter]
type hoverEffect = [ | `default | `ripple];

let rippleOut =
  keyframes([
    (
      100,
      [
        top(px(-12)),
        right(px(-12)),
        bottom(px(-12)),
        left(px(-12)),
        opacity(0.0),
      ],
    ),
  ]);

let hoverProps =
    (~hoverEffect, ~hoverBaseColor, ~textColor, ~baseColor, ~inverse) =>
  switch (hoverEffect) {
  | `default => [
      transformOrigin(`percent(50.0), `percent(50.0)),
      position(`relative),
      after([
        /* content(""), */
        position(`absolute),
        border(px(1), `solid, rgba(0, 0, 0, 0.0)),
        /* borderRadius(inherit), */
        /* borderColor(inherit), */
        top(px(-1)),
        right(px(-1)),
        bottom(px(-1)),
        left(px(-1)),
      ]),
      selector(
        " &:hover, &:focus",
        [
          textDecoration(`none),
          color(textColor),
          backgroundColor(baseColor),
          after([animationName(rippleOut), animationDuration(5000)]),
        ],
      ),
    ]
  | `ripple => [
      textDecoration(`none),
      selector(
        " &:hover, &:focus",
        [
          color(textColor),
          backgroundColor(inverse ? baseColor : hoverBaseColor),
          borderColor(inverse ? baseColor : hoverBaseColor),
        ],
      ),
    ]
  };

let conditionalStyles =
    (
      ~hoverEffect,
      ~hoverBaseColor,
      ~inverseStyle,
      ~textColor,
      ~baseColor,
      ~inverse,
    ) =>
  inverse ?
    switch (inverseStyle) {
    | `default => [
        backgroundColor(textColor),
        color(baseColor),
        ...hoverProps(
             ~hoverBaseColor,
             ~hoverEffect,
             ~textColor,
             ~baseColor,
             ~inverse,
           ),
      ]
    | `transparent => [
        backgroundColor(rgba(255, 255, 255, 0.0)),
        color(baseColor),
        ...hoverProps(
             ~hoverBaseColor,
             ~hoverEffect,
             ~textColor,
             ~baseColor,
             ~inverse,
           ),
      ]
    } :
    [backgroundColor(baseColor), color(textColor)];

let make =
    (
      ~baseColor,
      ~textColor,
      ~inverse=false,
      ~inverseStyle=`default,
      ~hoverEffect=`default,
      ~hoverBaseColor=?,
      children,
    ) => {
  ...component,
  render: _self =>
    <button
      className=(
        "component-button "
        ++ Css.style([
             textDecoration(`none),
             cursor(`pointer),
             borderColor(color_of_rgba(baseColor)),
             selector(
               "> *",
               [margin(px(0)), padding(px(0)), textDecoration(`none)],
             ),
             ...conditionalStyles(
                  ~inverse,
                  ~hoverBaseColor=
                    switch (hoverBaseColor) {
                    | None => color_of_rgba(textColor)
                    | Some(value) => color_of_rgba(value)
                    },
                  ~hoverEffect,
                  ~baseColor=color_of_rgba(baseColor),
                  ~textColor=color_of_rgba(textColor),
                  ~inverseStyle,
                ),
           ])
      )>
      children
    </button>,
};

[@bs.deriving abstract]
type jsProps = {
  baseColor: jsRgba,
  textColor: jsRgba,
  inverse: bool,
  inverseStyle,
  hoverEffect,
  hoverBaseColor: Js.nullable(jsRgba),
  children: ReasonReact.reactElement,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~baseColor=jsProps##baseColor,
      ~textColor=jsProps##textColor,
      ~inverse=jsProps##inverse,
      ~inverseStyle=jsProps##inverseStyle,
      ~hoverEffect=jsProps##hoverEffect,
      ~hoverBaseColor=jsProps##hoverBaseColor,
      jsProps##children,
    )
  );