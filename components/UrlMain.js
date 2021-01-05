import React from 'react';
import Input from './Input'
import VideoPlayer from './VideoPlayer'
import Button from './Button'

import './UrlMain.css';

class UrlMain extends React.Component {

  state = {
    invalidInput: false,
    selectedVideoId: null
  }

  inputSubmit = (termFromSearchBar) => {
    const url = termFromSearchBar;
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    console.log(match)
    if (match && match[2].length == 11) {
      this.setState({invalidInput: false})
      this.setState({selectedVideoId: match[2]});
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
                <VideoPlayer videoId={this.state.selectedVideoId}/>
              }  
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default UrlMain;
