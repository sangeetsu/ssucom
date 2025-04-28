import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Sangeet Sankaramangalam Ulhas. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <div className="social-links text-center text-md-end">
              <a href="https://linkedin.com/in/sulhas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/sangeetsu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://scholar.google.com/citations?user=qkI4LLYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                <FontAwesomeIcon icon={faGraduationCap} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
