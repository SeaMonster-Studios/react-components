export const imports = {
  'src/Button/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-button-doc" */ 'src/Button/doc.mdx'),
}
