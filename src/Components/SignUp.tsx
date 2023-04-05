import { useState } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function SignUp() {
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [BirthMonth, setBirthMonth] = useState('');
    const [BirthDay, setBirthDay] = useState('');
    const [BirthYear, setBirthYear] = useState('');
    const [Zip, setZip] = useState('');


    return (
        <div>
            <Container fluid>
                <Row className="signup-page-sections">
                    <Col className="signup-hero-bg">
                        <Row className="signup-page-text">
                            <Col className="hero-txt">
                                <h1>By Gamers.</h1>
                                <h1 className="for-gamers">For Gamers.</h1>
                                <p className="signup-par">Sign up now to cut out the middleman and start trading games directly with gamers in your local community!</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date of Birth</Form.Label>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Select aria-label="Default select example">
                                        <option>Month</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Control placeholder='Day'/>
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Control placeholder='Year'/>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control />
                            </Form.Group>



                            <div className="d-grid gap-2">
                                <Button variant="primary">
                                    Sign Up
                                </Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { SignUp }