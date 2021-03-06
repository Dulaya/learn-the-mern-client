import React, { useState } from 'react';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';

import {
    accordionStyle,
    accordionHeaderStyle,
    buttonStyle,
} from './Styles.js';

const SideBar = () => {

    const [info, setInfo] = useState('');

    const frontEndArray = ['JavaScript', 'React', 'React Router DOM', 'Context API', 'API'];
    const backEndArray = ['Node.js', 'Express.js', 'MongoDB'];
    const authenticationArray = ['JSON Web Token'];
    const stylingArray = ['Material UI', 'React Bootstrap'];

    return (
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
                                        <Button key={concept} style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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
                                        <Button key={concept} style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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
                                        <Button key={concept} style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
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
                                        <Button key={concept} style={buttonStyle} onClick={() => setInfo(concept)}>{concept}</Button>
                                    )
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>

            <Col style={{ maxWidth: '75vw', border: '1px solid' }}>
                <p style={{ fontSize: '2rem', }}>Some info about: {info}</p>
            </Col>
        </Row>
    );
}

export default SideBar;