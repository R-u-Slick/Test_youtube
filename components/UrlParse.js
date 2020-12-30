import React from 'react';
//import PropTypes from 'prop-types';

import './UrlParse.css';

class UrlParse extends React.Component {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="Searchbar">
        <label>Please, enter URL</label>
        <input name='video-search' type="text" placeholder="Search..."/>
      </div>
    )
    ;

  }

}

export default UrlParse;
