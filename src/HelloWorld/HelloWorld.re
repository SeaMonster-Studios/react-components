let component = ReasonReact.statelessComponent("Cta");
let str = ReasonReact.string;

let make = (~name, _children) => {
  ...component,
  render: _self => <div> (str("Hello " ++ name ++ "!")) </div>,
};

[@bs.deriving abstract]
type jsProps = {name: string};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~name=jsProps |. nameGet, [||])
  );