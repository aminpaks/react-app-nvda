import React from 'react';
import './DynamicApp.css';
import { Heading } from '../Heading';

export const DynamicApp = ({ appName }) => {
  return (
    <div className="App">
      <header>
        <Heading>
          <h1 tabIndex="0">Some Dynamic Application</h1>
        </Heading>
        <div>
          <p>Turn on NVDA and once the focus is on the heading above press (Arrow down) key.</p>
          <p>This text must be read after pressing Arrow down if everything works correctly.</p>
        </div>
      </header>
      <div>App name: {appName}</div>
    </div>
  );
};
