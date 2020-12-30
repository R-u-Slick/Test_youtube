import React from 'react';
import UrlParse from './UrlParse'
//import PropTypes from 'prop-types';

import './Main.css';

class Main extends React.Component {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="Main">
        <UrlParse/>
      </div>
    )
    ;

  }

}

export default Main;
