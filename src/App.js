import React, { useState, useCallback } from 'react';
import './App.css';

const __DEV__ = process.env.NODE_ENV !== 'production';
const { PUBLIC_URL } = process.env;

const useAppState = () => {
  const [page, setPage] = useState('frame');
  const loadPage = useCallback((pageToLoad) => {
    setPage('loading');
    setTimeout(() => {
      setPage(pageToLoad);
    }, 1000);
  }, []);


  return [page, loadPage];
};

const Link = ({ title, onClick }) => {
  const handleClick = useCallback(event => {
    event.preventDefault();
    onClick();
  }, [onClick]);
  return <a href={`#link-to-page-${title.toLowerCase()}`} onClick={handleClick}>{title}</a>;
};

const getAppUrl = appName => {
  return (__DEV__ ? PUBLIC_URL : '') + `/${appName}`;
};

function App() {
  const [appName, loadApp] = useAppState();
  return (
    <div className="App">
      <header>
        <h1 tabIndex="0">NVDA not working well with iframes</h1>
        <p>Click on apps to dynamically replace the iframe content.</p>
      </header>
      <nav className="Nav">
        <Link onClick={() => loadApp('frame')} title="App 1" />
        <Link onClick={() => loadApp('app2')} title="App 2" />
        <Link onClick={() => loadApp('app3')} title="App 3" />
      </nav>
      <div className="CurrentApp">Current app: <strong>{appName === 'loading' ? 'unknown' : appName}</strong></div>
      <div className="FrameWrapper">
        {appName === '/loading'
          ? 'Loading application...'
          : <iframe width="800" height="500" src={getAppUrl(appName)} title="Some title" />}
      </div>
    </div>
  );
}

export default App;
