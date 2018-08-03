let component = ReasonReact.statelessComponent("ContentMarquee");

let make = (~image, ~gradient=?, ~styles=?, children) => {
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
  styles: Js.nullable(string),
  gradient: Js.nullable(string),
  image: string,
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