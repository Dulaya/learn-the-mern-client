import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { AiFillGithub } from "react-icons/ai";
import { Container, Navbar, Nav, CardDeck, Card } from "react-bootstrap";

import SideBar from "./components/SideBar";
import BrandName from "./components/BrandName";
import Forum from "./components/Forum";
import Login from './components/Login';
import Register from './components/Register';
import Homework from './components/Homework.md';
import About from "./components/About";
import Homework2Bio from "./components/Homework-2-bio.md";

const containerStyle = {
  minHeight: "100vh",
  textAlign: "center",
  width: "100vw",
};

const iconStyle = {
  cursor: "pointer",
  fontSize: "2rem",
};


const App = () => {

  const [homeworkMD, setHomeworkMD] = useState('');
  const [homework2MD, setHomework2MD] = useState('');

  //Fecth .md
  useEffect(() => {
    fetch(Homework)
    .then(response => response.text())
    .then(text => setHomeworkMD(text))
  }, []);

  useEffect(() => {
    fetch(Homework2Bio)
    .then(response => response.text())
    .then(text => setHomework2MD(text))
  }, []);

  //Open New Tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Router>

      <div style={containerStyle}>

        <BrandName />

        <Navbar style={{ fontSize: "1.25rem" }} bg="light" expand="lg">
          <Link style={{ margin: "0 10px" }} to="/">
            Home
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                style={{ margin: "0 10px" }}
                to="/lesson"
                exact
              >
                Lesson
                </NavLink>
            </Nav>
            <Nav>
              <Link style={{ margin: "0 10px" }} to="/forum">
                Forum
                </Link>
            </Nav>
            <Nav>
              <Link style={{ margin: '0 10px' }} to='/Login'>Login</Link>
            </Nav>
            <Nav>
              <Link style={{ margin: '0 10px' }} to='/Register'>Register</Link>
            </Nav>
            <Nav>
            <Link style={{ margin: '0 10px' }} to='/Homework'>Homework</Link>
            </Nav>
            <Nav>
            <Link style={{ margin: '0 10px' }} to='/about'>About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/">
          <Container>
            <CardDeck>
              <Card>
                <Link to="/lesson">
                  <Card.Img
                    variant="top"
                    src="https://stackify.com/wp-content/uploads/2018/10/JavaScript-Tutorials-for-Beginners-1280x720.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Lesson</Card.Title>
                    <Card.Text>Learn the MERN stack.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>

              <Card>
                <Link to="/forum">
                  <Card.Img
                    variant="top"
                    src="data:image/png;base64,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"
                  />
                  <Card.Body>
                    <Card.Title>Forum</Card.Title>
                    <Card.Text>Ask & Answer questions.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>

              <Card>
                <Link to="/login">
                  <Card.Img
                    variant="top"
                    src="https://spwww.sccpss.com/schools/rc/PublishingImages/login.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                      Already have an account? Login here.
                      </Card.Text>
                  </Card.Body>
                </Link>
              </Card>

              <Card>
                <Link to="/register">
                  <Card.Img
                    variant="top"
                    src="data:image/png;base64,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"
                  />
                  <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Card.Text>
                      Don't have an account? Register here.
                      </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </CardDeck>
          </Container>
        </Route>

        <Route path="/lesson">
          <SideBar />
        </Route>

        <Route path="/forum">
          <Forum />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/homework">
        <div style={{margin: 'auto 15vw',textAlign: 'left'}}>
          <ReactMarkdown>{homeworkMD}</ReactMarkdown>
          </div>
        </Route>

        <Route path="/homework-2-bio">
        <div style={{margin: 'auto 15vw',textAlign: 'left'}}>
          <ReactMarkdown>{homework2MD}</ReactMarkdown>
          </div>
        </Route>

        <div style={{ bottom: "0", width: "100%" }}>
          <Card style={{ display: "inline-block", margin: "5px", padding: "5px" }}
            onClick={() =>
              openInNewTab("https://github.com/dulaya/learn-the-mern-client")
            }
          >
            <Card.Body>
              <AiFillGithub
                style={iconStyle}
              />
            </Card.Body>
            <Card.Text>Client</Card.Text>
          </Card>
          <Card style={{ display: "inline-block", margin: "5px", padding: "5px" }}
            onClick={() =>
              openInNewTab("https://github.com/dulaya/learn-the-mern-server")
            }
          >
            <Card.Body>
              <AiFillGithub
                style={iconStyle}
              />
            </Card.Body>
            <Card.Text>Server</Card.Text>
          </Card>
        </div>

      </div>
    </Router>
  );
};

export default App;
