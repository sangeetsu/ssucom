import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <section className="page-header bg-primary text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">About Me</h1>
          <p className="lead">Learn more about my background, experience, and interests</p>
        </Container>
      </section>
      
      <section className="py-5">
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <Image 
                  src="/images/ssudp.jpg" 
                  alt="Sangeet Sankaramangalam Ulhas" 
                  fluid 
                  className="rounded shadow"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500x600?text=Sangeet+S.U.';
                  }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <h2 className="mb-4">My Journey</h2>
              <p className="mb-4">
                I'm a PhD candidate in Mechanical Engineering at Arizona State University with a focus on robotics, autonomous systems, 
                and human-robot interaction. My research bridges the gap between robotics, psychology, and machine learning to develop 
                safer autonomous systems that can adapt to human values and behavior.
              </p>
              <p className="mb-4">
                With a background in Naval Architecture and Shipbuilding from Cochin University of Science And Technology, 
                I bring a unique perspective to my research in autonomous systems. My work involves developing physical and virtual 
                testbeds for autonomous vehicles and conducting human participant studies to understand how autonomous systems can 
                better interact with humans.
              </p>
              <p>
                I'm passionate about creating technology that enhances human capabilities while respecting human values.
                Through my research, I aim to contribute to the development of autonomous systems that are not only efficient 
                but also ethically aligned with human preferences.
              </p>
            </Col>
          </Row>
          
          <hr className="my-5" />
          
          <div className="mb-5">
            <h2 className="text-center mb-5">Education</h2>
            <Row className="g-4">
              <Col md={4}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary me-3 fa-2x" />
                      <h5 className="card-title mb-0">PhD in Mechanical Engineering</h5>
                    </div>
                    <h6 className="text-muted">Arizona State University</h6>
                    <p className="card-text">
                      <strong>2020 - 2026 (Anticipated)</strong><br />
                      GPA: 3.83/4.00
                    </p>
                    <p className="card-text">
                      Focus on robotics, autonomous systems, and human-robot interaction.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary me-3 fa-2x" />
                      <h5 className="card-title mb-0">MS in Mechanical Engineering</h5>
                    </div>
                    <h6 className="text-muted">Arizona State University</h6>
                    <p className="card-text">
                      <strong>2017 - 2019</strong><br />
                      GPA: 3.33/4.00
                    </p>
                    <p className="card-text">
                      Specialized in mechanical systems and control theory.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary me-3 fa-2x" />
                      <h5 className="card-title mb-0">B.Tech in Naval Architecture</h5>
                    </div>
                    <h6 className="text-muted">Cochin University of Science And Technology</h6>
                    <p className="card-text">
                      <strong>2013 - 2017</strong><br />
                      GPA: 7.8/10.00
                    </p>
                    <p className="card-text">
                      Focus on ship design, hydrodynamics, and marine engineering.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          
          <hr className="my-5" />
          
          <div className="mb-5">
            <h2 className="text-center mb-5">Experience</h2>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot bg-primary">
                  <FontAwesomeIcon icon={faBriefcase} className="text-white" />
                </div>
                <div className="timeline-content">
                  <h4>Graduate Research Assistant</h4>
                  <p className="text-muted">Arizona State University | 2020 - Present</p>
                  <p>
                    Conducting research on autonomous vehicle systems, human-robot interaction, and value-sensitive 
                    controller design. Building physical and virtual testbeds for autonomous vehicles and conducting 
                    human participant studies.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot bg-primary">
                  <FontAwesomeIcon icon={faBriefcase} className="text-white" />
                </div>
                <div className="timeline-content">
                  <h4>Graduate Student Assistant</h4>
                  <p className="text-muted">Arizona State University | 2018 - 2019</p>
                  <p>
                    Assisted in interdisciplinary research projects studying value profiles and cognitive function 
                    associated with driving behaviors. Developed leak-detection algorithms with acoustic sensing 
                    using hydrophones and frequency imaging with LabVIEW.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot bg-primary">
                  <FontAwesomeIcon icon={faBriefcase} className="text-white" />
                </div>
                <div className="timeline-content">
                  <h4>Intern</h4>
                  <p className="text-muted">Goa Shipyard Ltd, India | 2016</p>
                  <p>
                    Participated in final inspection of hull-outfit in a coast guard vessel and designed pontoons 
                    for a 5-ton lifeboat simulation during sea trials.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="my-5" />
          
          <div>
            <h2 className="text-center mb-5">Leadership & Volunteering</h2>
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faUsers} className="text-primary me-3 fa-2x" />
                  <div>
                    <h4 className="card-title mb-0">Treasurer</h4>
                    <p className="text-muted mb-0">Indian Students' Association & Indian Alumni Chapter, ASU</p>
                  </div>
                </div>
                <p className="card-text">
                  Handled club finances, sponsorships, club correspondence & communication, and served as cultural lead 
                  for high-budget events Jhankaar'18 & '22. Enforced club policies/regulations while maintaining 
                  compliance with regulatory obligations for the operation of the club.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
