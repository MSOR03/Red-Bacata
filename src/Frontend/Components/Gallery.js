// src/Components/Gallery.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Styles/Gallery.css'; // Asegúrate de crear este archivo CSS y añadir tus estilos
import service1 from '../Images/slider1.jpg'
import service2 from '../Images/slider2.jpg'
const services = [
  {
    title: 'Pasantias',
    description: 'Descripción detallada del servicio 1',
    image: service1,
  },
  {
    title: 'Investigacion',
    description: 'Descripción detallada del servicio 2',
    image: service2,
  },
  {
    title: 'Extensión',
    description: 'Descripción detallada del servicio 2',
    image: service2,
  },
  {
    title: 'Apoyo',
    description: 'Descripción detallada del servicio 2',
    image: service2,
  },
  {
    title: 'Apoyo',
    description: 'Descripción detallada del servicio 2',
    image: service2,
  },
  {
    title: 'Apoyo',
    description: 'Descripción detallada del servicio 2',
    image: service2,
  },
  // Agrega más servicios según sea necesario
];

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="gallery">
      {services.map((service, index) => (
        <div key={index} className="gallery-item" onClick={() => handleShow(service)}>
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedService?.image} alt={selectedService?.title} className="modal-image" />
          <p>{selectedService?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
