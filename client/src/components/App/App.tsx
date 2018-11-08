import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Link, Router } from 'react-router-dom';

import Routes from '../../routes';

const customHistory = createBrowserHistory();

class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Router history={customHistory}>
        <div>
          <Link to="/about">About</Link>
          <Routes></Routes>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
