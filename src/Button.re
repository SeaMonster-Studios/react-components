open Css;
open StyleUtils;

let component = ReasonReact.statelessComponent("Button");

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

let hoverProps = (~hoverEffect, ~hoverBaseColor, ~hoverTextColor) =>
  switch (hoverEffect) {
  | "ripple" => [
      transformOrigin(`percent(50.0), `percent(50.0)),
      position(`relative),
      after([
        transition(~duration=300, "border"),
        pseudoContent(" "),
        position(`absolute),
        border(px(1), `solid, rgba(0, 0, 0, 0.0)),
        cssInherit("borderRadius"),
        cssInherit("borderColor"),
        top(px(-1)),
        right(px(-1)),
        bottom(px(-1)),
        left(px(-1)),
      ]),
      selector(
        " &:hover, &:focus",
        [
          textDecoration(`none),
          color(hoverTextColor),
          selector(" > *", [color(hoverTextColor)]),
          backgroundColor(hoverBaseColor),
          after([animationName(rippleOut), animationDuration(500)]),
        ],
      ),
    ]
  | _ => [
      textDecoration(`none),
      selector(
        " &:hover, &:focus",
        [
          color(hoverTextColor),
          selector(" > *", [color(hoverTextColor)]),
          backgroundColor(hoverBaseColor),
          borderColor(hoverBaseColor),
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
      ~hoverTextColor,
    ) =>
  inverse ?
    switch (inverseStyle) {
    | "transparent" => [
        backgroundColor(rgba(255, 255, 255, 0.0)),
        color(baseColor),
        transition(~duration=300, "all"),
        selector(
          " *",
          [color(baseColor), transition(~duration=300, "all")],
        ),
        ...hoverProps(~hoverBaseColor, ~hoverEffect, ~hoverTextColor),
      ]
    | _ => [
        backgroundColor(textColor),
        color(baseColor),
        transition(~duration=300, "all"),
        selector(
          " *",
          [color(baseColor), transition(~duration=300, "all")],
        ),
        ...hoverProps(~hoverBaseColor, ~hoverEffect, ~hoverTextColor),
      ]
    } :
    [
      backgroundColor(baseColor),
      color(textColor),
      transition(~duration=300, "all"),
      selector(" *", [color(textColor), transition(~duration=300, "all")]),
      ...hoverProps(~hoverBaseColor, ~hoverEffect, ~hoverTextColor),
    ];

let make =
    (
      ~baseColor,
      ~textColor,
      ~inverse=false,
      ~inverseStyle="default",
      ~hoverEffect="default",
      ~hoverBaseColor=?,
      ~hoverTextColor=?,
      ~style=?,
      children,
    ) => {
  ...component,
  render: _self =>
    <button
      style=(
        switch (style) {
        | None => ReactDOMRe.Style.make()
        | Some(value) => value
        }
      )
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
                    | None => color_of_rgba(baseColor)
                    | Some(value) => color_of_rgba(value)
                    },
                  ~hoverTextColor=
                    switch (hoverTextColor) {
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
  style: Js.nullable(ReactDOMRe.Style.t),
  baseColor: jsRgba,
  textColor: jsRgba,
  inverse: bool,
  inverseStyle: string,
  hoverEffect: string,
  hoverBaseColor: Js.nullable(jsRgba),
  children: ReasonReact.reactElement,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~style=?Js.Nullable.toOption(jsProps |. styleGet),
      ~baseColor=jsProps |. baseColorGet,
      ~textColor=jsProps |. textColorGet,
      ~inverse=jsProps |. inverseGet,
      ~inverseStyle=jsProps |. inverseStyleGet,
      ~hoverEffect=jsProps |. hoverEffectGet,
      ~hoverBaseColor=?Js.Nullable.toOption(jsProps |. hoverBaseColorGet),
      jsProps |. childrenGet,
    )
  );