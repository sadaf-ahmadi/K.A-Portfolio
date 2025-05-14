import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const cardStyle = {
  height: '100%',
  cursor: 'pointer',
  textDecoration: 'none',
};

const Projects = () => {
  const projects = [
    {
      title: "Oakridge Redevelopment – EllisDon",
      text: "Assistant Project Manager for a $2.2B mixed-use development in Vancouver. Chaired OAC meetings, managed subcontractors, QA/QC, billing reviews, and client coordination across residential and commercial phases.",
      img: "/oakridge.jpeg",
      url: "https://www.linkedin.com/posts/oakridge-park_oakridgepark-vancouversculturalhub-vancouverdevelopment-activity-7313238553948237824-5An_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACp-od4B8YmFAMx8YtBd7sGDLuSc2faaKN8"
    },
    {
      title: "Willow Spring Construction – Estimating & Coordination",
      text: "Coordinated project documentation, handled closeout processes, prepared RFIs and NOPs, and supported tender submissions for tenant improvements and landlord projects up to $20M.",
      img: "/willow.jpg",
      url: "https://www.willowspring.ca/portfolio/oeb-breakfast-ambleside-west-vancouver/"
    },
    {
      title: "MNG Builders – Project Coordination",
      text: "Supported cost tracking, project scheduling, and on-site compliance for residential developments. Ensured subcontractor performance met technical specs and construction milestones.",
      img: "/mng.jpg",
      url: "https://www.mngbuilders.com" // Replace with real link if known
    }
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Projects</h2>
          <p className="mb-4 lead">
            A snapshot of projects I’ve contributed to — from large-scale redevelopments to technical coordination and project estimating.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map((project, idx) => (
          <Col md={6} lg={4} key={idx}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <Card bg="dark" text="light" className="h-100">
                <Card.Img
                  variant="top"
                  src={project.img}
                  alt={project.title}
                  style={{
                    height: '300px',      
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />

                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
