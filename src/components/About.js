import React, { useState, useEffect } from 'react';
import { Container, Col, CardDeck, Card } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";

//Import biography 


const About = () => {

    const [bios, setBios] = useState([]);

    const importedBios = []

    useEffect(() => {

        //Clear state. This is necessary because useEffect will keep appending state.
        setBios([]);

        importedBios.forEach(element => {

            fetch(element)
                .then(response => response.text())
                .then(text => {
                    setBios(prevState => [...prevState, text]);
                });

        });

    }, [/*Do Nothing Here*/]);

    return (
        <Container style={{ maxWidth: '90vw' }}>
            <Col>
                <Card style={{ fontSize: '1.25rem', padding: '50px' }}>
                    Learn the MERN is a web app to for helping people learn the MERN stack. It comprises lessons and a forum.
                    The lessons are made up of JavaScript (ES6+), React (Hooks), Git, Node.js, MongoDB, Authentication and Git.
                    Registered users are allowed to ask and answer questions in the forum.
                    The main goal of this project is to get developers up to speed with the MERN stack.
                    Users should have basic understanding of JavaScript prior to learning with this app.
                </Card>
            </Col>

            <CardDeck style={{ margin: '10px' }}>
                {
                    bios.map(element =>
                        <Card key={element} style={{ maxWidth: '350px', padding: '10px' }}>
                            <ReactMarkdown source={element.toString()} />
                        </Card>
                    )
                }
            </CardDeck>

        </Container>
    )
}

export default About;