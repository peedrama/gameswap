import { Container, Row, Col, Form } from "react-bootstrap";

function Messages() {
    return(
        <div>
            <Container fluid className="hero-bg-matches">
                <Row className="title-and-login-btn">
                    <Col>
                        <h2>GameSwap</h2>
                    </Col>
                    <Col className="login-btn">
                        <div className='test-btn'>
                            Login
                        </div>
                    </Col>
                </Row>
                <Row className="header-and-description">
                    <Col>
                        <h1>Messages</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <p>This col will display users</p>
                    </Col>
                    <Col>
                        <p>This col will display the messages</p>
                        <Row className="message-row">
                            <Col>Messages over here</Col>
                            <Col>
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Messages }