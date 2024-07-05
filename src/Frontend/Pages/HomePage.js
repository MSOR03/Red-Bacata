import React from 'react';
import Slider from '../Components/Slider';
import image1 from '../Images/slider1.jpg';
import image2 from '../Images/slider2.jpg';
import image3 from '../Images/slider3.jpg';
import '../Styles/SimpleCards.css';
import '../Styles/HomeStyle.css';

const HomePage = () => {
  const slides = [
    {
      image: image1,
      title: 'Bienvenido a Red Bacatá',
      subtitle: 'Innovación y Investigación',
      description: 'Explora nuestros proyectos y servicios.'
    },
    {
      image: image2,
      title: 'Nuestros Miembros',
      subtitle: 'Profesionales y Expertos',
      description: 'Conoce a nuestro equipo de trabajo.'
    },
    {
      image: image3,
      title: 'Proyectos Destacados',
      subtitle: 'Investigación y Desarrollo',
      description: 'Descubre nuestros proyectos más recientes.'
    }
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

  return (
    <div>
      <Slider slides={transformedSlides} />
      <div className="cards-container">
        <section className="card" id='objetivo'>
          <h3 className="card-title">Objetivo</h3>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section className="card" id='mision'>
          <h3 className="card-title">Misión</h3>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section className="card" id='vision'>
          <h3 className="card-title">Visión</h3>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
      </div>
      <section className="about-section" id='nosotros'>
        <div className="about-text">
          <h2>Sobre Nosotros</h2>
          <h1>Innovación y Desarrollo</h1>
          <p>Somos una organización dedicada a la investigación y la innovación en diversos campos. Nuestro equipo está compuesto por profesionales altamente calificados y comprometidos con el avance del conocimiento.</p>
          <div className="indicators">
            <div className="indicator">
              <p className="indicator-number">10+</p>
              <p className="indicator-description">Número de Investigadores</p>
            </div>
            <div className="indicator">
              <p className="indicator-number">5+</p>
              <p className="indicator-description">Proyectos Activos</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={image1} alt="Sobre Nosotros" />
        </div>
      </section>
      {/* Sección de Plan de Acción */}
      <section className="action-plan-section" id='plan-de-accion'>
        <h2>Plan de Acción</h2>
        <div className="action-plan-container">
          <div className="action-plan-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Investigación</h3>
              <p>Realizamos una investigación exhaustiva para identificar oportunidades y desafíos en el campo de la innovación.</p>
            </div>
          </div>
          <div className="action-plan-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Planificación</h3>
              <p>Desarrollamos un plan detallado para abordar los problemas identificados y establecer objetivos claros.</p>
            </div>
          </div>
          <div className="action-plan-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Ejecución</h3>
              <p>Implementamos las estrategias y actividades necesarias para llevar a cabo el plan de acción.</p>
            </div>
          </div>
          <div className="action-plan-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Evaluación</h3>
              <p>Evaluamos los resultados obtenidos y ajustamos las estrategias según sea necesario para asegurar el éxito.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
