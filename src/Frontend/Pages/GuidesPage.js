import React from 'react';
import '../Styles/GuidesStyle.css';
import CustomAccordion from '../Components/CustomAccordion.js';
import Slider from '../Components/Slider';
import image1 from '../Images/B&B.jpg';
import image2 from '../Images/A&A.jpg';
import civil from '../Images/civil.jpg'
import arcgis from '../Images/arcgis.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas} from '@fortawesome/free-solid-svg-icons';

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
        subtitle: 'Potente y Eficas',
        description: 'Todo lo que necesitas en un solo lugar'
      }
    ];
  
    const guides = [
      {
        title: 'Guía Civil 3D Avanzado',
        description: 'En la presente guia se explica a profundidad Civil 3D enfocado hacia el diseño de vías podra apreciar informacion relevante, detallada y paso por paso para el mejor aprendizaje.',
        content: 'Contenido detallado de la guía 1...',
        backgroundImage:civil, // Imagen de fondo para la guía 1
        pdfLink: '/path/to/guia1.pdf', // Enlace al PDF de la guía 1
      },
      {
        title: 'Guía ArcGIS Avanzado',
        description: 'Información avanzada sobre el tema...',
        content: 'Contenido detallado de la guía 2...',
        backgroundImage: arcgis, // Imagen de fondo para la guía 2
        pdfLink: '/path/to/guia2.pdf', // Enlace al PDF de la guía 2
      }
      // Añade más guías según sea necesario
    ];
  
    const addAnimation = (text) => {
      return text.split('').map((char, index) => (
        <span key={index} style={{ '--index': index }}>{char}</span>
      ));
    };
  
    // Añadimos el efecto de animación a los textos de cada slide
    const transformedSlides = slides.map(slide => ({
      ...slide,
      title: addAnimation(slide.title),
      subtitle: addAnimation(slide.subtitle),
      description: addAnimation(slide.description)
    }));

  return (
    <div>
    <div> 
        <Slider slides={transformedSlides} />
    </div>

    <div className="guides-page-container">
      
      <div className="guides-page-content">
        <h2 className="guides-page-title"><FontAwesomeIcon icon={faBookAtlas}/>Guías Disponibles</h2>
        <CustomAccordion items={guides} />
      </div>
    </div>
    </div>
  );
}

export default GuidesPage;
