import React from 'react';
import './PageNav.css';
import { NavLink } from 'react-router-dom';

import './PageNav.css';

class PageNav extends React.Component {

  render() {

    return (
      <div className="PageNav">
        <div className="header">Video search</div>
        <div className="links">
          <div className="button link-url">
            <NavLink to="/videoUrl" className="page-link" activeClassName="page-link-active">Search via url</NavLink>
          </div>
          <div className="button link-search">
            <NavLink to="/videoSearch" className="page-link" activeClassName="page-link-active">Search via keywords</NavLink>
          </div>
        </div>
      </div>
    )
  }

}

export default PageNav;
