import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, faCamera, faMicrochip, faRoad, faChartLine, 
  faEye, faCode, faDesktop, faLaptopCode 
} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modeling and Control of Robots",
      description: "Programmed an industrial robotic manipulator simulation toolkit on MATLAB that models the kinematics and dynamics of robot arms. The toolkit includes inverse kinematics solving, trajectory planning, and visualization components.",
      icon: faRobot,
      technologies: ["MATLAB", "Robotics", "Control Theory"],
      year: "2021"
    },
    {
      id: 2,
      title: "Physics-based Computer Vision",
      description: "Improved Lensless Image Reconstruction using DeblurGAN through dataset augmentation. This project addressed the challenges of computational imaging with coded aperture lensless cameras through deep learning-based deconvolution.",
      icon: faCamera,
      technologies: ["Python", "PyTorch", "GANs", "Computer Vision"],
      year: "2022"
    },
    {
      id: 3,
      title: "Multi-Robot Systems",
      description: "Programmed a Morphogenetic Robot Swarm algorithm in Python for Brachytherapy in Kilombo Simulator. The swarm demonstrates self-organizing behavior to efficiently deliver radiation treatment in medical applications.",
      icon: faMicrochip,
      technologies: ["Python", "Swarm Robotics", "Simulation"],
      year: "2021"
    },
    {
      id: 4,
      title: "Reinforcement Learning for Lane Detection",
      description: "Implemented Deep Reinforcement Learning Based Lane Detection and Localization on the TuSimple Dataset. The system combines computer vision techniques with RL to improve adaptive lane detection in varying conditions.",
      icon: faRoad,
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "Computer Vision"],
      year: "2022"
    },
    {
      id: 5,
      title: "Statistical Machine Learning for Power Systems",
      description: "Helped improve mapping rule estimation in power systems with Ridge Regression and Support Vector Machines (SVMs). The project focused on enhancing prediction accuracy while maintaining computational efficiency.",
      icon: faChartLine,
      technologies: ["Python", "Scikit-learn", "Statistical Analysis"],
      year: "2021"
    },
    {
      id: 6,
      title: "NLP-Based Robot Manipulator",
      description: "Expanded and open-sourced task library in NLP-based Robot Manipulator through advanced prompts. This project bridges natural language processing with robotic control to enable intuitive human-robot interaction.",
      icon: faEye,
      technologies: ["Python", "ROS", "NLP", "Robot Control"],
      year: "2023"
    },
    {
      id: 7,
      title: "Autonomous Vehicle Simulation",
      description: "Developed a custom simulation environment for autonomous vehicles using CARLA and Unreal Engine 4. The simulation includes realistic traffic scenarios, pedestrian behavior, and sensor models.",
      icon: faDesktop,
      technologies: ["CARLA", "Unreal Engine", "Python", "Autonomous Driving"],
      year: "2022"
    },
    {
      id: 8,
      title: "Leak Detection Algorithm",
      description: "Created an acoustic-based leak detection system for pipelines using hydrophones and frequency imaging. The algorithm processes acoustic signatures to identify and locate leaks with high accuracy.",
      icon: faLaptopCode,
      technologies: ["LabVIEW", "Signal Processing", "Acoustic Sensing"],
      year: "2020"
    }
  ];

  return (
    <>
      <section className="page-header bg-primary text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">Projects</h1>
          <p className="lead">A showcase of my technical work and academic projects</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="text-center mb-4">My Work</h2>
              <p className="lead text-center mb-5">
                These projects represent my work across various domains including robotics, 
                computer vision, machine learning, and autonomous systems.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {projects.map(project => (
              <Col md={6} lg={4} key={project.id}>
                <Card className="h-100 shadow-sm project-card">
                  <Card.Body className="d-flex flex-column">
                    <div className="text-center mb-3">
                      <div className="icon-circle bg-primary bg-gradient">
                        <FontAwesomeIcon icon={project.icon} className="text-white fa-2x" />
                      </div>
                    </div>
                    <Card.Title className="text-center mb-3">{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {project.technologies.map((tech, index) => (
                            <Badge bg="light" text="dark" className="me-2 mb-2" key={index}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <small className="text-muted">{project.year}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row className="mt-5">
            <Col className="text-center">
              <p className="lead">Interested in collaborating on a project?</p>
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
