import React from 'react';
import Input from './Input'
import {apiSearch} from '../API/youtube'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import Button from './Button'

import './SearchMain.css';

class SearchMain extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  inputSubmit = async (inputKeywords) => {
    try {
    const response = await apiSearch(inputKeywords);
    this.setState({
      videos: response.data.items
    })
    console.log("Response recieved:",response);
    }
    catch (err) {
      alert ('An error has occurred:' + err)
    }
  }

  videoSelected = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {

    return (
      <div className="SearchMain">
        <div className="menu">
          <Button route="/" name="Go back to menu"/>
        </div>
        <div className="content">
          <div className="searchBar">
            <div className="title">Please enter keywords to search:</div>
            <Input cbInputSubmit={this.inputSubmit}/>
          </div>
          <div className="search-results">
            <div className="video-player">
              {
                (Boolean(this.state.selectedVideo))&&
                <VideoPlayer videoSrc="https://www.youtube.com/embed/" videoId={this.state.selectedVideo.id.videoId}/>
              }  
            </div>
            <div className="video-list">
              { 
                (Boolean(this.state.videos.length))&&   
                <div className='show-results'>
                  <div className='title'>Search results:</div>
                  <VideoList videos={this.state.videos} cbSelectedVideo={this.videoSelected}/>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SearchMain;
