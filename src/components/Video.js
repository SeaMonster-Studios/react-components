import React from "react"
import PropTypes from "prop-types"
import { setHtml } from "../utils/index"
import { LazyLoadImage } from "./LazyLoadImage"
import { Play as PlayIcon } from "./Icons"
import styled, { injectGlobal } from "react-emotion"

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
      max-width: 100%;
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

export class Video extends React.Component {
  state = {
    videoIsPlaying: false,
  }
  videoWrapperRef = React.createRef()
  playVideo = () => {
    this.setState({ videoIsPlaying: true })
    setTimeout(() => {
      const videoWrapper = this.videoWrapperRef.current

      if (videoWrapper) {
        const video = videoWrapper.querySelector("iframe")

        if (video) {
          video.setAttribute("src", video.getAttribute("src") + "&autoplay=1")
        }
      }
    }, 0)
  }
  render() {
    const { className, style, ...props } = this.props
    return (
      <Wrapper
        {...{
          "data-testid": "component-video",
          className,
          style,
        }}
      >
        {this.state.videoIsPlaying ? (
          <div
            className="video-responsive"
            ref={this.videoWrapperRef}
            {...setHtml(props.video)}
          />
        ) : (
          <button className="video-toggle" onClick={this.playVideo}>
            <div className="toggle-bg" />
            <LazyLoadImage src={props.thumbnail} className="thumbnail" />
            <div className="icon-wrapper">
              <PlayIcon />
            </div>
          </button>
        )}

        {props.caption && <p className="caption">{props.caption}</p>}
      </Wrapper>
    )
  }
}

Video.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  video: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string,
}

Video.defaultProps = {
  className: "",
  style: {
    maxWidth: "720px",
    margin: "0 auto",
  },
}
