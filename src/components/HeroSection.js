import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div style={{
      background: '#0b1d2e',
      color: '#fff',
      padding: '10px, 0 60px',
    }}>
      <Container>
        <Row className="align-items-center gy-5">
          {/* LEFT SIDE - TEXT */}
          <Col md={6}>
            <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Hi, I'm Kourosh</h1>
            <h3 className="text-primary mb-4">Assistant Project Manager</h3>
            <p style={{ maxWidth: '500px' }}>
              Passionate about building the future with precision and structure. Let's create impactful spaces together.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button
                variant="outline-primary"
                href="/resume.pdf"
                download
              >
                Download Resume
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE - IMAGE */}
         <Col md={6} className="text-end position-relative">
  <div style={{
    position: 'relative',
    width: '100%',
    maxWidth: '420px',
    marginLeft: 'auto',
    overflow: 'hidden',
  }}>
    <img
      src="/K-2.png"
      alt="Kourosh"
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    />
    
    {/* Bottom fade */}
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '120px',
      background: 'linear-gradient(to bottom, rgba(11,29,46,0) 0%, rgba(11,29,46,1) 100%)',
      zIndex: 2
    }} />

    {/* Left fade */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '80px',
      background: 'linear-gradient(to right, rgba(11,29,46,1), rgba(11,29,46,0))',
      zIndex: 2
    }} />

    {/* Right fade */}
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '80px',
      background: 'linear-gradient(to left, rgba(11,29,46,1), rgba(11,29,46,0))',
      zIndex: 2
    }} />
  </div>
</Col>


        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
