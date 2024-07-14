import React from 'react';
import Slider from '../Components/Slider';
import "../Styles/MembersPage.css";
import img1 from '../Images/sliderteam.jpg'
import Card from "../Components/Card.js";
import image1 from '../Images/detective-privado.png';
import image2 from '../Images/investigar.png'
import samplePdf from '../Files/doc.pdf';  // Asegúrate de que esta ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

export const investigators = [
    {
        id: 1,
        title: "BUSTOS VELAZCO, EDIER HERNAN",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Coordinador de la red BACATÁ – IT en la Universidad Distrital Francisco José de Caldas.",
    },
    {
        id: 2,
        title: "PEREZ CARVAJAL, EDWIN ROBERT",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Desarrollar protagonismo desde las líneas de investigación pera la toma de decisiones sobre el territorio y para la solución de las problemáticas que este tenga",
    },
    {
        id: 3,
        title: "TORRIJOS CADENA, GERMAN",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Brindar como especialista en percepción remota y manejo de imágenes satelitales capacitaciones a aquellas personas que deseen conocer o ampliar su conocimiento en cuanto a las tecnologías de punta que pueden aportar a un mejor reconocimiento del territorio",
    },
    {
        id: 4,
        title: "BAUTISTA HERRERA, HAYDER OSVALDO",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Generar impacto social y humano, propiciando una buena relación hombre entorno – hombre territorio, aportando así a la transformación de la sociedad y a cambios de impacto positivo en el territorio; disminuyendo el facilismo al que está acostumbrado el ser humano lo que lleva a una depredación medio ambiental irreversible",
    },
    {
        id: 5,
        title: "ESPINOSA GARCIA, HELMUT",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "La formulación de estrategias para el conocimiento del territorio como eje principal para el desarrollo de la sostenibilidad territorial, esto debido a que la inteligencia territorial involucra el conocimiento socio-ambiental para la participación clara y activa en la diferente toma de decisiones",
    },
    {
        id: 6,
        title: "OSORIO BAQUERO, ISMAEL",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Para mí es muy importante la investigación desde la Inteligencia Territorial, que es en lo que basa la red BACATÁ – IT, ya que se trabaja desde el punto de vista de cómo vive hoy la sociedad en Latinoamérica, partiendo de que a los gobiernos no les interesa el desarrollo de las comunidades que se encuentran en la base piramidal y que es con quienes decide trabajar la red",
    },
    {
        id: 7,
        title: "USSA GARZÓN, JAIME EDDY",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "No se trata de prohibir sino de ver cómo la sociedad genera procesos productivos minimizando los impactos ambientales y logrando la convivencia de los seres humanos con el planeta. Es por eso que como docente e Investigador deseo aportar a los jóvenes desde la experiencia esa semilla de inquietud, que haga que sean futuros investigadores o creadores de procesos que aporten beneficios a la sociedad",
    },
    {
        id: 8,
        title: "BONILLA ROMERO, JULIO HERNAN",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Algo que me motiva a investigar es implementar lo que en el sistema occidental se ha venido perdiendo y es que en la vida todo está unido, todas la ciencias confluyen,  se puede hacer ingeniería relacionada con la astronomía y los mismos procesos de actividades culturales se pueden ligar al desarrollo del territorio",
    },
    {
        id: 9,
        title: "RODRIGUEZ BERNAL, LUIS LEONARDO",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Como investigador en el área del catastro multipropósito, que permite conocer lo que compone el territorio y cuales aspectos mejorar en el mismo, aportar al desarrollo del país en el marco de posconflicto",
    },
    {
        id: 10,
        title: "BERNAL SUAREZ, NESTOR RICARDO",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Proponer y explorar el uso de métodos estadísticos para los análisis relacionados con inteligencia territorial y brindar la oportunidad de que los estudiantes conozcan su importancia a partir de la creación de conversatorios",
    },
    {
        id: 11,
        title: "PALACIOS PALACIOS, OLGA ISABEL",
        image: image2,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Lo que me motiva a investigar desde mis áreas de especialización es que la sociedad aún no conoce la importancia de la prevención de riesgos y de cómo la organización en los territorios puede prevenirlos",
    }

    // Agrega más tarjetas si es necesario
];



const MembersPage = () => {
    const slides = [
        {
            image: img1,
            title: 'Investigadores ',
            subtitle: 'Miembros del equipo Red Bacatá',
            description: 'En nuestro equipo hay mas de doce investigadores altamente capacitados , a continuacion, se podran visualizar.'
        },

    ];

    //Cards 


    return (
        <div>
            <div>
                <Slider slides={slides} />
            </div>
            <section id="miembros">
                <div className="members-page-container">
                    <h1 className="members-page-title"><FontAwesomeIcon icon={faUserGraduate} /> Nuestros Investigadores</h1>
                    {/*Desde aqui cards*/}
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row">

                            {investigators.map(({ title, image, pdfUrl, id, text }) => (
                                <div className="col-md-4 mb-4" key={id}>
                                    <Card
                                        imageSource={image}
                                        title={title}
                                        text={text}
                                        pdfUrl={pdfUrl}
                                        id={`investigator-${id}`}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                    {/*Hasta aca cards*/}

                </div>
            </section>


        </div>
    )
}

export default MembersPage