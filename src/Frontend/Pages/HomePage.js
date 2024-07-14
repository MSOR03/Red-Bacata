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
 
  return (
    <div>
       <Slider slides={slides} />
      <div className="cards-container">
        <section className="card" id='objetivo'>
          <h3 className="card-title">Objetivo</h3>
          <p className="card-description">Nuestra visión es ser una red que articula grupos de investigación de la Universidad Distrital Francisco José de Caldas de referencia nacional en la transformación social y territorial mediante enfoques participativos y colaborativos. Aspiramos a crear un mundo en el que las comunidades locales sean protagonistas de su propio desarrollo, utilizando herramientas de inteligencia territorial para abordar desafíos complejos y construir futuros sostenibles. Nos comprometemos a ser un puente entre el conocimiento académico y la acción comunitaria, promoviendo la equidad, la inclusión y la innovación en todos los niveles de la sociedad.</p>
        </section>
        <section className="card" id='mision'>
          <h3 className="card-title">Misión</h3>
          <p className="card-description">Nuestra misión es promover la transformación social y territorial a través de la Investigación-Acción Participativa (IAP) y la Inteligencia Territorial. Nos dedicamos a generar conocimiento práctico y aplicable que empodere a las comunidades locales, fomente la colaboración entre actores diversos y fortalezca la toma de decisiones informadas. A través de la investigación colaborativa y el análisis territorial, buscamos impulsar el desarrollo sustentable, la justicia social y la resiliencia de los territorios.
          </p>
        </section>
        <section className="card" id='vision'>
          <h3 className="card-title">Visión</h3>
          <p className="card-description">Nuestra visión es ser una red que articula grupos de investigación de la Universidad Distrital Francisco José de Caldas de referencia nacional en la transformación social y territorial mediante enfoques participativos y colaborativos. Aspiramos a crear un mundo en el que las comunidades locales sean protagonistas de su propio desarrollo, utilizando herramientas de inteligencia territorial para abordar desafíos complejos y construir futuros sostenibles. Nos comprometemos a ser un puente entre el conocimiento académico y la acción comunitaria, promoviendo la equidad, la inclusión y la innovación en todos los niveles de la sociedad.</p>
        </section>
      </div>
      <section className="about-section" id='nosotros'>
        <div className="about-text">
          <h2>Sobre Nosotros</h2>
          <h1>Innovación y Desarrollo</h1>
          <p>Nuestra red de investigación nace en el año 2012 a partir de la reunión  de los grupos de investigación pertenecientes a las diferentes facultades de  la Universidad Distrital Francisco José de Caldas. Su nombre se constituye teniendo en cuenta el territorio Muisca que comprendía la mayor de San Antonio de tequendama, parte de lo que ahora se conoce como la sabana de Bogotá.
          Los iconos elegidos para la representación de la red en conjunto, muestran la conexión del hombre ("El hombre feliz", icono representativo de San Antonio del tequendama) con el territorio (la montaña) y el conocimiento ancestral y cientifico del mismo (el triangulo de la sabiduría)</p>
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
              <h3>Institucionalizar</h3>
              <p>Institucionalizar la red en el año 2013 ante el CIDC (Centro de Investigaciones y Desarrollo Científico) de la Universidad Distrital Francisco José de Caldas. Punto que ya se cumplió.</p>
            </div>
          </div>
          <div className="action-plan-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Realizar Eventos</h3>
              <p>Realizar tres eventos internacionales. Punto que ya se cumplió</p>
            </div>
          </div>
          <div className="action-plan-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Subcomité de investigaciones de la FAMARENA</h3>
              <p>Institucionalizar en el año 2018 ante el subcomité de investigaciones de la FAMARENA (Facultad de Medio Ambiente y Recursos Naturales) de la Universidad Distrital Francisco José de Caldas la cátedra del agua como parte complementaria de la Inteligencia Territorial.</p>
            </div>
          </div>
          <div className="action-plan-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Encuentro internacional</h3>
              <p>Participar durante el año 2019 en la organización de un encuentro internacional, proceso que se está llevando a cabo junto con la red latinoamericana de Territorios Posibles, antes TAG (Territorios Actores y Gobernanza). El evento tendrá lugar en Agosto de 2020 en la Ciudad de La Plata- Argentina.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
