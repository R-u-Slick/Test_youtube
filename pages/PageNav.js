import React from 'react';
import './PageNav.css';
import Button from '../components/Button'

import './PageNav.css';

class PageNav extends React.Component {

  render() {

    return (
      <div className="PageNav">
        <div className="header">Video search</div>
        <div className="links">
          <div className="button link-url">
            <Button route="/videoUrl" name="Enter url"/>
          </div>
          <div className="button link-search">
            <Button route="/videoSearch" name="Search via keywords"/>
          </div>
        </div>
      </div>
    )
  }

}

export default PageNav;
