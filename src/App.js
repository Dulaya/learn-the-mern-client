import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { Navbar, Nav, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

import {
  containerStyle,
  neonStyle,
  iconStyle,
  accordionStyle,
  accordionHeaderStyle,
  buttonStyle,
} from './Styles.js';


const App = () => {

  const [info, setInfo] = useState('');

  const frontEndArray = ['JavaScript', 'React', 'React Router DOM', 'Context API', 'API'];
  const backEndArray = ['Node.js', 'Express.js', 'MongoDB'];
  const authenticationArray = ['JSON Web Token'];
  const stylingArray = ['Material UI', 'React Bootstrap'];

  //Open New Tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <Router>
      <div style={containerStyle}>

        <Navbar bg="light" expand="lg">
          <Link style={{ margin: '5px' }} to='/'>Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to='/forum'>Forum</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div style={neonStyle}>
          Learn the MERN
      </div>

        <Route exact path='/'>
          <Row>
            <Col style={{ maxWidth: '300px' }}>
              <Accordion style={accordionStyle} defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle style={accordionHeaderStyle} as={Card.Header} eventKey="0">
                    Front End
          </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {
                        frontEndArray.map(concept =>
                          <Button key={concept} variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
                        )
                      }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle style={accordionHeaderStyle} as={Card.Header} eventKey="1">
                    Back End
           </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      {
                        backEndArray.map(concept =>
                          <Button key={concept} variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
                        )
                      }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle style={accordionHeaderStyle} as={Card.Header} eventKey="2">
                    Authentication
           </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      {
                        authenticationArray.map(concept =>
                          <Button key={concept} variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
                        )
                      }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle style={accordionHeaderStyle} as={Card.Header} eventKey="3">
                    Styling
          </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      {
                        stylingArray.map(concept =>
                          <Button key={concept} variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
                        )
                      }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col style={{ color: 'white', maxWidth: '75vw', border: '1px solid' }}>
              <p style={{ fontSize: '2rem', }}>Some info about: {info}</p>
            </Col>
          </Row>
        </Route>

        <Route exact path='/forum'>
          <h1 style={{ color: 'white' }}>Forum</h1>
          <h1 style={{ color: 'white' }}>Nothing to show here yet. Only show route handling.</h1>
        </Route>

        <AiFillGithub style={iconStyle} onClick={() => openInNewTab('https://github.com/dulaya/learn-the-mern-client')} />
      </div>

    </Router>
  );
}

export default App;
