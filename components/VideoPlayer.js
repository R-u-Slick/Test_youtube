import React from 'react';
import PropTypes from 'prop-types';

import './VideoPlayer.css';

class VideoPlayer extends React.Component {

  state = {
  }

  static propTypes = {
    videoSrc: PropTypes.string,
    videoId: PropTypes.string,
  };

  render() {

    return (
      <div className='VideoPlayer'>
        <div className='title'>Current video:</div>
        <div className="player">
          <iframe src={this.props.videoSrc+this.props.videoId} allowFullScreen title="Video player" />
        </div>
      </div>
    );
    }

}

export default VideoPlayer;
