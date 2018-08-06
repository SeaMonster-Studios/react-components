let component = ReasonReact.statelessComponent("ContentMarquee");

let make = (~image, ~gradient=?, ~style=?, children) => {
  ...component,
  render: _self =>
    <div
      className="component-content-marquee"
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
      (ReasonReact.createDomElement("div", ~props=Js.Obj.empty(), children))
    </div>,
};

[@bs.deriving abstract]
type jsProps = {
  style: Js.nullable(ReactDOMRe.Style.t),
  gradient: Js.nullable(string),
  image: string,
  children: array(ReasonReact.reactElement),
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~image=jsProps |. imageGet,
      ~gradient=?Js.Nullable.toOption(jsProps |. gradientGet),
      ~style=?Js.Nullable.toOption(jsProps |. styleGet),
      jsProps |. childrenGet,
    )
  );