import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
      <Navbar expand="lg">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/" style={{ color: '#fff', margin: '0 1rem' }}>Homepage</Nav.Link>
          <Nav.Link as={NavLink} to="/about" style={{ color: '#fff', margin: '0 1rem' }}>About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/programs" style={{ color: '#fff', margin: '0 1rem' }}>Programs</Nav.Link>
          <Nav.Link as={NavLink} to="/mentorship" style={{ color: '#fff', margin: '0 1rem' }}>Mentorship</Nav.Link>
          <Nav.Link as={NavLink} to="/community" style={{ color: '#fff', margin: '0 1rem' }}>Community</Nav.Link>
          <Nav.Link as={NavLink} to="/resources" style={{ color: '#fff', margin: '0 1rem' }}>Resources</Nav.Link>
          <Nav.Link as={NavLink} to="/donate" style={{ color: '#fff', margin: '0 1rem' }}>Donate</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" style={{ color: '#fff', margin: '0 1rem' }}>Contact us</Nav.Link>

        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
