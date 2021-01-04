import React from 'react';
import Input from './Input'
import youtube from '../API/youtube';
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'

import './SearchMain.css';

class SearchMain extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  inputSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
        params: {
            q: termFromSearchBar
        }
    })
    this.setState({
      videos: response.data.items
    })
    console.log("this is response",response);
  }

  videoSelected = (video) => {
    console.log('video'+video)
    this.setState({selectedVideo: video})
  }



  render() {

    return (
      <div className="SearchMain">
        <div className="Menu">
          
        </div>
        <div className="text">Please enter keywords to search</div>
        <Input cbInputSubmit={this.inputSubmit}/>
        {
          (Boolean(this.state.selectedVideo))&&
          <VideoPlayer video={this.state.selectedVideo}/>
        }  
        { 
          (Boolean(this.state.videos.length))&&   
          <VideoList videos={this.state.videos} cbSelectedVideo={this.videoSelected}/>
        }
      </div>
    )
  }

}

export default SearchMain;
