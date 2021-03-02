import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const containerStyle = {
  background: '#1e212d',
  height: '100vh',
  margin: '0',
  overFlow: 'hidden',
  position: 'fixed',
  textAlign: 'center',
  width: '100vw'
}

const neonStyle = {
  color: '#fff',
  lineHeight: '50vh',
  fontSize: '5rem',
  margin: '0',
  textShadow: `
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff`,
}

const iconStyle = {
  color: 'white',
  cursor: 'pointer',
  fontSize: '5rem',
}

const App = () => {

  //Open New Tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <div style={containerStyle}>
      <div style={neonStyle}>
        Learn the MERN
      </div>
      <AiFillGithub style={iconStyle} onClick={() => openInNewTab('https://github.com/dulaya/learn-the-mern-client')} />
    </div>
  );
}

export default App;
