import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, faUserGraduate, faFlask, faCode, 
  faRobot, faBrain, faVrCardboard, faLaptopCode,
  faGraduationCap, faFileDownload // Add these two new icons
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Animation for elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const handleButtonClick = (event, action) => {
    console.log(`Button clicked: ${action}`);
    // The default behavior will still happen
  };
  
  return (
    <>
      <section className="hero d-flex align-items-center text-light">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
                Sangeet Sankaramangalam Ulhas
              </h1>
              <p className="fs-4 mb-3 animate__animated animate__fadeInDown animate__delay-1s">
                Research Assistant & PhD Candidate
              </p>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                Specializing in robotics, autonomous systems, and human-robot interaction at Arizona State University
              </p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <a 
                  href="/contact" 
                  className="btn btn-primary btn-lg animate__animated animate__fadeInUp animate__delay-1s action-button"
                  onClick={(e) => handleButtonClick(e, 'contact')}
                >
                  Contact Me
                </a>
                <a href="/research" className="btn btn-outline-light btn-lg animate__animated animate__fadeInUp animate__delay-1s action-button">
                  View My Work <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </a>
              </div>
              
              <div className="mt-3">
                <a 
                  href="/files/sangeet_resume.pdf" 
                  download="Sangeet_Ulhas_Resume.pdf"
                  className="btn btn-outline-light btn-md animate__animated animate__fadeInUp animate__delay-2s action-button"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFileDownload} className="me-2" /> Download Resume
                </a>
              </div>
              
              <div className="mt-5 social-icons">
                <a href="https://linkedin.com/in/sulhas" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/sangeetsu" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://scholar.google.com/citations?user=qkI4LLYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">What I Do</h2>
              <p className="lead">
                Exploring the intersection of robotics, human behavior, and machine learning to create safer autonomous systems.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={3} className="text-center">
              <Card className="h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <FontAwesomeIcon icon={faRobot} size="2x" />
                  </div>
                  <h3 className="h4">Robotics Research</h3>
                  <p>Working on autonomous vehicle systems and human-robot interaction</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="text-center">
              <Card className="h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <FontAwesomeIcon icon={faBrain} size="2x" />
                  </div>
                  <h3 className="h4">Machine Learning</h3>
                  <p>Applying AI techniques to solve complex problems in autonomous systems</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="text-center">
              <Card className="h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <FontAwesomeIcon icon={faVrCardboard} size="2x" />
                  </div>
                  <h3 className="h4">Simulation</h3>
                  <p>Building physical and virtual testbeds for autonomous vehicles research</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="text-center">
              <Card className="h-100 shadow-sm">
                <Card.Body className="p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                  </div>
                  <h3 className="h4">Development</h3>
                  <p>Creating tools and software to enable and enhance robotics research</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title text-start">About Me</h2>
              <p className="mb-4">
                I'm a PhD candidate in Mechanical Engineering at Arizona State University, focusing on robotics and 
                autonomous systems. My research aims to develop safer and more effective autonomous systems by 
                understanding human behavior and values.
              </p>
              <p className="mb-4">
                I specialize in human-robot interaction, value-sensitive controller design, and domain adaptation 
                through machine learning techniques. My work bridges the gap between technical capabilities and 
                human needs in autonomous systems.
              </p>
              <Button as={Link} to="/about" variant="primary">
                Learn more about me <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </Button>
            </Col>
            
            <Col lg={6}>
              <div className="education-highlights">
                <h3 className="mb-4">Education</h3>
                
                <div className="timeline">
                  <div className="timeline-item fade-in">
                    <div className="timeline-point"></div>
                    <div className="timeline-content">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faUserGraduate} className="text-primary me-3" />
                        <div>
                          <h4 className="mb-1">PhD in Mechanical Engineering</h4>
                          <p className="text-muted mb-0">Arizona State University (2026)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-item fade-in">
                    <div className="timeline-point"></div>
                    <div className="timeline-content">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faUserGraduate} className="text-primary me-3" />
                        <div>
                          <h4 className="mb-1">MS in Mechanical Engineering</h4>
                          <p className="text-muted mb-0">Arizona State University (2019)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-item fade-in">
                    <div className="timeline-point"></div>
                    <div className="timeline-content">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faUserGraduate} className="text-primary me-3" />
                        <div>
                          <h4 className="mb-1">B.Tech in Naval Architecture</h4>
                          <p className="text-muted mb-0">Cochin University (2017)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Recent Publications</h2>
              <p className="lead">My research contributions to the scientific community</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm publication-card fade-in">
                <Card.Body>
                  <h3 className="h5 mb-3">GAN-Based Domain Adaptation & Randomization for Creating Digital Twins of Small-Scale Driving Testbeds</h3>
                  <p className="text-muted mb-3">IEEE-IV 2024</p>
                  <Link to="/publications" className="btn btn-outline-primary btn-sm">Read more</Link>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow-sm publication-card fade-in">
                <Card.Body>
                  <h3 className="h5 mb-3">A Survey on Small-Scale Testbeds for Connected and Automated Vehicles and Robot Swarms</h3>
                  <p className="text-muted mb-3">IEEE-RAM 2024</p>
                  <Link to="/publications" className="btn btn-outline-primary btn-sm">Read more</Link>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow-sm publication-card fade-in">
                <Card.Body>
                  <h3 className="h5 mb-3">CHARTOPOLIS: A Small-Scale Labor-art-ory for Research on Autonomous Vehicles, HRI, and Sociotechnical Imaginaries</h3>
                  <p className="text-muted mb-3">IROS 2022</p>
                  <Link to="/publications" className="btn btn-outline-primary btn-sm">Read more</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="text-center mt-5">
            <Button as={Link} to="/publications" variant="primary">
              View all publications <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="mb-4">Ready to collaborate?</h2>
          <p className="lead mb-4">Let's discuss how we can work together on innovative research projects</p>
          <Button as={Link} to="/contact" variant="outline-light" size="lg">
            Get in touch
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
