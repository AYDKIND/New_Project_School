import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Carousel className="facilities-banner">
            <Carousel.Item>
              <div className="facility-item bg-primary text-white p-4 text-center">
                <h3>AC Classrooms</h3>
                <p>Modern air-conditioned classrooms for comfortable learning environment</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="facility-item bg-success text-white p-4 text-center">
                <h3>Playground</h3>
                <p>Spacious playground with sports facilities for physical activities</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="facility-item bg-info text-white p-4 text-center">
                <h3>Bus Services</h3>
                <p>Safe and reliable transportation for students from all areas</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="facility-item bg-warning text-dark p-4 text-center">
                <h3>Clean Water</h3>
                <p>Purified drinking water available throughout the campus</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      
      <div className="text-center mb-5">
        <h1>Welcome to Baba Vasudev Public School Naina Jhala</h1>
        <p className="lead">Select your role to continue</p>
      </div>
      
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card as={Link} to="/admin" className="role-card text-center h-100 text-decoration-none">
            <Card.Body>
              <div className="role-icon">👨‍💼</div>
              <Card.Title>Admin</Card.Title>
              <Card.Text>
                Manage school operations, staff, and resources
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card as={Link} to="/teacher" className="role-card text-center h-100 text-decoration-none">
            <Card.Body>
              <div className="role-icon">👩‍🏫</div>
              <Card.Title>Teacher</Card.Title>
              <Card.Text>
                Manage classes, assignments, and student grades
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card as={Link} to="/student" className="role-card text-center h-100 text-decoration-none">
            <Card.Body>
              <div className="role-icon">👨‍🎓</div>
              <Card.Title>Student</Card.Title>
              <Card.Text>
                View classes, assignments, and track your progress
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;