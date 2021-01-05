import React from 'react';
import PropTypes from 'prop-types';

import './VideoListItem.css';

class VideoListItem extends React.Component {

  state = {
  }

  static propTypes = {
    video: PropTypes.object.isRequired,
    cbSelectedVideo: PropTypes.func.isRequired,  //callback that pass info about selected video
  };

  videoClicked = (EO) => {
    EO.stopPropagation();
    this.props.cbSelectedVideo(this.props.video);
  }

  render() {
      return (
        <div onClick={this.videoClicked} className='VideoListItem'>
          <img className='image' src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description}/>
          <div className='content'>
              <div className='header '>{this.props.video.snippet.title}</div>
          </div>
        </div>
      )
  }

}

export default VideoListItem;
