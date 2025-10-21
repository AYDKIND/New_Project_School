import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as RBNavbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../assets/school-logo.svg';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="fixed-top">
      {/* Top Logo Bar */}
      <div className="bg-white border-bottom">
        <Container className="py-2 d-flex align-items-center">
          <img src={logo} alt="BABA VASUDEV PUBLIC SCHOOL" className="me-2 header-logo" />
        </Container>
      </div>

      {/* Contact Bar */}
      <div className="bg-light border-bottom">
        <Container className="py-2 d-flex flex-wrap align-items-center justify-content-between contact-bar">
          <div className="d-flex align-items-center gap-3">
            <span className="text-dark"><strong>Phone:</strong> +91 98765 43210</span>
            <span className="text-dark"><strong>Email:</strong> abcde@bvps.edu.in</span>
            <span className="text-dark"><strong>Alumni</strong> </span>
            <span className="text-dark"><strong>Fee</strong></span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="text-dark text-decoration-none">📘</a>
            <a href="#" className="text-dark text-decoration-none">🐦</a>
            <a href="#" className="text-dark text-decoration-none">📷</a>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <RBNavbar bg="primary" variant="dark" expand="md" className="shadow-sm">
        <Container>
          <RBNavbar.Toggle aria-controls="main-nav" />
          <RBNavbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
              <Nav.Link as={Link} to="/admission" className="px-3">Admission</Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3">About</Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="px-3">Gallery</Nav.Link>
            </Nav>

            {/* Login Dropdown (opens on hover) */}
            <div onMouseEnter={() => setShowLogin(true)} onMouseLeave={() => setShowLogin(false)}>
              <Dropdown show={showLogin} align="end">
                <Dropdown.Toggle id="login-dropdown" variant="light" className="fw-semibold">
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/admin">Admin Login</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/teacher">Faculty Login</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/student">Student Login</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </RBNavbar.Collapse>
        </Container>
      </RBNavbar>
    </header>
  );
};

export default Navbar;