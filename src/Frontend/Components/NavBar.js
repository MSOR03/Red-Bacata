// src/Components/NavBar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faInfoCircle, faBook, faProjectDiagram, faConciergeBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/Logo.png';
import '../Styles/NavBar.css';
import ThemeToggle from '../Components/ThemeToggle';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const sectionId = searchTerm.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(sectionId);
    if (section) {
      setShowAlert(false);
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Navbar className="custom-navbar fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo del grupo de investigación"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <FontAwesomeIcon icon={faInfoCircle} /> ¿QUIENES SOMOS?
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/MembersPage">
                <Nav.Link>
                  <FontAwesomeIcon icon={faUsers} /> MIEMBROS
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/GuidesPage">
                <Nav.Link>
                  <FontAwesomeIcon icon={faBook} /> GUIAS
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ProjectsPage">
                <Nav.Link>
                  <FontAwesomeIcon icon={faProjectDiagram} /> PROYECTOS
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ServicesPage">
                <Nav.Link>
                  <FontAwesomeIcon icon={faConciergeBell} /> SERVICIOS
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ContactPage">
                <Nav.Link>
                  <FontAwesomeIcon icon={faEnvelope} /> CONTACTANOS
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex search-form" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Buscar"
                className="mr-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button type="submit" variant="outline-light">Buscar</Button>
            </Form>
            <ThemeToggle/>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="alert-overlay">
          Sección no encontrada: {searchTerm}
        </Alert>
      )}
    </>
  );
}

export default NavBar;
