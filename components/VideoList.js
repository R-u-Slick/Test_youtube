import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem'

import './VideoList.css';

class VideoList extends React.Component {

  state = {
  }

  static propTypes = {
    videos: PropTypes.array.isRequired,
    cbSelectedVideo: PropTypes.func.isRequired,
  };

  keySearch = (video) => {    
    if (video.id.videoId) {
      return video.id.videoId
    }
    else {
      return video.id.playlistId
    }
  }

  render() {
    const renderedVideos =  this.props.videos.map((video) => {
      return <VideoListItem key={this.keySearch(video)} video={video} cbSelectedVideo={this.props.cbSelectedVideo} />
    });
    
    return <div className='VideoList'>{renderedVideos}</div>;
  }

}

export default VideoList;
