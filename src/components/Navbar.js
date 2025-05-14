import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-scroll';

const MyNavbar = () => {
  return (
<Navbar style={{ backgroundColor: '#0b1d2e', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">
  <img
    src="./logo.png"
    alt="Kourosh Logo"
    style={{ height: '90px', width: 'auto' }}
  />
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-auto d-flex align-items-center gap-4">
            {['home', 'about', 'projects', 'contact'].map(section => (
              <Link
                key={section}
                to={section}
                smooth={true}
                offset={-70} 
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer', color: 'white' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
