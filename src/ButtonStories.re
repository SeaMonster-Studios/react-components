open ReasonReact;
open StyleUtils;

let _module = [%bs.raw "module"];

let baseColor = jsRgba(~r=255, ~g=99, ~b=71, ~a=1.0);
let hoverBaseColor = jsRgba(~r=255, ~g=84, ~b=166, ~a=1.0);
let textColor = jsRgba(~r=235, ~g=235, ~b=235, ~a=1.0);

BsStorybook.Story.storiesOf("Button", _module)
|. BsStorybook.Story.add("Standard button", () =>
     <Button
       baseColor
       textColor
       hoverBaseColor
       style=(
         ReactDOMRe.Style.make(~fontSize="22px", ~padding="10px 45px", ())
       )>
       (string("Grab some water"))
     </Button>
   )
|. BsStorybook.Story.add("Inverse", () =>
     <Button
       baseColor
       textColor
       hoverBaseColor
       inverse=true
       style=(
         ReactDOMRe.Style.make(~fontSize="22px", ~padding="10px 45px", ())
       )>
       (string("Grab some water"))
     </Button>
   )
|. BsStorybook.Story.add("Inverse/transparent", () =>
     <Button
       baseColor
       textColor
       hoverBaseColor
       inverse=true
       inverseStyle="transparent"
       style=(
         ReactDOMRe.Style.make(~fontSize="22px", ~padding="10px 45px", ())
       )>
       (string("Grab some water"))
     </Button>
   )
|. BsStorybook.Story.add("Ripple hover style", () =>
     <Button
       baseColor
       textColor
       hoverBaseColor=baseColor
       hoverStyle="ripple"
       style=(
         ReactDOMRe.Style.make(~fontSize="22px", ~padding="10px 45px", ())
       )>
       (string("Grab some water"))
     </Button>
   )
|. BsStorybook.Story.add("Button with an anchor tag", () =>
     <Button
       baseColor
       textColor
       hoverBaseColor
       style=(
         ReactDOMRe.Style.make(~fontSize="22px", ~padding="10px 45px", ())
       )>
       <a
         target="_blank"
         href="https://www.google.com/search?source=hp&ei=JRZpW4W9L-Td0gLe3rTACQ&q=Learn+about+reasonml&oq=Learn+about+reasonml&gs_l=psy-ab.3..0i22i30k1.869.3209.0.3434.21.14.0.0.0.0.200.1738.0j10j1.11.0....0...1.1.64.psy-ab..10.11.1737.0..0j35i39k1j0i131k1j0i13i30k1.0.RzvBa0sIOSw">
         (string("Learn about ReasonML"))
       </a>
     </Button>
   );