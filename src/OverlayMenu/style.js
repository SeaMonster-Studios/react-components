import { injectGlobal, css } from "emotion"

injectGlobal({
  "body.component-overlay-menu-active": {
    maxHeight: "100vh",
    overflow: "hidden",
  },
})

export const defaultClassName = css`
  padding: 15px;
  display: block;
  background-color: rgba(255, 255, 255, 0.98);
  position: absolute;
  z-index: 900;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
  perspective: 1200;

  nav {
    display: flex;
    flex-direction: column;
  }
`
