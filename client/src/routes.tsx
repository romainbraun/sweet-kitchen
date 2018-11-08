import * as React from 'react';
import { Route } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';

export default () => (
  <React.Fragment>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={AboutUs}></Route>
  </React.Fragment>
);
