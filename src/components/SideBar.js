import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";


//Import lessons here
import ArrowFunction from "./lessons/ArrowFunction.md";
import TryCatch from "./lessons/TryCatch.md";
import AsyncAwait from "./lessons/AsyncAwait.md";
import DOM from "./lessons/DOM.md";
import CreateReactApp from "./lessons/CreateReactApp.md";
import UseState from "./lessons/UseState.md";
import UseEffect from "./lessons/UseEffect.md";
import UseContext from "./lessons/UseContext.md";
import ReactStyling from "./lessons/ReactStyling.md";
import Routing from "./lessons/Routing.md";
import HTTPRequests from "./lessons/HTTPRequests.md";
import ConnectingToDatabase from "./lessons/ConnectingToDatabase.md";
import CreatingSchema from "./lessons/CreatingSchema.md";
import CommonMongooseQueries from "./lessons/CommonMongooseQueries.md";
import CreatingToken from "./lessons/CreatingToken.md";
import VerifyingToken from "./lessons/VerifyingToken.md";
import Git from "./lessons/Git.md";
import CommonGitCommands from "./lessons/CommonGitCommands.md";
import PullRequest from "./lessons/PullRequest.md";
import BranchVsFork from "./lessons/BranchVsFork.md";

import { accordionStyle, accordionHeaderStyle } from "./Styles.js";

const SideBar = () => {

  const [currentState, setCurrentState] = useState([]);

  //Important: Order does matter. Make sure order matches contents in lessons array below
  const markDownLessons = [
    {"arrow-function":ArrowFunction}, 
    {"try-catch":TryCatch}, 
    {"async-await":AsyncAwait},
    {"DOM":DOM},
    {"create-react-app":CreateReactApp}, 
    {"usestate":UseState},
    {"useeffect":UseEffect},
    {"usecontext":UseContext},
    {"react-styling":ReactStyling},
    {"routing":Routing}, 
    {"http-requests":HTTPRequests},
    {"connecting-to-database":ConnectingToDatabase},
    {"creating-schema":CreatingSchema},
    {"common-mongoose-queries":CommonMongooseQueries},
    {"creating-token":CreatingToken},
    {"verifying-token":VerifyingToken},
    {"git":Git},
    {"common-git-commands":CommonGitCommands},
    {"pull-request":PullRequest},
    {"branch-vs-fork":BranchVsFork},
  ];

  const lessons = [
    {
      JavaScript: ["Arrow Function", "try catch", "async await", "DOM"],
    },
    {
      React: ["create-react-app", "useState", "useEffect", "useContext", "React Styling"],
    },
    {
      Nodejs: ["Routing", "HTTP Requests"],
    },
    {
      MongoDB: [
        "Connecting to database",
        "Creating schema",
        "Common Mongoose queries"
      ],
    },
    {
      Authentication: ["Creating token", "Verifying token"],
    },
    {
      "Git and GitHub": ["Git", "Common Git commands", "Pull Request", "Branch vs Fork"],
    },
  ];

  //Loop through the concepts and save links in array
  var links = [];

  for (var i = 0; i < lessons.length; i++) {
    for (var j = 0; j < Object.values(lessons[i]).length; j++) {
      for (var k = 0; k < Object.values(lessons[i])[j].length; k++) {
        links.push(Object.values(lessons[i])[j][k].replace(/ /g, "-"));
      }
    }
  }


  useEffect(() => {

    //Clear state. This is necessary because useEffect will keep appending state.
    setCurrentState([]);

markDownLessons.forEach(element => {

    var tempObj = {};
        fetch(Object.values(element))
        .then(response => response.text())
        .then(text => {
          tempObj[Object.keys(element)] = text;
          setCurrentState(prevState => [...prevState, tempObj]);
        });

      });
  
  }, [/*Do Nothing Here*/]);

  return (
    <Router>
      <Route path="/lesson">
        <Row style={{width: '100vw'}}>
          <Col style={{ maxWidth: "350px" }}>
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

          <Col style={{ maxWidth: '90vw' }}>
            <Card style={{ fontSize: '1.25rem', maxWidth: '75vw', padding: '50px', textAlign: 'left'}}>
              {
                currentState.map(element => <Route key={Object.keys(element)} exact path={`/lesson/${Object.keys(element)}`}>
                <ReactMarkdown>{Object.values(element).toString()}</ReactMarkdown>
                </Route>)
              }
            </Card>
          </Col>

        </Row>
      </Route>
    </Router>
  );
};

export default SideBar;
