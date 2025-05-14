import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Contact</h2>
          <p className="lead mb-4">
            Whether you have a project in mind, a question, or just want to say hi — feel free to drop a message.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
