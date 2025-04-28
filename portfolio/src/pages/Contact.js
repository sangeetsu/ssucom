import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      ...formStatus,
      submitting: true,
    });
    
    // Simulate form submission with timeout
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <section className="page-header bg-primary text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">Contact</h1>
          <p className="lead">Get in touch with me for collaboration, questions, or opportunities</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <h2 className="mb-4">Let's Connect</h2>
              <p className="mb-5">
                Feel free to reach out if you're interested in my research, have questions about my work, 
                or want to discuss potential collaborations. I'm always open to connecting with fellow 
                researchers, engineers, and technology enthusiasts.
              </p>
              
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary fa-2x me-3" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>Email</h5>
                      <p className="mb-0">
                        <a href="mailto:sulhas@asu.edu">sulhas@asu.edu</a>
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="text-primary fa-2x me-3" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>Phone</h5>
                      <p className="mb-0">480-410-0290</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon icon={faLinkedin} className="text-primary fa-2x me-3" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>LinkedIn</h5>
                      <p className="mb-0">
                        <a href="https://linkedin.com/in/sulhas" target="_blank" rel="noopener noreferrer">
                          linkedin.com/in/sulhas
                        </a>
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              <Card className="shadow-sm">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon icon={faUniversity} className="text-primary fa-2x me-3" />
                    </div>
                    <div className="flex-grow-1">
                      <h5>University</h5>
                      <p className="mb-0">
                        Arizona State University<br />
                        Ira A. Fulton Schools of Engineering<br />
                        Tempe, Arizona
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={7}>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="card-title mb-4">Send a Message</h3>
                  
                  {formStatus.submitted && formStatus.success ? (
                    <div className="alert alert-success" role="alert">
                      {formStatus.message}
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          name="message" 
                          value={formData.message}
                          onChange={handleChange}
                          rows={5} 
                          required
                        />
                      </Form.Group>
                      
                      <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100"
                        disabled={formStatus.submitting}
                      >
                        {formStatus.submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
