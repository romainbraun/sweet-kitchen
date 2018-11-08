import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <p>Hello Fucker</p>
    )
  }
}

export default hot(module)(App);