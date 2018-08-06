// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReact from "../../../node_modules/reason-react/lib/es6_global/src/ReasonReact.js";
import * as StyleUtils$ReactTemplate from "./StyleUtils.js";

var component = ReasonReact.statelessComponent("ContentMarquee");

function make(image, gradient, style, children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: "component-content-marquee",
                          style: StyleUtils$ReactTemplate.combineWithOptionalStyles({
                                background: (
                                  gradient !== undefined ? gradient : "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))"
                                ) + (", url(" + (image + ")")),
                                backgroundPosition: "center center",
                                backgroundSize: "cover"
                              }, style)
                        }, ReasonReact.createDomElement("div", { }, children));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.image, jsProps.gradient, jsProps.style, jsProps.children);
      }));

export {
  component ,
  make ,
  $$default ,
  $$default as default,
  
}
/* component Not a pure module */