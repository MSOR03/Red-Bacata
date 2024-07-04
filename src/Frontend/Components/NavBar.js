import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../Images/Logo.png'; // Asegúrate de tener un logo en el directorio src
import '../Styles/NavBar.css'; // Importar el archivo CSS

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de redirección a la sección correspondiente
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
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Logo del grupo de investigación"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>¿QUIENES SOMOS?</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/MembersPage">
                <Nav.Link>MIEMBROS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/GuidesPage">
                <Nav.Link>GUIAS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ProjectsPage">
                <Nav.Link>PROYECTOS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ServicesPage">
                <Nav.Link>SERVICIOS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ContactPage">
                <Nav.Link>CONTACTANOS</Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Sección no encontrada: {searchTerm}
        </Alert>
      )}
    </>
  );
}

export default NavBar;
