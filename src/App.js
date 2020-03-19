import React, { useState, useCallback } from 'react';
import './App.css';
import { Page } from './Page';

const SwitchPage = ({ page }) => {
  switch (page) {
    case 'one':
      return <Page title='Page One' />
    case 'two':
      return <Page title='Page Two' />
    case 'three':
      return <Page title='Page Three' />
    default:
      return <div>Loading...</div>;
  }
}

const Link = ({ title, onClick }) => {
  const handleClick = useCallback(event => {
    event.preventDefault();
    onClick();
  }, [onClick])
  return <a href={`#link-to-page-${title.toLowerCase()}`} onClick={handleClick}>{title}</a>
}

const usePageState = () => {
  const [page, setPage] = useState('one');
  const loadPage = useCallback((pageToLoad) => {
    setPage('loading');
    setTimeout(() => {
      setPage(pageToLoad);
    }, 1000)
  }, []);


  return [page, loadPage];
}

function App() {
  const [page, loadPage] = usePageState();
  return (
    <div className="App">
      <nav className="Nav">
        <Link onClick={() => loadPage('one')} title="One" />
        <Link onClick={() => loadPage('two')} title="Two" />
        <Link onClick={() => loadPage('three')} title="Three" />
      </nav>
      <SwitchPage page={page} />
    </div>
  );
}

export default App;
