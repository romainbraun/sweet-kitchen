import * as React from 'react';
import { Route } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

export default () => (
  <React.Fragment>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={AboutUs}></Route>
    <Route path="/post/:post" component={PostDetail}></Route>
    <Route path="/admin" component={Admin}></Route>
    <Route path="/admin/new"></Route>
  </React.Fragment>
);
