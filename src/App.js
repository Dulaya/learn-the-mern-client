import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { Navbar, Nav, } from 'react-bootstrap';

import SideBar from './components/SideBar';
import BrandName from './components/BrandName';
import Forum from './components/Forum';

const containerStyle = {
  minHeight: '100vh',
  textAlign: 'center',
  width: '100vw'
}

const iconStyle = {
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
    <Router>
      <div style={containerStyle}>

        <Navbar style={{fontSize: '1.25rem'}} bg="light" expand="lg">
          <Link style={{ margin: '0 10px' }} to='/'>Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to='/forum'>Forum</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <BrandName />

        <Route exact path='/'>
          <SideBar />
        </Route>

        <Route exact path='/forum'>
          <Forum />
        </Route>

        <AiFillGithub style={iconStyle} onClick={() => openInNewTab('https://github.com/dulaya/learn-the-mern-client')} />
      </div>

    </Router>
  );
}

export default App;
