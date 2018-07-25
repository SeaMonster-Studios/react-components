open BsStorybook.Story;

let _module = [%bs.raw "module"];
let str = ReasonReact.string;

storiesOf("ContentMarquee", _module)
|. add("first chapter", () =>
     <ContentMarquee gradient="Logan"><span>(str("this is some children stuff"))</span></ContentMarquee>
   );
