import React from 'react';
import Input from './Input'
import VideoPlayer from './VideoPlayer'
import Button from './Button'
import {apiUrlParse} from '../API/youtube'

import './UrlMain.css';

class UrlMain extends React.Component {
  state = {
    invalidInput: false,
    selectedVideoId: null
  }

  inputSubmit = (inputUrl) => {
    let result = apiUrlParse(inputUrl);
    if (result) {
      this.setState({invalidInput: false});
      this.setState({selectedVideoId: result});
      console.log('selected video ID: '+result);
    } 
    else {
      this.setState({invalidInput: true});
    }
  }

  render() {

    return (
      <div className="UrlMain">
        <div className="menu">
          <Button route="/" name="Go back to menu"/>
        </div>
        <div className="content">
          <div className="searchBar">
            <div className="title">Please enter url:</div>
            <Input cbInputSubmit={this.inputSubmit}/>
          </div>
          {
            (this.state.invalidInput)&&
            <div className="error">Please enter valid url</div>
          }
          <div className="search-results">
            <div className="video-player">
              {
                (Boolean(this.state.selectedVideoId)&&!this.state.invalidInput)&&
                <VideoPlayer videoSrc="https://www.youtube.com/embed/" videoId={this.state.selectedVideoId}/>
              }  
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default UrlMain;
