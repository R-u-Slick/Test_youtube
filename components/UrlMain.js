import React from 'react';
import Input from './Input'
import VideoPlayer from './VideoPlayer'
import Button from './Button'

import './UrlMain.css';

class UrlMain extends React.Component {

  state = {
    selectedVideoId: null
  }

  inputSubmit = (termFromSearchBar) => {
    const url = termFromSearchBar;
    let parser = new URL(url);
    console.log(parser.search);
    this.setState({selectedVideoId: termFromSearchBar})
  }

  render() {

    return (
      <div className="SearchMain">
        <div className="menu">
          <Button route="/" name="Go back to menu"/>
        </div>
        <div className="content">
          <div className="searchBar">
            <div className="title">Please enter url:</div>
            <Input cbInputSubmit={this.inputSubmit}/>
          </div>
          <div className="search-results">
            <div className="video-player">
              {
                (Boolean(this.state.selectedVideoId))&&
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
