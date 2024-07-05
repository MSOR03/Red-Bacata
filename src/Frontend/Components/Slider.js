import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/Slider.css';

const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 20000); // Cambia el slide cada 10 segundos

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      fade
      controls={true}  // Habilita los controles
      indicators={true}  // Habilita los indicadores
      interval={30000} // Cambia el slide cada 10 segundos
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={`Slide ${index}`}
          />
          <div className="overlay"></div>
          <Carousel.Caption>
            <h3 className="animated-title">{slide.title}</h3>
            <h1 className="animated-subtitle">{slide.subtitle}</h1>
            <p className="animated-description">{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
