open Css;

let component = ReasonReact.statelessComponent("Button");

/* [@bs.deriving jsConverter]
   type tagType = [ | `Link | [@bs.as "a"] `A | [@bs.as "button"] `Button]; */

/* [@bs.deriving abstract]
   type jsProps = {tagType};

   let default =
     ReasonReact.wrapReasonForJs(~component, jsProps =>
       make(~tagType=jsProps##tagType, jsProps##children)
     ); */

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
      ~inverse,
      ~inverseStyle,
      ~hoverEffect,
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
             borderColor(baseColor),
             selector(
               "> *",
               [margin(px(0)), padding(px(0)), textDecoration(`none)],
             ),
             ...conditionalStyles(
                  ~inverse,
                  ~hoverBaseColor=
                    switch (hoverBaseColor) {
                    | None => textColor
                    | Some(value) => value
                    },
                  ~hoverEffect,
                  ~baseColor,
                  ~textColor,
                  ~inverseStyle,
                ),
           ])
      )>
      children
    </button>,
};

/* [@bs.deriving abstract]
   type jsProps = {children: ReasonReact.reactElement};

   let default =
     ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children)); */