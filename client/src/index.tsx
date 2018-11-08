import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';

declare let module: any;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount'),
  );
});

if (module.hot) {
  module.hot.accept();
}
