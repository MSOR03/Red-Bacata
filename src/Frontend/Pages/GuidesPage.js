import React from 'react';
import '../Styles/GuidesStyle.css';
import CustomAccordion from '../Components/CustomAccordion.js';
import Slider from '../Components/Slider';
import image1 from '../Images/B&B.jpg';
import image2 from '../Images/A&A.jpg';
import civil from '../Images/civil.jpg';
import arcgis from '../Images/arcgis.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';

export const guides = [
  {
    id: 1,
    title: 'Guía Civil 3D Avanzado',
    description: 'En la presente guía se explica a profundidad Civil 3D enfocado hacia el diseño de vías podrá apreciar información relevante, detallada y paso por paso para el mejor aprendizaje.',
    content: 'Contenido detallado de la guía 1...',
    backgroundImage: civil,
    pdfLink: '/path/to/guia1.pdf',
  },
  {
    id: 2,
    title: 'Guía ArcGIS Avanzado',
    description: 'Información avanzada sobre el tema...',
    content: 'Contenido detallado de la guía 2...',
    backgroundImage: arcgis,
    pdfLink: '/path/to/guia2.pdf',
  }
  // Añade más guías según sea necesario
];

const GuidesPage = () => {
  const slides = [
    {
      image: image1,
      title: 'AutoCAD',
      subtitle: 'Software SIG',
      description: 'Aprende con nosotros'
    },
    {
      image: image2,
      title: 'ArcGIS',
      subtitle: 'Potente y Eficaz',
      description: 'Todo lo que necesitas en un solo lugar'
    }
  ];

  return (
    <div>
      <div>
        <Slider slides={slides} />
      </div>
      <div className="guides-page-container">
        <div className="guides-page-content">
          <h2 className="guides-page-title"><FontAwesomeIcon icon={faBookAtlas} />Guías Disponibles</h2>
          <section id='guias'>
            <CustomAccordion items={guides} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default GuidesPage;
