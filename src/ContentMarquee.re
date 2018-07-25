let component = ReasonReact.statelessComponent("ContentMarquee");
let str = ReasonReact.string;

let make = (~gradient, ~children) => {
  ...component,
  render: _self => <div>
    <h2>(str("Some Title"))</h2>
    {ReasonReact.createDomElement("div", ~props={"gradient": gradient}, children);}
  </div>
};

[@bs.deriving abstract]

type jsProps = {
  gradient: string,
  children: ReasonReact.reactElement,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~gradient=jsProps#gradient,
      ~children=jsProps#children
    )
  );