// src/Components/EmailForm.js
import React, { useState } from 'react';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../Styles/EmailForm.css'; // Asegúrate de importar los estilos
import { FaUser, FaEnvelope, FaTag, FaComments } from 'react-icons/fa'; // Importa los íconos

const EmailForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [modal, setModal] = useState({ show: false, message: '', variant: '', icon: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dfeadki', 'template_pklmbi9', e.target, 'OYAf01UrdBbFDEac0')
      .then((result) => {
        setModal({ 
          show: true, 
          message: 'Mensaje enviado con éxito 😊', 
          variant: 'success', 
          icon: '😊'
        });
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        setModal({ 
          show: true, 
          message: 'Error al enviar el mensaje 😞', 
          variant: 'danger', 
          icon: '😞'
        });
      });
  };

  const handleClose = () => setModal({ ...modal, show: false });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="column1">
            <Form.Group controlId="formFirstName">
              <Form.Label><FaUser /> Nombre</Form.Label> {/* Ícono de usuario */}
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Tu Nombre"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={5} className="column2">
            <Form.Group controlId="formLastName">
              <Form.Label><FaUser /> Apellido</Form.Label> {/* Ícono de usuario */}
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Tu Apellido"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formEmail">
          <Form.Label><FaEnvelope /> Correo Electrónico</Form.Label> {/* Ícono de correo */}
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Tu Correo Electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Label><FaTag /> Asunto</Form.Label> {/* Ícono de etiqueta */}
          <Form.Control
            type="text"
            name="subject"
            id="subject"
            placeholder="Asunto"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label><FaComments /> Mensaje</Form.Label> {/* Ícono de mensaje */}
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            id="message"
            placeholder="Tu Mensaje"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <Modal show={modal.show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modal.variant === 'success' ? 'Éxito' : 'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modal.variant}>
          <div className="modal-icon">{modal.icon}</div>
          {modal.message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmailForm;
