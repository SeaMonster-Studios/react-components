import styled, { injectGlobal } from "react-emotion"
//

injectGlobal(`
  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`)

export const Wrapper = styled("div")`
  .caption {
    font-size: 14px;
    line-height: 1.125;
    background-color: rgb(0, 0, 0, 0.05);
    padding: 10px;
  }

  .video-toggle {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      position: relative;
      z-index: 1;
    }

    .toggle-bg {
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 2;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: width 0.2s ease, height 0.2s ease, border 0.2s ease;
    }

    .icon-wrapper {
      z-index: 3;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 35px;

        path {
          fill: rgba(255, 255, 255, 1);
        }
      }
    }

    &:hover,
    &:focus {
      .toggle-bg {
        width: 100px;
        height: 65px;
        border-radius: 5px;
      }
    }
  }
`
