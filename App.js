"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PageNav from './pages/PageNav';
import PagesRouter from './pages/PagesRouter'

ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesRouter/>
    </div>
  </BrowserRouter>
, document.getElementById('container') );
