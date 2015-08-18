import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default (
  <Route handler={App} path="/">
    <Route path='/' handler={Home} />
  </Route>
);