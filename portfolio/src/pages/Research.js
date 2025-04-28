import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, faCar, faMicrochip, faBrain, faVrCardboard, 
  faUserGraduate, faChartLine, faExchangeAlt, faFlask 
} from '@fortawesome/free-solid-svg-icons';

const Research = () => {
  return (
    <>
      <section className="page-header bg-primary text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">Research</h1>
          <p className="lead">Exploring the intersection of robotics, human behavior, and autonomous systems</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="text-center mb-4">Research Focus</h2>
              <p className="lead text-center mb-5">
                My research explores the complex relationships between humans, robots, and autonomous systems, 
                with a particular focus on developing technologies that are both technically efficient and 
                aligned with human values.
              </p>
            </Col>
          </Row>

          <Row className="mb-5 g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm hover-card">
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-3">
                    <div className="icon-circle bg-primary bg-gradient">
                      <FontAwesomeIcon icon={faRobot} className="text-white fa-2x" />
                    </div>
                  </div>
                  <Card.Title className="text-center mb-3">Human-Robot Interaction</Card.Title>
                  <Card.Text className="text-center flex-grow-1">
                    Investigating how humans interact with and respond to autonomous systems, specifically in 
                    safety-critical scenarios like autonomous driving.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow-sm hover-card">
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-3">
                    <div className="icon-circle bg-primary bg-gradient">
                      <FontAwesomeIcon icon={faBrain} className="text-white fa-2x" />
                    </div>
                  </div>
                  <Card.Title className="text-center mb-3">Value-Sensitive Design</Card.Title>
                  <Card.Text className="text-center flex-grow-1">
                    Developing methods to incorporate human values and preferences into the design and control 
                    of autonomous systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow-sm hover-card">
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-3">
                    <div className="icon-circle bg-primary bg-gradient">
                      <FontAwesomeIcon icon={faExchangeAlt} className="text-white fa-2x" />
                    </div>
                  </div>
                  <Card.Title className="text-center mb-3">Sim-to-Real Transfer</Card.Title>
                  <Card.Text className="text-center flex-grow-1">
                    Bridging the gap between simulation and reality through domain adaptation and generative 
                    models for robotics applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <hr className="my-5" />
          
          <h2 className="text-center mb-5">Current Research Projects</h2>
          
          <Row className="mb-5">
            <Col lg={12}>
              <Card className="shadow-sm mb-5">
                <Card.Body>
                  <Row>
                    <Col md={3} className="text-center mb-4 mb-md-0">
                      <div className="icon-large bg-light rounded-circle mx-auto">
                        <FontAwesomeIcon icon={faCar} className="text-primary fa-3x" />
                      </div>
                    </Col>
                    <Col md={9}>
                      <h3>CHARTOPOLIS: A Small-Scale Sociotechnical Testbed</h3>
                      <p className="text-muted mb-3">2020 - Present</p>
                      <p>
                        CHARTOPOLIS is a multi-faceted sociotechnical testbed designed to aid in building connections 
                        among engineers, psychologists, anthropologists, ethicists, and artists. It serves as an urban 
                        autonomous-vehicle testbed that includes both a physical environment for small-scale robotic 
                        vehicles and a high-fidelity virtual replica.
                      </p>
                      <ul className="mt-3">
                        <li>Built a physical driving simulator with CARLA that is built on Unreal Engine 4</li>
                        <li>Designed custom simulation environments with OpenDRIVE data</li>
                        <li>Integrated pedestrian simulation and complex urban scenarios</li>
                        <li>Conducted trolley problem crash scenario studies with human participants</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              <Card className="shadow-sm mb-5">
                <Card.Body>
                  <Row>
                    <Col md={3} className="text-center mb-4 mb-md-0">
                      <div className="icon-large bg-light rounded-circle mx-auto">
                        <FontAwesomeIcon icon={faMicrochip} className="text-primary fa-3x" />
                      </div>
                    </Col>
                    <Col md={9}>
                      <h3>Value-Sensitive Controller Design for Autonomous Vehicles</h3>
                      <p className="text-muted mb-3">2021 - Present</p>
                      <p>
                        This research focuses on developing controllers that can adapt to different human value profiles, 
                        enabling autonomous vehicles to make decisions aligned with the user's preferences in 
                        complex ethical scenarios.
                      </p>
                      <ul className="mt-3">
                        <li>Quantified human value profiles (benevolent vs powerful) through data analysis</li>
                        <li>Built controllers using PID tuning and Reinforcement Learning to mimic human driving</li>
                        <li>Developed a seamless controller-switching mechanism for varying value profiles</li>
                        <li>Implemented and tested on physical and virtual driving platforms</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              <Card className="shadow-sm">
                <Card.Body>
                  <Row>
                    <Col md={3} className="text-center mb-4 mb-md-0">
                      <div className="icon-large bg-light rounded-circle mx-auto">
                        <FontAwesomeIcon icon={faVrCardboard} className="text-primary fa-3x" />
                      </div>
                    </Col>
                    <Col md={9}>
                      <h3>Domain Adaptation for Robotics Vision Systems</h3>
                      <p className="text-muted mb-3">2022 - Present</p>
                      <p>
                        This project addresses the sim-to-real gap in computer vision systems for robotics, using
                        advanced generative models to transfer learning from simulation to real-world environments.
                      </p>
                      <ul className="mt-3">
                        <li>Trained CNNs for object detection/segmentation across multiple domains</li>
                        <li>Applied Transfer Learning and Domain Adaptation with GANs and Diffusion Models</li>
                        <li>Closed the Sim-to-Real gap in simulators and physical testbeds</li>
                        <li>Created digital twins of physical testing environments</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <hr className="my-5" />
          
          <div className="text-center mb-5">
            <h2 className="mb-4">Research Interests</h2>
            <Row className="justify-content-center g-4">
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="interest-item text-center">
                  <div className="interest-icon">
                    <FontAwesomeIcon icon={faRobot} className="text-primary fa-2x" />
                  </div>
                  <h5>Robotics</h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="interest-item text-center">
                  <div className="interest-icon">
                    <FontAwesomeIcon icon={faCar} className="text-primary fa-2x" />
                  </div>
                  <h5>Autonomous Vehicles</h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="interest-item text-center">
                  <div className="interest-icon">
                    <FontAwesomeIcon icon={faFlask} className="text-primary fa-2x" />
                  </div>
                  <h5>Testbed Design</h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="interest-item text-center">
                  <div className="interest-icon">
                    <FontAwesomeIcon icon={faBrain} className="text-primary fa-2x" />
                  </div>
                  <h5>Machine Learning</h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="interest-item text-center">
                  <div className="interest-icon">
                    <FontAwesomeIcon icon={faUserGraduate} className="text-primary fa-2x" />
                  </div>
                  <h5>Human Values</h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="interest-item text-center">
                  <div className="interest-icon">
                    <FontAwesomeIcon icon={faChartLine} className="text-primary fa-2x" />
                  </div>
                  <h5>Control Theory</h5>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Research;
