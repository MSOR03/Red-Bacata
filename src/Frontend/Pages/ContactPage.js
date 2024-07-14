import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa'; // Importa el ícono
import Map from '../Components/Map';
import EmailForm from '../Components/EmailForm'; 
import '../Styles/ContactStyle.css'; // Asegúrate de importar los estilos
import WhatsAppButton from '../Components/WhatsAppButton';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="map-container">
        <Map/>
      </div>
      <section id='formulario'>
      <div className="form-container">
        <Card className="contact-form-card">
          <Card.Header className="contact-form-header">
            <h4><FaEnvelope /> Contáctanos</h4> {/* Agrega el ícono aquí */}
          </Card.Header>
          <Card.Body>
            <EmailForm />
          </Card.Body>
        </Card>
      </div>
      <WhatsAppButton />
      </section>
    </div>
  );
}

export default ContactPage;
