import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';

const About = () => {

    return (
        <Container>
            <Col>
                <Card>
                    <p style={{ fontSize: '1.25rem', padding: '50px',}}>
                        Learn the MERN is a web app to for helping people learn the MERN stack. It comprises lessons and a forum.
                        The lessons are made up of JavaScript (ES6+), React (Hooks), Git, Node.js, MongoDB, Authentication and Git.
                        Registered users are allowed to ask and answer questions in the forum.
                        The main goal of this project is to get developers up to speed with the MERN stack.
                        Users should have basic understanding of JavaScript prior to learning with this app.
            </p>
                </Card>
            </Col>
        </Container>
    )
}

export default About;