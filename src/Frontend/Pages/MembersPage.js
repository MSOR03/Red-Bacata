import React from 'react';
import Slider from '../Components/Slider';
import image1 from '../Images/sliderteam.jpg';
import Cards from "../Components/Cards";
import "../Styles/MembersPage.css";


const MembersPage = () => {
    const slides = [
        {
            image: image1,
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
            <div>
                <Slider slides={transformedSlides} />
            </div>

            <div className="members-page-container">
                <h1 className="members-page-title">Nuestro equipo</h1>
                <Cards />
            </div>


        </div>
    )
}

export default MembersPage