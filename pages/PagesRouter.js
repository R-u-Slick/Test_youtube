import React from 'react';
import { Route } from 'react-router-dom';
import PageNav from './PageNav';
import PageSearch from './PageSearch';

class PagesRouter extends React.Component {
          
  render() {


    return (
      <div>
        <Route exact path="/" component={PageNav} />
        {/* <Route path="/videoUrl" component={} /> */}
        <Route path="/videoSearch" component={PageSearch} />           
      </div>
    );
    
  }

}
    
export default PagesRouter;