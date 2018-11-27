import * as React from 'react';
import Posts from '../Posts/Posts';

export default class Admin extends React.PureComponent {
  public render() {
    return (
      <React.Fragment>
        <h1>Admin</h1>
        <Posts></Posts>
      </React.Fragment>
    );
  }
}
