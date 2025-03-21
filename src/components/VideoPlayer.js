import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";

class VideoPlayer extends Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, () => {
      var options = {
        video: this.videoNode,
        subUrl: this.props.subtitle,
        fonts: this.props.fonts,
        workerUrl: "/jassub/jassub-worker.js",
        wasmUrl: "/jassub/jassub-worker.wasm"
      };
      this.subtitlesRenderer = new window.JASSUB(options);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
    if (this.subtitlesRenderer) {
      this.subtitlesRenderer.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={node => (this.videoNode = node)} className="video-js" />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
