import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import schoolLogo from '../assets/school-logo.svg';

const Navbar = () => {
  const [isLogoLarge, setIsLogoLarge] = useState(false);

  const handleLogoClick = (e) => {
    // Enlarge the logo on click without navigating away
    e.preventDefault();
    setIsLogoLarge((prev) => !prev);
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src={schoolLogo}
            width={isLogoLarge ? 80 : 40}
            height={isLogoLarge ? 80 : 40}
            className="d-inline-block align-top me-2"
            alt="School Logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer', transition: 'width 200ms ease, height 200ms ease' }}
            title={isLogoLarge ? 'Click to reduce size' : 'Click to enlarge'}
          />
          Baba Vasudev Public School Naina Jhala
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/teacher">Teacher</Nav.Link>
            <Nav.Link as={Link} to="/student">Student</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;