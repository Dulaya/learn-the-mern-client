import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

const containerStyle = {
  background: '#1e212d',
  minHeight: '100vh',
  textAlign: 'center',
  width: '100vw'
}

const neonStyle = {
  color: '#fff',
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

const accordionStyle = {
  margin: '10px',
  maxWidth: '250px',
}

const accordionHeaderStyle = {
  background: '#03506f',
  color: 'white',
}

const buttonStyle = {
  margin: '5px 0',
  width: '100%',
}

const App = () => {

  const [info, setInfo] = useState('');

  const frontEndArray = ['JavaScript', 'React', 'React Router DOM', 'Context API', 'API'];
  const backEndArray = ['Node.js', 'Express.js', 'MongoDB'];
  const authenticationArray  = ['JSON Web Token'];
  const stylingArray  = ['Material UI', 'React Bootstrap'];

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
                      <Button variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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
                      <Button variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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
                      <Button variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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
                      <Button variant='info' style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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

      <AiFillGithub style={iconStyle} onClick={() => openInNewTab('https://github.com/dulaya/learn-the-mern-client')} />
    </div>
  );
}

export default App;
