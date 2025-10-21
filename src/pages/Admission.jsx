import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    previousSchool: '',
    class: '',
    category: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a server
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const downloadPDF = () => {
    // Create a simple PDF download link
    const pdfContent = `
      BABA VASUDEV PUBLIC SCHOOL
      ADMISSION FORM
      
      Student Name: ${formData.studentName || '_________________'}
      Father's Name: ${formData.fatherName || '_________________'}
      Mother's Name: ${formData.motherName || '_________________'}
      Date of Birth: ${formData.dateOfBirth || '_________________'}
      Gender: ${formData.gender || '_________________'}
      Address: ${formData.address || '_________________'}
      Phone: ${formData.phone || '_________________'}
      Email: ${formData.email || '_________________'}
      Previous School: ${formData.previousSchool || '_________________'}
      Class: ${formData.class || '_________________'}
      Category: ${formData.category || '_________________'}
    `;
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'BVPS_Admission_Form.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white text-center">
              <h2 className="mb-0">Online Admission Form</h2>
              <p className="mb-0">Baba VasuDev Public School, NainaJhala</p>
            </Card.Header>
            <Card.Body className="p-4">
              {showAlert && (
                <Alert variant="success" className="mb-4">
                  <strong>Success!</strong> Your admission form has been submitted successfully. 
                  We will contact you within 2-3 working days.
                </Alert>
              )}

              <div className="mb-4 text-center">
                <Button 
                  variant="outline-primary" 
                  onClick={downloadPDF}
                  className="me-3"
                >
                  📄 Download Blank Form (PDF)
                </Button>
                <small className="text-muted d-block mt-2">
                  You can also download and fill the form manually
                </small>
              </div>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Student Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter student's full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Father's Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter father's name"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Mother's Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter mother's name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth *</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender *</Form.Label>
                      <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Class Applying For *</Form.Label>
                      <Form.Select
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="1st">1st Standard</option>
                        <option value="2nd">2nd Standard</option>
                        <option value="3rd">3rd Standard</option>
                        <option value="4th">4th Standard</option>
                        <option value="5th">5th Standard</option>
                        <option value="6th">6th Standard</option>
                        <option value="7th">7th Standard</option>
                        <option value="8th">8th Standard</option>
                        <option value="9th">9th Standard</option>
                        <option value="10th">10th Standard</option>
                        <option value="11th">11th Standard</option>
                        <option value="12th">12th Standard</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Complete Address *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter complete address with pin code"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter 10-digit mobile number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Previous School</Form.Label>
                      <Form.Control
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                        placeholder="Enter previous school name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Category</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="EWS">EWS</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Button type="submit" variant="primary" size="lg" className="px-5">
                    Submit Application
                  </Button>
                </div>

                <div className="mt-4 p-3 bg-light rounded">
                  <h6 className="text-primary">Required Documents:</h6>
                  <ul className="mb-0 small">
                    <li>Birth Certificate</li>
                    <li>Previous School Transfer Certificate</li>
                    <li>Aadhar Card Copy</li>
                    <li>Passport Size Photographs (4 copies)</li>
                    <li>Address Proof</li>
                    <li>Caste Certificate (if applicable)</li>
                  </ul>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admission;