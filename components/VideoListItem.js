import React from 'react';
import PropTypes from 'prop-types';

import './VideoListItem.css';

class VideoListItem extends React.Component {

  state = {
  }

  static propTypes = {
    video: PropTypes.object.isRequired,
    cbSelectedVideo: PropTypes.func.isRequired,
  };


  render() {
    return (
    <div onClick={ () => cbSelectedVideo(this.state.video)} className='VideoListItem'>
      <img className='image' src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description}/>
      <div className='content'>
          <div className='header '>{this.props.video.snippet.title}</div>
      </div>
    </div>
    )
  }

}

export default VideoListItem;
