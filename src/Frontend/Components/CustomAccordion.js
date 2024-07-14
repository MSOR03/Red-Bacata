import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../Styles/CustomAccordion.css'; // Asegúrate de importar el CSS

const CustomAccordion = ({ items }) => {
  return (
    <Accordion className="custom-accordion">
      {items.map((item, index) => (
        <Accordion.Item key={index} eventKey={index} id={`guide-${item.id}`} className="custom-accordion-item">
          <Accordion.Header className="accordion-header-content" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
            <h2>{item.title}</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p>{item.description}</p>
            <p>{item.content}</p>
            <a href={item.pdfLink} target="_blank" rel="noopener noreferrer" className="download-button">Ver PDF</a>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
