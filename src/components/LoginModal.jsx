import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ show, onHide, onLogin, actionType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  // Mock credentials for demo purposes
  const mockCredentials = {
    admin: { username: 'admin', password: 'admin123' },
    teacher: { username: 'teacher', password: 'teacher123' },
    student: { username: 'student', password: 'student123' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate role selection
    if (!role) {
      setError('Please select a role');
      return;
    }

    // Check credentials
    const credentials = mockCredentials[role];
    if (username === credentials.username && password === credentials.password) {
      // Store login info in session storage
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userRole', role);
      sessionStorage.setItem('username', username);
      
      // Call the onLogin callback with user info
      onLogin({ role, username, actionType });
      
      // Close the modal
      onHide();
    } else {
      setError('Invalid username or password');
    }
  };

  const getActionTitle = () => {
    switch (actionType) {
      case 'admin_change':
        return 'Admin Authentication Required';
      case 'fee_submission':
        return 'Student Authentication Required';
      case 'submit_assignment':
        return 'Student Authentication Required';
      case 'add_marks':
        return 'Teacher Authentication Required';
      case 'attendance':
        return 'Teacher Authentication Required';
      default:
        return 'Authentication Required';
    }
  };

  const getActionDescription = () => {
    switch (actionType) {
      case 'admin_change':
        return 'Please login to make administrative changes';
      case 'fee_submission':
        return 'Please login to submit fees';
      case 'submit_assignment':
        return 'Please login to submit your assignment';
      case 'add_marks':
        return 'Please login to add student marks';
      case 'attendance':
        return 'Please login to mark attendance';
      default:
        return 'Please login to continue';
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{getActionTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted mb-4">{getActionDescription()}</p>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 text-center text-muted">
          <small>Demo credentials: username and password are the same as role (e.g., admin/admin123)</small>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;