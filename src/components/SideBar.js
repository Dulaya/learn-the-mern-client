import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Accordion, Card } from "react-bootstrap";

import ArrowFunction from "./lessons/ArrowFunction";
import TryCatch from "./lessons/TryCatch";
import CreateReactApp from "./lessons/CreateReactApp";
import Git from "./lessons/Git";

import { accordionStyle, accordionHeaderStyle } from "./Styles.js";

const SideBar = () => {

  const lessons = [
    {
      JavaScript: ["Arrow Function", "try catch", "async await", "DOM"],
    },
    {
      React: ["create-react-app", "useState", "useEffect", "useContext"],
    },
    {
      Nodejs: ["Routing", "HTTP Requests"],
    },
    {
      MongoDB: [
        "Connecting to database",
        "Creating schema",
        "Adding removing from database",
      ],
    },
    {
      Authentication: ["Creating token", "Verifying token"],
    },
    {
      Git: ["Git"],
    },
  ];

  return (
    <Router>
      <Route path="/lesson">
        <Row>
          <Col style={{ maxWidth: '250px' }}>
            <Accordion style={accordionStyle} defaultActiveKey={lessons[0]}>
              {lessons.map((tech) => (
                <Card key={Object.keys(tech)}>
                  <Accordion.Toggle
                    style={accordionHeaderStyle}
                    as={Card.Header}
                    eventKey={tech}
                  >
                    {Object.keys(tech)}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={tech}>
                    <Card.Body>
                      {Object.values(tech).map((concept) => (
                        <span key={concept}>
                          {concept.map((subConcept) => (
                            <div key={subConcept}>
                              <Link
                                to={`/lesson/${subConcept.replace(/ /g, "-")}`}
                              >
                                {subConcept}
                              </Link>
                            </div>
                          ))}
                        </span>
                      ))}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>

          <Col style={{ float: 'left', maxWidth: '75vw'}}>
            <Card>
              <Route exact path={`/lesson/arrow-function`}>
                <ArrowFunction />
              </Route>
              <Route exact path={`/lesson/try-catch`}>
                <TryCatch />
              </Route>
              <Route exact path={`/lesson/create-react-app`}>
                <CreateReactApp />
              </Route>
              <Route exact path={`/lesson/git`}>
                <Git />
              </Route>
            </Card>
          </Col>

        </Row>
      </Route>
    </Router>
  );
};

export default SideBar;
