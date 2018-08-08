let component = ReasonReact.statelessComponent("ContentMarquee");

let make = (~image, ~gradient=?, ~style=?, ~className=?, children) => {
  ...component,
  render: _self =>
    <div
      className=(
        "component-content-marquee "
        ++ (
          switch (className) {
          | None => ""
          | Some(value) => value
          }
        )
      )
      style=(
        StyleUtils.combineWithOptionalStyles(
          ~styles=
            ReactDOMRe.Style.make(
              ~background=
                (
                  switch (gradient) {
                  | None => "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))"
                  | Some(gradient) => gradient
                  }
                )
                ++ ", url("
                ++ image
                ++ ")",
              ~backgroundSize="cover",
              ~backgroundPosition="center center",
              (),
            ),
          ~styles2=style,
        )
      )>
      ...children
    </div>,
};

[@bs.deriving abstract]
type jsProps = {
  style: Js.nullable(ReactDOMRe.Style.t),
  className: Js.nullable(string),
  gradient: Js.nullable(string),
  image: string,
  children: array(ReasonReact.reactElement),
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~image=jsProps |. imageGet,
      ~className=?Js.Nullable.toOption(jsProps |. classNameGet),
      ~gradient=?Js.Nullable.toOption(jsProps |. gradientGet),
      ~style=?Js.Nullable.toOption(jsProps |. styleGet),
      jsProps |. childrenGet,
    )
  );