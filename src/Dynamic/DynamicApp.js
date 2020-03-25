import React, { useState, useCallback } from 'react';
import './DynamicApp.css';
import { Heading } from '../Heading';

export const DynamicApp = ({ appName }) => {
  return (
    <div className="App">
      <header>
        <Heading>
          <h1 tabIndex="0">NVDA not working well with iframes</h1>
        </Heading>
        <p>Load multiple apps to dynamically replace the iframe content</p>
      </header>
      <div>App name: {appName}</div>
    </div>
  );
};
