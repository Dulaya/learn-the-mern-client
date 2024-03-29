import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Col,
  Form,
  ListGroup,
  Button,
  Spinner,
} from "react-bootstrap";

const columnStyle = {
  margin: "10px auto",
};

const inputStyle = {
  margin: "2.5px auto",
  width: "100%",
};

const Register = () => {
  let history = useHistory();
  const [registeringStatus, setRegisteringStatus] = useState(false);
  const [validated, setValidated] = useState(false);
  const switchToLogin = () => history.push("/login");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const userInfo = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      repeatPassword: document.getElementById("repeatPassword").value,
    };

    try {
      setRegisteringStatus(true);

      //Note: the registerURL needs to change after during production.
      //It cannot be localhost:5000
      //Need to create enviroment variable in Netlify during production.
      const registerURL =
        "http://localhost:5000/register" || process.env.Register_URL;

      await axios.post(registerURL, userInfo);

      history.push("/login");
    } catch (error) {
      setRegisteringStatus(false);

      alert(error.response.data);
    }
    //Cleanup function to prevent memory leak.
    //https://stackoverflow.com/questions/59794079/memory-leak-issue-when-trying-to-update-state-in-useeffect-react-native
    return () => setRegisteringStatus(false);
  };

  return (
    <>
      <Container>
        <Col sm="12" md="8" lg="6" style={columnStyle}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <ListGroup>
              <ListGroup.Item
                onClick={switchToLogin}
                style={{
                  fontSize: "1.25rem",
                  textAlign: "center",
                }}
              >
                Registration
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Control
                  id="username"
                  placeholder="username"
                  style={inputStyle}
                  required
                />
                <Form.Text className="text-muted">Min. 6 characters</Form.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Control
                  id="email"
                  placeholder="email"
                  style={inputStyle}
                  required
                />
                <Form.Text className="text-muted">
                  Okay to use a fake email
                </Form.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="password"
                  autoComplete="off"
                  style={inputStyle}
                  required
                />
                <Form.Text className="text-muted">Min. 6 characters</Form.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Control
                  type="password"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  autoComplete="off"
                  style={inputStyle}
                  required
                />
                <Form.Text className="text-muted">
                  Re-enter password for verification
                </Form.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="submit"
                  value="Register"
                  style={inputStyle}
                  variant="success"
                >
                  Register
                </Button>
                <Button
                  onClick={switchToLogin}
                  style={inputStyle}
                  variant="outline-dark"
                >
                  Switch to Login
                </Button>
              </ListGroup.Item>
              {registeringStatus ? (
                <ListGroup.Item style={{ textAlign: "center" }}>
                  <Spinner animation="border" role="status" /> Registering...
                </ListGroup.Item>
              ) : (
                <></>
              )}
              <ListGroup.Item>
                • This app is for demo purpose only.
              </ListGroup.Item>
              <ListGroup.Item>
                • We will not contact you via email and/or share your email with
                anyone.
              </ListGroup.Item>
              <ListGroup.Item>
                • Your account, including email and posts, may be deleted from
                the database at the admin's discretion.
              </ListGroup.Item>
            </ListGroup>
          </Form>
        </Col>
      </Container>
    </>
  );
};

export default Register;
