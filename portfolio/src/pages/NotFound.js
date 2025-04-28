import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <section className="not-found-page py-5 d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <h1 className="display-1 text-primary mb-4">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead mb-5">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            <Button as={Link} to="/" variant="primary" size="lg">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Back to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
