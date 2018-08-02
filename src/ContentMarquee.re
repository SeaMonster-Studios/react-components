let component = ReasonReact.statelessComponent("ContentMarquee");

let make = (~image, ~gradient=?, ~styles=?, children) => {
  ...component,
  render: _self =>
    <div
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
          ~styles2=styles,
        )
      )>
      (
        ReasonReact.createDomElement(
          "div",
          ~props={"gradient": gradient},
          children,
        )
      )
    </div>,
};

[@bs.deriving abstract]
type jsProps = {
  styles: string,
  gradient: string,
  image: Js.nullable(string),
  children: ReasonReact.reactElement,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~image=jsProps#image,
      ~gradient=jsProps#gradient,
      ~styles=?jsProps#styles,
      jsProps#children,
    )
  );