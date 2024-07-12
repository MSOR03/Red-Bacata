import React from 'react';
import ProjectGrid from '../Components/ProjectGrid';
import p1 from '../Images/civil.jpg'
import Slider from '../Components/Slider';

const slides = [
    {
        image: p1,
        title: 'Investigadores ',
        subtitle: 'Miembros del equipo Red Bacatá',
        description: 'En nuestro equipo hay mas de doce investigadores altamente capacitados , a continuacion, se podran visualizar.'
    },

];

// Función para dividir el texto en letras y aplicar el efecto de animación
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


const projectsData = [
    {
        id: 1,
        title: 'Proyecto de Investigación A',
        summary: 'Resumen del proyecto de investigación A.',
        image: p1,
        link: 'https://example.com/projectA',
        type: 'research'  // Tipo de proyecto
      },
      {
        id: 2,
        title: 'Proyecto de Desarrollo B',
        summary: 'Resumen del proyecto de desarrollo B.',
        image: p1,
        link: 'https://example.com/projectB',
        type: 'development'  // Tipo de proyecto
      },
      {
        id: 3,
        title: 'Proyecto Educativo C',
        summary: 'Resumen del proyecto educativo C.',
        image: p1,
        link: 'https://example.com/projectC',
        type: 'education'  // Tipo de proyecto
      },
    // Añade más proyectos según sea necesario
];

const ProjectsPage = () => {
    return (
        <div>
            <Slider slides={transformedSlides} />
            <div className="projects-page-container">
                <ProjectGrid projects={projectsData} />
            </div>
        </div>
    );
};

export default ProjectsPage;
