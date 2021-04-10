import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

const Login = () => {
  let history = useHistory();
  const [validated, setValidated] = useState(false);
  const switchToRegister = () => history.push("/register");

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const userInfo = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    try {
      const loginURL = "http://localhost:5000/login" || process.env.Login_URL;

      await axios.post(loginURL, userInfo);
    } catch (error) {
        alert(error.response.data);
    }
  };

  return (
    <Container>
      <Col sm="12" md="8" lg="6" style={columnStyle}>
        <Form noValidate validated={validated} onSubmit={handleLogin}>
          <ListGroup>
            <ListGroup.Item
              style={{
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              Login
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
              <Button type="submit" value="Log In" style={inputStyle}>
                Login
              </Button>
              <Button
                onClick={switchToRegister}
                style={inputStyle}
                variant="outline-dark"
              >
                Switch to Registration
              </Button>
            </ListGroup.Item>
            <ListGroup.Item style={{ textAlign: "center" }}>
              <Spinner animation="border" role="status" /> Logging In...
            </ListGroup.Item>
          </ListGroup>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
