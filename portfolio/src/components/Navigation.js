import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = scrolled ? 'navbar-scrolled' : '';

  const handleNavClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      variant="light" 
      className={`navbar ${navClass}`} 
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">Sangeet S.U.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={isActive('/')} onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive('/about')} onClick={handleNavClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/research" className={isActive('/research')} onClick={handleNavClick}>Research</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={isActive('/projects')} onClick={handleNavClick}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/publications" className={isActive('/publications')} onClick={handleNavClick}>Publications</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact')} onClick={handleNavClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
