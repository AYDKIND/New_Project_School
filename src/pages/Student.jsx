import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, ProgressBar, Button, Form, Modal } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';

function Student() {
  const [showFeeModal, setShowFeeModal] = useState(false);
  const [showAdmissionModal, setShowAdmissionModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [actionType, setActionType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleFeeSubmit = (e) => {
    e.preventDefault();
    // Fee submission logic would go here
    setShowFeeModal(false);
    alert('Fee payment successful!');
  };
  
  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    // Admission submission logic would go here
    setShowAdmissionModal(false);
    alert('Admission application submitted successfully!');
  };
  
  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    
    // Open the appropriate modal based on action type
    if (userData.actionType === 'fee_submission') {
      setShowFeeModal(true);
    } else if (userData.actionType === 'online_admission') {
      setShowAdmissionModal(true);
    }
  };
  
  const handleActionClick = (action) => {
    // For online admission, allow direct access without login
    if (action === 'online_admission') {
      setShowAdmissionModal(true);
      return;
    }
    
    // For other actions like fee submission, check authentication
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const role = sessionStorage.getItem('userRole');
    
    if (loggedInStatus === 'true' && role === 'student') {
      // User is already logged in as student, show the appropriate modal
      if (action === 'fee_submission') {
        setShowFeeModal(true);
      }
    } else {
      // User needs to log in first
      setActionType(action);
      setShowLoginModal(true);
    }
  };
  
  return (
    <Container>
      <div className="text-center mb-4">
        <h1>Student Dashboard</h1>
        <p className="lead">Track your academic progress and activities</p>
      </div>
      
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-100" 
            onClick={() => handleActionClick('fee_submission')}
          >
            Fee Submission
          </Button>
        </Col>
        <Col md={6}>
          <Button 
            variant="success" 
            size="lg" 
            className="w-100" 
            onClick={() => handleActionClick('online_admission')}
          >
            Online Admission
          </Button>
        </Col>
      </Row>
      
      {/* Login Modal */}
      <LoginModal 
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        onLogin={handleLoginSuccess}
        actionType={actionType}
      />
      
      <Row>
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">My Courses</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Mathematics</span>
                  <Badge bg="success">92%</Badge>
                </div>
                <ProgressBar variant="success" now={92} className="mt-2" style={{height: "8px"}} />
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Science</span>
                  <Badge bg="info">85%</Badge>
                </div>
                <ProgressBar variant="info" now={85} className="mt-2" style={{height: "8px"}} />
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between align-items-center">
                  <span>English</span>
                  <Badge bg="warning" text="dark">78%</Badge>
                </div>
                <ProgressBar variant="warning" now={78} className="mt-2" style={{height: "8px"}} />
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between align-items-center">
                  <span>History</span>
                  <Badge bg="primary">88%</Badge>
                </div>
                <ProgressBar variant="primary" now={88} className="mt-2" style={{height: "8px"}} />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-info text-white">
              <h5 className="mb-0">Today's Schedule</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Mathematics</span>
                  <span>8:00 AM - 9:30 AM</span>
                </div>
                <small className="text-muted">Room 101 • Mr. Johnson</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Science</span>
                  <span>10:00 AM - 11:30 AM</span>
                </div>
                <small className="text-muted">Room 203 • Ms. Smith</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>Lunch Break</span>
                  <span>11:30 AM - 12:30 PM</span>
                </div>
                <small className="text-muted">Cafeteria</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="d-flex justify-content-between">
                  <span>English</span>
                  <span>12:30 PM - 2:00 PM</span>
                </div>
                <small className="text-muted">Room 105 • Mrs. Davis</small>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-warning text-dark">
              <h5 className="mb-0">Upcoming Assignments</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Algebra Quiz</div>
                  <small className="text-muted">Mathematics • Due Oct 25</small>
                </div>
                <Badge bg="danger">Urgent</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Science Project</div>
                  <small className="text-muted">Science • Due Oct 30</small>
                </div>
                <Badge bg="warning" text="dark">Important</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Book Report</div>
                  <small className="text-muted">English • Due Nov 5</small>
                </div>
                <Badge bg="secondary">Upcoming</Badge>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-center">
                <div>
                  <div>History Essay</div>
                  <small className="text-muted">History • Due Nov 10</small>
                </div>
                <Badge bg="secondary">Upcoming</Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">Announcements</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                <div className="fw-bold">School Sports Day</div>
                <div>Annual sports day will be held on November 15th.</div>
                <small className="text-muted">Posted 2 days ago</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="fw-bold">Parent-Teacher Meeting</div>
                <div>Scheduled for October 28th from 4 PM to 7 PM.</div>
                <small className="text-muted">Posted 5 days ago</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="fw-bold">Science Fair</div>
                <div>Registration for the annual science fair is now open.</div>
                <small className="text-muted">Posted 1 week ago</small>
              </ListGroup.Item>
              <ListGroup.Item action>
                <div className="fw-bold">Holiday Notice</div>
                <div>School will be closed on October 31st for staff development.</div>
                <small className="text-muted">Posted 2 weeks ago</small>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      
      {/* Fee Submission Modal */}
      <Modal show={showFeeModal} onHide={() => setShowFeeModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Fee Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFeeSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Student ID</Form.Label>
              <Form.Control type="text" placeholder="Enter your student ID" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fee Type</Form.Label>
              <Form.Select required>
                <option value="">Select fee type</option>
                <option value="tuition">Tuition Fee</option>
                <option value="exam">Examination Fee</option>
                <option value="transport">Transport Fee</option>
                <option value="library">Library Fee</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount (₹)</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select required>
                <option value="">Select payment method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="upi">UPI</option>
                <option value="wallet">Digital Wallet</option>
              </Form.Select>
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Pay Now
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      
      {/* Online Admission Modal */}
      <Modal show={showAdmissionModal} onHide={() => setShowAdmissionModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Online Admission Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdmissionSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Applying for Class</Form.Label>
                  <Form.Select required>
                    <option value="">Select class</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter full address" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Previous School (if any)</Form.Label>
              <Form.Control type="text" placeholder="Enter previous school name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="I confirm that all the information provided is correct" 
                required 
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="success" type="submit">
                Submit Application
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Student;