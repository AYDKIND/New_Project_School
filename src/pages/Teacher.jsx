import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, Button } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';

function Teacher() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [actionType, setActionType] = useState('');
  
  const handleActionClick = (action) => {
    // Check if user is already logged in from session storage
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const role = sessionStorage.getItem('userRole');
    
    if (loggedInStatus === 'true' && role === 'teacher') {
      // User is already logged in as teacher, handle the action
      alert(`You can now access: ${action}`);
    } else {
      // User needs to log in first
      setActionType(action);
      setShowLoginModal(true);
    }
  };
  
  const handleLoginSuccess = () => {
    // Handle the action after successful login
    alert(`You can now access teacher features`);
  };

  return (
    <Container>
      <div className="text-center mb-4">
        <h1>Teacher Dashboard</h1>
        <p className="lead">Manage your classes and student progress</p>
      </div>
      
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-100" 
            onClick={() => handleActionClick('add_marks')}
          >
            Add Student Marks
          </Button>
        </Col>
        <Col md={6}>
          <Button 
            variant="success" 
            size="lg" 
            className="w-100" 
            onClick={() => handleActionClick('attendance')}
          >
            Mark Attendance
          </Button>
        </Col>
      </Row>
      
      <Row>
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">My Classes</h5>
              <Badge bg="light" text="dark">4 Active</Badge>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                Mathematics - Grade 10
                <Badge bg="success">30 Students</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                Mathematics - Grade 9
                <Badge bg="success">28 Students</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                Mathematics - Grade 8
                <Badge bg="success">32 Students</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                Mathematics - Grade 7
                <Badge bg="success">26 Students</Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-info text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Upcoming Schedule</h5>
              <Badge bg="light" text="dark">Today</Badge>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Mathematics - Grade 10</span>
                  <span>8:00 AM - 9:30 AM</span>
                </div>
                <small className="text-muted">Room 101</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Mathematics - Grade 8</span>
                  <span>10:00 AM - 11:30 AM</span>
                </div>
                <small className="text-muted">Room 103</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Mathematics - Grade 9</span>
                  <span>1:00 PM - 2:30 PM</span>
                </div>
                <small className="text-muted">Room 102</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Mathematics - Grade 7</span>
                  <span>3:00 PM - 4:30 PM</span>
                </div>
                <small className="text-muted">Room 104</small>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">Assignments</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Algebra Quiz</div>
                  <small className="text-muted">Grade 10 • Due Oct 25</small>
                </div>
                <Badge bg="warning" text="dark">Pending</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Geometry Project</div>
                  <small className="text-muted">Grade 9 • Due Oct 30</small>
                </div>
                <Badge bg="warning" text="dark">Pending</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Fractions Test</div>
                  <small className="text-muted">Grade 8 • Due Oct 20</small>
                </div>
                <Badge bg="success">Graded</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Decimal Homework</div>
                  <small className="text-muted">Grade 7 • Due Oct 18</small>
                </div>
                <Badge bg="success">Graded</Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-warning text-dark">
              <h5 className="mb-0">Resources</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action>Lesson Plans</ListGroup.Item>
              <ListGroup.Item action>Teaching Materials</ListGroup.Item>
              <ListGroup.Item action>Curriculum Guide</ListGroup.Item>
              <ListGroup.Item action>Assessment Tools</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      
      {/* Login Modal */}
      <LoginModal 
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        onLogin={handleLoginSuccess}
        actionType={actionType}
      />
    </Container>
  );
}

export default Teacher;