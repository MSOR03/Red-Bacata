// src/Pages/ServicesPage.js
import React from 'react';
import Gallery from '../Components/Gallery';
import '../Styles/ServicesStyle.css'; // Asegúrate de tener estilos adicionales si es necesario
import Slider from '../Components/Slider';
import img1 from '../Images/slider1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell} from '@fortawesome/free-solid-svg-icons';

const ServicesPage = () => {

    const slides = [
        {
            image: img1,
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


    return (
        <div>
            <Slider slides={transformedSlides} />
            <div className="services-page">
                <h1><FontAwesomeIcon icon={faConciergeBell}/>Nuestros Servicios</h1>
                <Gallery />
            </div>
        </div>
    );
};

export default ServicesPage;
