import React from 'react';
import './PageNav.css';
import { NavLink } from 'react-router-dom';


class PageNav extends React.Component {

  render() {

    return (
      <div className="Page-nav">
        <div className="header">Search a video</div>
        <div className="links">
          <NavLink to="/videoUrl" className="PageLink" activeClassName="ActivePageLink">Search via url</NavLink>
          <NavLink to="/videoSearch" className="PageLink" activeClassName="ActivePageLink">Search via keywords</NavLink>
        </div>
      </div>
    )
  }

}

export default PageNav;
