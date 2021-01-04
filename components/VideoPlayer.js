import React from 'react';
import PropTypes from 'prop-types';

import './VideoPlayer.css';

class VideoPlayer extends React.Component {

  state = {
  }

  static propTypes = {
    video: PropTypes.object,
  };

  render() {
    console.log('video player rendered')
    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} allowFullScreen title="Video player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
    }

}

export default VideoPlayer;
