open ReasonReact;

let _module = [%bs.raw "module"];

BsStorybook.Story.storiesOf("ContentMarquee", _module)
|. BsStorybook.Story.add("Without gradient", () =>
     <ContentMarquee
       styles=(
         ReactDOMRe.Style.make(
           ~padding="80px",
           ~fontSize="45px",
           ~color="white",
           (),
         )
       )
       image="https://loremflickr.com/1400/400">
       <h2>
         (string("Try our newest flavor!"))
         <br />
         <em style=(ReactDOMRe.Style.make(~color="yellow", ()))>
           (string("banana by bananarama"))
         </em>
       </h2>
       <button> (string("Get some")) </button>
     </ContentMarquee>
   )
|. BsStorybook.Story.add("With gradient", () =>
     <ContentMarquee
       styles=(
         ReactDOMRe.Style.make(
           ~padding="80px",
           ~fontSize="45px",
           ~color="white",
           (),
         )
       )
       image="https://loremflickr.com/1400/400"
       gradient="linear-gradient(to right, rgb(74, 194, 154), rgba(189, 255, 243, 0.5))">
       <h2>
         (string("Try our newest flavor!"))
         <br />
         <em style=(ReactDOMRe.Style.make(~color="yellow", ()))>
           (string("banana by bananarama"))
         </em>
       </h2>
       <button> (string("Get some")) </button>
     </ContentMarquee>
   );