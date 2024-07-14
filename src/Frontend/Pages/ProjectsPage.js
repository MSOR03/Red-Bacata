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

export const projectsData = [
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
        <section id='proyectos'>
            <div>
                <Slider slides={slides} />
                <div className="projects-page-container">
                    {projectsData.map(project => (
                        <div key={project.id} id={`project-${project.id}`}>
                            <ProjectGrid projects={projectsData} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
