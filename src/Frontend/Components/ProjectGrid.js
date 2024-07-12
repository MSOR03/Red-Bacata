// src/Components/ProjectGrid.js
import React, { useState } from 'react';
import '../Styles/ProjectGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

const ProjectGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  // Filtrar proyectos basados en el tipo
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  // Función para manejar el cambio de filtro
  const handleFilterChange = (type) => {
    setFilter(type);
  };

  return (
    <div className="project-grid-container">
      <h1 className="project-grid-title"><FontAwesomeIcon icon={faDiagramProject}/>Nuestros Proyectos</h1>
      
      {/* Submenú de tipo de proyecto */}
      <div className="project-submenu">
        <button 
          className={`submenu-item ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => handleFilterChange('all')}
        >
          Todos
        </button>
        <button 
          className={`submenu-item ${filter === 'research' ? 'active' : ''}`} 
          onClick={() => handleFilterChange('research')}
        >
          Investigación
        </button>
        <button 
          className={`submenu-item ${filter === 'development' ? 'active' : ''}`} 
          onClick={() => handleFilterChange('development')}
        >
          Desarrollo
        </button>
        <button 
          className={`submenu-item ${filter === 'education' ? 'active' : ''}`} 
          onClick={() => handleFilterChange('education')}
        >
          Educación
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
