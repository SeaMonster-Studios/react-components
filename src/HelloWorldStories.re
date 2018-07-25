open BsStorybook.Story;

let _module = [%bs.raw "module"];

storiesOf("HelloWorld", _module)
|. add("first chapter", () =>
     <HelloWorld name="Logan" />
   );
