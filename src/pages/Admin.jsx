import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';

function Admin() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [actionType, setActionType] = useState('');
  
  const handleItemClick = (action) => {
    // Check if user is already logged in from session storage
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const role = sessionStorage.getItem('userRole');
    
    if (loggedInStatus === 'true' && role === 'admin') {
      // User is already logged in as admin, handle the action
      alert(`You can now access: ${action}`);
    } else {
      // User needs to log in first
      setActionType('admin_change');
      setShowLoginModal(true);
    }
  };
  
  const handleLoginSuccess = (userData) => {
    // Handle the action after successful login
    alert(`You can now access admin features`);
  };

  return (
    <Container>
      <div className="text-center mb-4">
        <h1>Admin Dashboard</h1>
        <p className="lead">Manage school operations and resources</p>
      </div>
      
      <Row>
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Staff Management</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleItemClick('View All Staff')}>View All Staff</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Add New Staff')}>Add New Staff</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Manage Departments')}>Manage Departments</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Staff Attendance')}>Staff Attendance</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">Student Management</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleItemClick('View All Students')}>View All Students</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Admissions')}>Admissions</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Student Records')}>Student Records</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Student Attendance')}>Student Attendance</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-info text-white">
              <h5 className="mb-0">Academic Management</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleItemClick('Class Schedules')}>Class Schedules</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Exam Management')}>Exam Management</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Curriculum Planning')}>Curriculum Planning</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Academic Calendar')}>Academic Calendar</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-warning text-dark">
              <h5 className="mb-0">Finance</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleItemClick('Fee Collection')}>Fee Collection</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Expenses')}>Expenses</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Salary Management')}>Salary Management</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Financial Reports')}>Financial Reports</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-danger text-white">
              <h5 className="mb-0">Infrastructure</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleItemClick('Facilities Management')}>Facilities Management</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Inventory')}>Inventory</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Maintenance Requests')}>Maintenance Requests</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Resource Allocation')}>Resource Allocation</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        
        <Col lg={4} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-secondary text-white">
              <h5 className="mb-0">Reports</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleItemClick('Performance Analytics')}>Performance Analytics</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Attendance Reports')}>Attendance Reports</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Financial Summary')}>Financial Summary</ListGroup.Item>
              <ListGroup.Item action onClick={() => handleItemClick('Custom Reports')}>Custom Reports</ListGroup.Item>
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

export default Admin;