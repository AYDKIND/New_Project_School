import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import logo from '../assets/school-logo.svg';

function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <section className="position-relative text-center text-white" style={{ minHeight: '70vh', background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)' }}>
        <Container className="position-relative py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
          <h1 className="display-5 fw-bold mb-3">Welcome to Baba VasuDev Public School NainaJhala</h1>
          <p className="lead mb-4">A Place to Learn, Grow, and Excel</p>
          <Button as={Link} to="/admission" variant="warning" className="fw-semibold px-4 py-2">Explore Admissions</Button>
        </Container>
      </section>

      {/* Welcome / About Us Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            {/* Left Column - Principal's Message */}
            <Col md={6}>
              <h2 className="h3 fw-bold text-dark mb-3">Message from the Principal</h2>
              <p className="text-muted mb-3">
                Welcome to Baba Vasudev Public School NainaJhala, where we believe in nurturing young minds and shaping future leaders. Our commitment to excellence in education has been unwavering for decades, and we continue to provide a holistic learning environment that fosters creativity, critical thinking, and character development.
              </p>
              <p className="text-muted mb-3">
                At BVPS, we understand that every child is unique and has their own potential to unlock. Our dedicated faculty and state-of-the-art facilities ensure that students receive the best possible education while developing essential life skills.
              </p>
              <p className="text-muted">
                We invite you to join our school family and embark on a journey of academic excellence and personal growth that will prepare your child for a bright and successful future.
              </p>
            </Col>

            {/* Right Column - Principal Card (local-safe image) */}
            <Col md={6}>
              <Card className="shadow-sm">
                <div className="d-flex align-items-center justify-content-center" style={{ height: '180px', background: 'linear-gradient(135deg, #e9ecef, #ced4da)' }}>
                  <img src={logo} alt="BABA VASUDEV PUBLIC SCHOOL" style={{ height: '120px', width: 'auto' }} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Mr Sunil Yadav</Card.Title>
                  <Card.Text className="text-muted">Principal, BVPS</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* News & Events Section (local-safe placeholders) */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="h3 fw-bold text-center text-dark mb-4">Latest News & Events</h2>
          <Row className="g-4">
            {/* News Card 1 */}
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-center text-white" style={{ height: '180px', background: 'linear-gradient(135deg, #4dabf7, #1c7ed6)' }}>
                  <span className="fs-1">🏆</span>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">Annual Sports Day 2025</Card.Title>
                  <small className="text-muted d-block mb-2">October 15, 2025</small>
                  <Card.Text>
                    Join us for our annual sports day celebration featuring various athletic competitions and cultural performances.
                  </Card.Text>
                  <Link to="#" className="text-primary fw-semibold text-decoration-none">Read More →</Link>
                </Card.Body>
              </Card>
            </Col>

            {/* News Card 2 */}
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-center text-white" style={{ height: '180px', background: 'linear-gradient(135deg, #69db7c, #2b8a3e)' }}>
                  <span className="fs-1">🔬</span>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">Science Exhibition 2025</Card.Title>
                  <small className="text-muted d-block mb-2">February 28, 2025</small>
                  <Card.Text>
                    Students showcase their innovative science projects and experiments in our annual science exhibition.
                  </Card.Text>
                  <Link to="#" className="text-primary fw-semibold text-decoration-none">Read More →</Link>
                </Card.Body>
              </Card>
            </Col>

            {/* News Card 3 */}
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-center text-white" style={{ height: '180px', background: 'linear-gradient(135deg, #b197fc, #7048e8)' }}>
                  <span className="fs-1">🎨</span>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">Art & Culture Fest</Card.Title>
                  <small className="text-muted d-block mb-2">April 10, 2025</small>
                  <Card.Text>
                    Celebrate creativity and cultural diversity at our annual art and culture festival with performances and exhibitions.
                  </Card.Text>
                  <Link to="#" className="text-primary fw-semibold text-decoration-none">Read More →</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row className="g-4">
            {/* Column 1 - About BVPS */}
            <Col md={4}>
              <h3 className="h5 fw-bold mb-3">About BVPS</h3>
              <p className="text-light">
                Baba VasuDev Public School is committed to providing quality education and nurturing young minds for over decade. We believe in holistic development and preparing students for a bright future.
              </p>
            </Col>

            {/* Column 2 - Quick Links */}
            <Col md={4}>
              <h3 className="h5 fw-bold mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li><Link to="/admission" className="text-light text-decoration-none">Admission</Link></li>
                <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
                <li><Link to="/gallery" className="text-light text-decoration-none">Gallery</Link></li>
                <li><Link to="/admin" className="text-light text-decoration-none">Admin Login</Link></li>
                <li><Link to="/teacher" className="text-light text-decoration-none">Faculty Login</Link></li>
                <li><Link to="/student" className="text-light text-decoration-none">Student Login</Link></li>
              </ul>
            </Col>

            {/* Column 3 - Contact Us */}
            <Col md={4}>
              <h3 className="h5 fw-bold mb-3">Contact Us</h3>
              <p className="mb-1"><strong>Address:</strong><br />Naina Jhala, District Sant Kabir Nagar<br />Uttar Pradesh, India</p>
              <p className="mb-1"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="mb-3"><strong>Email:</strong> abcde@bvps.edu.in</p>
              <div className="d-flex gap-3">
                <a href="#" className="text-light text-decoration-none">📘</a>
                <a href="#" className="text-light text-decoration-none">🐦</a>
                <a href="#" className="text-light text-decoration-none">📷</a>
              </div>
            </Col>
          </Row>
          <div className="border-top border-secondary mt-4 pt-3 text-center">
            <small className="text-secondary">@ 2025 Baba VasuDev Public School. All rights reserved.</small>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Home;