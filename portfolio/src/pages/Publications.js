import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "GAN-Based Domain Adaptation & Randomization for Creating Digital Twins of Small-Scale Driving Testbeds",
      authors: "SS Ulhas, S Kannapiran, S Berman",
      conference: "IEEE International Conference on Intelligent Vehicles (IV)",
      year: "2024",
      abstract: "This paper presents a novel approach to creating digital twins of small-scale driving testbeds using Generative Adversarial Networks (GANs) for domain adaptation and randomization. The method bridges the gap between simulation and reality, enabling more effective testing and development of autonomous vehicle systems.",
      keywords: ["Autonomous Vehicles", "GANs", "Domain Adaptation", "Digital Twins", "Simulation"]
    },
    {
      id: 2,
      title: "A Survey on Small-Scale Testbeds for Connected and Automated Vehicles and Robot Swarms",
      authors: "Armin Mokhtarian, Jianye Xu, Patrick Scheffe, Maximilian Kloock, Simon Schäfer, Heeseung Bang, Viet-Anh Le, Sangeet Ulhas, Johannes Betz, Sean Wilson, Spring Berman, Liam Paull, Amanda Prorok, Bassam Alrifaee",
      conference: "IEEE Robotics and Automation Magazine (RAM)",
      year: "2024",
      abstract: "This comprehensive survey reviews the state-of-the-art in small-scale testbeds for connected and automated vehicles and robot swarms. It categorizes existing testbeds, discusses their advantages and limitations, and provides insights into future research directions in this field.",
      keywords: ["Testbeds", "Connected Vehicles", "Automated Vehicles", "Robot Swarms", "Survey"]
    },
    {
      id: 3,
      title: "CHARTOPOLIS: A Small-Scale Labor-art-ory for Research on Autonomous Vehicles, HRI, and Sociotechnical Imaginaries",
      authors: "SS Ulhas, A Ravichander, KA Johnson, TP Pavlic, L Gharavi, S Berman",
      conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
      year: "2022",
      abstract: "This paper introduces CHARTOPOLIS, a multi-faceted sociotechnical testbed designed to aid in building connections among engineers, psychologists, anthropologists, ethicists, and artists. It serves as an urban autonomous-vehicle testbed that includes both a physical environment for small-scale robotic vehicles and a high-fidelity virtual replica.",
      keywords: ["Autonomous Vehicles", "Human-Robot Interaction", "Testbeds", "Sociotechnical Systems"]
    }
  ];

  return (
    <>
      <section className="page-header bg-primary text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">Publications</h1>
          <p className="lead">My research contributions to the scientific community</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="text-center mb-4">Research Papers</h2>
              <p className="lead text-center mb-5">
                My published work in the fields of robotics, autonomous systems, and human-robot interaction
              </p>
            </Col>
          </Row>

          {publications.map(publication => (
            <Card key={publication.id} className="mb-4 shadow-sm">
              <Card.Body>
                <h3>{publication.title}</h3>
                <p className="text-muted mb-2">{publication.authors}</p>
                <p className="publication-venue">
                  <strong>{publication.conference}</strong>, {publication.year}
                </p>
                <hr />
                <h5>Abstract</h5>
                <p>{publication.abstract}</p>
                <div className="mt-3">
                  {publication.keywords.map((keyword, index) => (
                    <span key={index} className="badge bg-light text-dark me-2 mb-2">
                      {keyword}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}

          <Row className="mt-5">
            <Col lg={8} className="mx-auto">
              <Card className="shadow-sm">
                <Card.Body className="text-center">
                  <h4 className="mb-3">Research Impact</h4>
                  <div className="d-flex justify-content-around text-center">
                    <div className="impact-stat">
                      <h2 className="text-primary">3+</h2>
                      <p>Publications</p>
                    </div>
                    <div className="impact-stat">
                      <h2 className="text-primary">20+</h2>
                      <p>Citations</p>
                    </div>
                    <div className="impact-stat">
                      <h2 className="text-primary">3+</h2>
                      <p>Research Projects</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Publications;
