import React from 'react';
import ReactDOM from 'react-dom';
import QS from 'qs';
import './index.css';
import App from './App';
import FrameApp from './Frame';
import DynamicApp from './Dynamic';
import * as serviceWorker from './serviceWorker';

const { appName: rootAppName } = QS.parse(window.location.search, { ignoreQueryPrefix: true });
// eslint-disable-next-line no-undef
const isAppInIframe = globalThis.self !== globalThis.top;
console.log('rootAppName', rootAppName, 'isAppInIframe', isAppInIframe);

switch (rootAppName) {
  case 'frame':
    ReactDOM.render(<FrameApp />, document.getElementById('root'));
    break;
  case 'app1':
  case 'app2':
  case 'app3':
    ReactDOM.render(<DynamicApp appName={rootAppName} />, document.getElementById('root'));
    break;
  default:
    if (isAppInIframe === false) {
      ReactDOM.render(<App />, document.getElementById('root'));
    }
    break;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
