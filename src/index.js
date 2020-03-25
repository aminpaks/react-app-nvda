import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FrameApp from './Frame';
import DynamicApp from './Dynamic';
import * as serviceWorker from './serviceWorker';

const appName = window.location.pathname.split('/')?.[1];

// eslint-disable-next-line no-undef
const __IFRAME__ = globalThis.self !== globalThis.top;

switch (appName) {
  case 'frame':
    ReactDOM.render(<FrameApp />, document.getElementById('root'));
    break;
  case 'app1':
  case 'app2':
  case 'app3':
    ReactDOM.render(<DynamicApp appName={appName} />, document.getElementById('root'));
    break;
  default:
    if (__IFRAME__ === false) {
      ReactDOM.render(<App />, document.getElementById('root'));
    }
    break;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
