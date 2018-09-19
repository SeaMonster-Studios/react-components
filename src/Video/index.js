import React from "react"
import PropTypes from "prop-types"
//
import { setHtml } from "../../utils"
import { LazyLoadImage } from "../LazyLoadImage"
import { Play as PlayIcon } from "../components/Icons"
import { Wrapper } from "./style"

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
