import React, { useState, useCallback } from 'react';
import './App.css';

const __DEV__ = process.env.NODE_ENV !== 'production';
const { PUBLIC_URL } = process.env;
const LOADING = 'loading';

const useAppState = () => {
  const [page, setPage] = useState('frame');
  const loadPage = useCallback((pageToLoad) => {
    setPage(LOADING);
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
  return <a href={`#link-to-${title.toLowerCase().replace(/[^\w]/, '-')}`} onClick={handleClick}>{title}</a>;
};

const getAppUrl = appName => {
  const url = (__DEV__ ? '' : PUBLIC_URL) + `/?appName=${encodeURIComponent(appName)}`;
  console.log('url', url);
  return url;
};

function App() {
  const [appName, loadApp] = useAppState();
  return (
    <div className="App">
      <header>
        <h1>NVDA not working well with iframes</h1>
        <p>Click on apps to load the iframe content with different apps.</p>
      </header>
      <nav className="Nav">
        <Link onClick={() => loadApp('frame')} title="iFrame App" />
        <Link onClick={() => loadApp('app2')} title="Dynamic App" />
      </nav>
      <div className="CurrentApp">Current app: <strong>{appName === LOADING ? 'unknown' : appName}</strong></div>
      <div className="FrameWrapper">
        {appName === LOADING
          ? 'Loading application...'
          : <iframe width="800" height="500" src={getAppUrl(appName)} title="Some title" />}
      </div>
    </div>
  );
}

export default App;
