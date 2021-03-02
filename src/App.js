import React from 'react';

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
  lineHeight: '100vh',
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

const App = () => {
  return (
    <div style={containerStyle}>
      <div style={neonStyle}>
        Learn the MERN
    </div>
    </div>
  );
}

export default App;
