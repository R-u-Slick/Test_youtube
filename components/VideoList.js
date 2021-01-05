import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem'

import './VideoList.css';

class VideoList extends React.Component {

  state = {
  }

  static propTypes = {
    videos: PropTypes.array.isRequired,
    cbSelectedVideo: PropTypes.func.isRequired, //callback that pass info about selected video
  };

  render() {
    const renderedVideos =  this.props.videos.map((video) => {
      return <VideoListItem key={video.id.videoId} video={video} cbSelectedVideo={this.props.cbSelectedVideo} />
    });
    
    return <div className='VideoList'>{renderedVideos}</div>;
  }
}

export default VideoList;
