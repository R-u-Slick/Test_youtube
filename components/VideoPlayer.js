import React from 'react';
import PropTypes from 'prop-types';

import './VideoPlayer.css';

class VideoPlayer extends React.Component {

  state = {
  }

  static propTypes = {
    videoId: PropTypes.string,
  };

  render() {
    const videoSrc = `https://www.youtube.com/embed/${this.props.videoId}`;
    return (
      <div className='VideoPlayer'>
        <div className='title'>Current video:</div>
        <div className="player">
          <iframe src={videoSrc} allowFullScreen title="Video player" />
        </div>
      </div>
    );
    }

}

export default VideoPlayer;
