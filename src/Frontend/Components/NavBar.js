import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faInfoCircle, faBook, faProjectDiagram, faConciergeBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/Logo.png';
import '../Styles/NavBar.css';
import ThemeToggle from '../Components/ThemeToggle';
import { investigators } from '../Pages/MembersPage';
import { guides } from '../Pages/GuidesPage';
import { projectsData } from '../Pages/ProjectsPage';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const sectionId = searchTerm.toLowerCase().replace(/\s+/g, '-');

    // Verificar primero si la sección está en la página actual
    let section = document.getElementById(sectionId);
    if (section) {
      setShowAlert(false);
      section.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Si no se encuentra la sección en la página actual, verificar en otras páginas
    switch (sectionId) {
      case 'quienes-somos':
        navigate('/');
        break;
      case 'miembros':
        navigate('/MembersPage');
        break;
      case 'guias':
        navigate('/GuidesPage');
        break;
      case 'proyectos':
        navigate('/ProjectsPage');
        break;
      case 'servicios':
        navigate('/ServicesPage');
        break;
      case 'contactanos':
        navigate('/ContactPage');
        break;
      default:
        // Buscar en la lista de investigadores
        const investigator = investigators.find(inv =>
          inv.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (investigator) {
          navigate('/MembersPage');
          await new Promise(resolve => setTimeout(resolve, 500)); // Espera a que la página cargue
          const investigatorElement = document.getElementById(`investigator-${investigator.id}`);
          if (investigatorElement) {
            investigatorElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.error(`No se encontró el elemento HTML con ID: investigator-${investigator.id}`);
          }
        } else {
          // Buscar en la lista de guías
          const guide = guides.find(guide =>
            guide.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (guide) {
            navigate('/GuidesPage');
            await new Promise(resolve => setTimeout(resolve, 500)); // Espera a que la página cargue
            const guideElement = document.getElementById(`guide-${guide.id}`);
            if (guideElement) {
              guideElement.scrollIntoView({ behavior: 'smooth' });
            } else {
              console.error(`No se encontró el elemento HTML con ID: guide-${guide.id}`);
            }
          } else {
            // Buscar en la lista de proyectos
            const project = projectsData.find(proj =>
              proj.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (project) {
              navigate('/ProjectsPage');
              await new Promise(resolve => setTimeout(resolve, 500)); // Espera a que la página cargue
              const projectElement = document.getElementById(`project-${project.id}`);
              if (projectElement) {
                projectElement.scrollIntoView({ behavior: 'smooth' });
              } else {
                console.error(`No se encontró el elemento HTML con ID: project-${project.id}`);
              }
            } else {
              // Si no se encuentra nada, mostrar alerta sin redirigir
              setShowAlert(true);
            }
          }
        }
        return;
    }

    // Espera a que la página cargue y verifica si la sección existe
    await new Promise(resolve => setTimeout(resolve, 500));
    section = document.getElementById(sectionId);
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
            <ThemeToggle />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showAlert && (
        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible className="alert-overlay">
          No se encontró una sección, un investigador o una guía: {searchTerm}
        </Alert>
      )}
    </>
  );
}

export default NavBar;
