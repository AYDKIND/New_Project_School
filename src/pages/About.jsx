import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col>
          <div className="text-center mb-5">
            <h1 className="display-4 text-primary mb-3">About Our School</h1>
            <p className="lead text-muted">
              Nurturing Excellence, Building Character, Shaping Future Leaders
            </p>
          </div>
        </Col>
      </Row>

      {/* School Overview */}
      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <h2 className="text-primary mb-4">Baba VasuDev Public School</h2>
              <p className="lead mb-4">
                Established with a vision to provide quality education and holistic development, 
                Baba VasuDev Public School, NainaJhala has been a beacon of academic excellence 
                and character building for over two decades.
              </p>
              <p className="mb-4">
                Our institution is committed to fostering an environment where students can explore 
                their potential, develop critical thinking skills, and grow into responsible global 
                citizens. We believe in nurturing not just academic brilliance but also emotional 
                intelligence, creativity, and leadership qualities.
              </p>
              <p>
                Located in the serene environment of NainaJhala, our school provides an ideal 
                setting for learning, with modern infrastructure, dedicated faculty, and a 
                curriculum that balances traditional values with contemporary educational practices.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mission & Vision */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="h-100 shadow border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-eye fs-4"></i>
                </div>
              </div>
              <h3 className="text-primary text-center mb-3">Our Vision</h3>
              <p className="text-center">
                To be a leading educational institution that empowers students with knowledge, 
                skills, and values necessary to excel in a rapidly changing world while 
                maintaining strong ethical foundations and cultural heritage.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{width: '60px', height: '60px'}}>
                  <i className="fas fa-bullseye fs-4"></i>
                </div>
              </div>
              <h3 className="text-success text-center mb-3">Our Mission</h3>
              <p className="text-center">
                To provide comprehensive education that develops intellectual curiosity, 
                critical thinking, and moral character. We strive to create a supportive 
                learning environment that celebrates diversity and promotes lifelong learning.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Core Values */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center text-primary mb-4">Our Core Values</h2>
          <Row>
            <Col md={3} className="mb-3">
              <Card className="text-center h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-primary mb-3">
                    <i className="fas fa-graduation-cap fs-1"></i>
                  </div>
                  <h5 className="text-primary">Excellence</h5>
                  <p className="small">Striving for the highest standards in academics and character</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-success mb-3">
                    <i className="fas fa-heart fs-1"></i>
                  </div>
                  <h5 className="text-success">Integrity</h5>
                  <p className="small">Building honest, ethical, and responsible individuals</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-warning mb-3">
                    <i className="fas fa-lightbulb fs-1"></i>
                  </div>
                  <h5 className="text-warning">Innovation</h5>
                  <p className="small">Encouraging creativity and forward-thinking approaches</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-info mb-3">
                    <i className="fas fa-users fs-1"></i>
                  </div>
                  <h5 className="text-info">Community</h5>
                  <p className="small">Fostering a sense of belonging and social responsibility</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Facilities & Features */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow border-0">
            <Card.Body className="p-5">
              <h2 className="text-primary mb-4 text-center">Our Facilities & Features</h2>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Badge bg="primary" className="me-2">✓</Badge>
                      Modern, well-equipped classrooms with smart boards
                    </li>
                    <li className="mb-2">
                      <Badge bg="primary" className="me-2">✓</Badge>
                      Fully equipped science and computer laboratories
                    </li>
                    <li className="mb-2">
                      <Badge bg="primary" className="me-2">✓</Badge>
                      Comprehensive library with digital resources
                    </li>
                    <li className="mb-2">
                      <Badge bg="primary" className="me-2">✓</Badge>
                      Sports facilities including playground and indoor games
                    </li>
                    <li className="mb-2">
                      <Badge bg="primary" className="me-2">✓</Badge>
                      Art and music rooms for creative development
                    </li>
                    <li className="mb-2">
                      <Badge bg="primary" className="me-2">✓</Badge>
                      Medical room with qualified nursing staff
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Badge bg="success" className="me-2">✓</Badge>
                      Transportation facility covering wide areas
                    </li>

                    <li className="mb-2">
                      <Badge bg="success" className="me-2">✓</Badge>
                      CCTV surveillance for safety and security
                    </li>
                    <li className="mb-2">
                      <Badge bg="success" className="me-2">✓</Badge>
                      Regular parent-teacher interaction programs
                    </li>
                    <li className="mb-2">
                      <Badge bg="success" className="me-2">✓</Badge>
                      Extra-curricular activities and clubs
                    </li>
                    <li className="mb-2">
                      <Badge bg="success" className="me-2">✓</Badge>
                      Career guidance and counseling services
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Principal's Message */}
      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow border-0">
            <Card.Body className="p-5 text-center">
              <h3 className="text-primary mb-4">Message from the Principal</h3>
              <div className="mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{width: '100px', height: '100px'}}>
                  <i className="fas fa-user-tie fs-1 text-primary"></i>
                </div>
              </div>
              <blockquote className="blockquote">
                <p className="mb-4">
                  "Education is not just about acquiring knowledge; it's about developing the wisdom 
                  to use that knowledge for the betterment of society. At BVPS, we are committed to 
                  nurturing young minds who will become tomorrow's leaders, innovators, and 
                  compassionate human beings."
                </p>
              </blockquote>
              <footer className="blockquote-footer">
                <strong>Mr. Sunil Yadav</strong>
                <br />
                <small className="text-muted">Principal, Baba VasuDev Public School</small>
              </footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Information */}
      <Row>
        <Col>
          <Card className="bg-primary text-white shadow border-0">
            <Card.Body className="p-4 text-center">
              <h4 className="mb-3">Get in Touch</h4>
              <Row>
                <Col md={4}>
                  <i className="fas fa-map-marker-alt fs-4 mb-2"></i>
                  <p className="mb-0">
                    <strong>Address:</strong><br />
                    NainaJhala, District Sant Kabir Nagar
                  </p>
                </Col>
                <Col md={4}>
                  <i className="fas fa-phone fs-4 mb-2"></i>
                  <p className="mb-0">
                    <strong>Phone:</strong><br />
                    +91 98765 43210
                  </p>
                </Col>
                <Col md={4}>
                  <i className="fas fa-envelope fs-4 mb-2"></i>
                  <p className="mb-0">
                    <strong>Email:</strong><br />
                    abcde@bvpsschool.edu.in
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;