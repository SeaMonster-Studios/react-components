let _module = [%bs.raw "module"];

BsStorybook.Story.storiesOf("ContentMarquee", _module)
|. BsStorybook.Story.add("first chapter", () =>
     <ContentMarquee
       styles=(ReactDOMRe.Style.make(~padding="80px", ()))
       image="https://loremflickr.com/1400/400"
       gradient="linear-gradient(to right, rgb(74, 194, 154), rgba(189, 255, 243, 0.5))">
       <span> (ReasonReact.string("this is some children stuff")) </span>
     </ContentMarquee>
   );