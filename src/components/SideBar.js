import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';

import LinkContext from '../context/LinkContext';
import ArrowFunction from './lessons/ArrowFunction';

import {
    accordionStyle,
    accordionHeaderStyle,
} from './Styles.js';

const SideBar = () => {

    const [info, setInfo] = useState('');

    const { links, setLinks } = useContext(LinkContext);

    const lessons = [
        {
            JavaScript: ['Arrow Function', 'try catch', 'async await', 'DOM']
        },
        {
            React: ['create-react-app', 'useState', 'useEffect', 'useContext']
        },
        {
            Nodejs: ['Routing', 'HTTP Requests']
        },
        {
            MongoDB: ['Connecting to database', 'Creating schema', 'Adding removing from database']
        },
        {
            Authentication: ['Creating token', 'Verifying token']
        }
    ];

    return (
        <Router>
            <Route path='/lesson'>
                <Row>
                    <Col>
                        <Accordion style={accordionStyle} defaultActiveKey={lessons[0]}>
                            {lessons.map(tech => <Card key={Object.keys(tech)}>
                                <Accordion.Toggle style={accordionHeaderStyle} as={Card.Header} eventKey={tech}>
                                    {Object.keys(tech)}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={tech}>
                                    <Card.Body>
                                        {
                                            Object.values(tech).map(concept => <span key={concept}>
                                                {
                                                    concept.map(subConcept => <div key={subConcept}>
                                                        <Link to={`/lesson/${subConcept.replace(' ', '-')}`}>{subConcept}</Link>
                                                    </div>)
                                                }
                                            </span>
                                            )
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>)}
                        </Accordion>
                    </Col>

                    <Col style={{ minWidth: '75vw', border: '1px solid' }}>
                        <Route exact path={`/lesson/arrow-function`}>
                            <ArrowFunction />
                        </Route>
                    </Col>

                </Row>
            </Route>
        </Router >
    );
}

export default SideBar;