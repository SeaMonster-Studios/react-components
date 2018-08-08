open Css;
open StyleUtils;

let component = ReasonReact.statelessComponent("Overlay");

[@bs.val]
external _getElementById : string => Dom.element = "document.getElementById";

[@bs.val]
external _createElement : string => Dom.element = "document.createElement";

let getRootEl = rootId => _getElementById(rootId);

let mount = _createElement("div");

let appendMount = [%raw
  {|
  function (parentId, mount) {
    if (typeof document !== "undefined") {
      console.log(parentId)
    }
  }
|}
];

let make = (~rootId="root", ~isActive, ~style=?, ~className=?, children) => {
  ...component,
  didMount: _self =>
    appendMount(
      rootId,
      mount,
      /* let rootEl = getRootEl(rootId); */
      /* rootEl.appendChild(mount); */
      (),
    ),
  willUnmount: _self => (),
  render: _self =>
    isActive ?
      ReactDOMRe.createPortal(
        <div
          className=(
            "component-overlay "
            ++ (
              switch (className) {
              | None => ""
              | Some(value) => value ++ " "
              }
            )
            ++ Css.style([display(`block)])
          )
          style=(
            switch (style) {
            | None => ReactDOMRe.Style.make()
            | Some(value) => value
            }
          )>
          ...children
        </div>,
        getRootEl(rootId),
      ) :
      <span> (ReasonReact.string("NOPE")) </span>,
};

[@bs.deriving abstract]
type jsProps = {
  isActive: bool,
  rootId: Js.nullable(string),
  style: Js.nullable(ReactDOMRe.Style.t),
  className: Js.nullable(string),
  children: array(ReasonReact.reactElement),
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~isActive=jsProps |. isActiveGet,
      ~rootId=?Js.Nullable.toOption(jsProps |. rootIdGet),
      ~className=?Js.Nullable.toOption(jsProps |. classNameGet),
      ~style=?Js.Nullable.toOption(jsProps |. styleGet),
      jsProps |. childrenGet,
    )
  );