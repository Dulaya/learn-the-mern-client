import React from 'react';

import { Container, Col, Form, ListGroup, Button, Spinner } from 'react-bootstrap';

const columnStyle = {
    margin: '10px auto',
}

const inputStyle = {
    margin: '2.5px auto',
    width: '100%',
}

const Login = () => {

    const handleLogin = async (e) => {
        e.preventDefault();

        /*
        const userInfo = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        }*/

        try {


        } catch (error) {

        }

    }

    return (
        <Container >
            <Col sm='12' md='8' lg='6' style={columnStyle}>
                <Form onSubmit={handleLogin}>
                    <ListGroup >
                        <ListGroup.Item
                            style={{
                                fontSize: '1.25rem',
                                textAlign: 'center',
                            }}>Login</ListGroup.Item>
                        <ListGroup.Item >
                            <Form.Control id='username' placeholder='username' style={inputStyle} />
                            <Form.Text className="text-muted">
                                Min. 6 characters
                            </Form.Text>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Form.Control type="password" id='password' placeholder='password' autoComplete="off" style={inputStyle} />
                            <Form.Text className="text-muted">
                                Min. 6 characters
                            </Form.Text>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Button type='submit' value='Log In' style={inputStyle} >
                                Login
                            </Button>
                            <Button style={inputStyle} variant='outline-dark' >
                                Switch to Registration
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ textAlign: 'center' }}>
                            <Spinner animation="border" role="status" /> Logging In...
                                </ListGroup.Item>
                    </ListGroup>
                </Form>
            </Col>

        </Container>
    );
}

export default Login;