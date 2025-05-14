import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>About Me</h2>
          <p className="lead mb-3">
            I'm Kourosh, an Assistant Project Manager at EllisDon with a passion for precision, planning, and innovation in the construction industry.
            With over 4 years of experience leading large-scale commercial builds, I thrive in environments where detail and structure meet creativity.
          </p>
          <p className="lead mb-3">
            I bring a strong mix of field expertise and client relationship skills to every project.
            Whether I'm on-site coordinating subcontractors or meeting with stakeholders, I strive to bring vision to reality.
            Outside of work, I’m often on the tennis court, exploring new places around the city, or offering guidance to junior engineers getting started in the industry.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
