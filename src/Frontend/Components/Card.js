import React from "react";
import PropTypes from "prop-types";
import "../Styles/Card.css";
import hoverSoundFile from "../Sounds/click-21156.mp3"; // Importa el archivo de sonido

function Card({id, imageSource, title, text, url, pdfUrl }) {
    const playSound = () => {
      const audio = new Audio(hoverSoundFile);
      audio.play();
    };
  
    return (
      <div 
        id={id}
        className="card text-center animate__animated animate__fadeInUp"
        onMouseEnter={playSound}
      >
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="descriptionText">
            {text || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
          </p>
          <a
            href={pdfUrl ? pdfUrl : "#!"} // Asegúrate de que pdfUrl se pase como prop
            target="_blank"
            className="btn btn-outline-secondary"
            rel="noreferrer"
          >
            Ver más
          </a>
        </div>
      </div>
    );
  }
  
  Card.propTypes = {
    id:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    pdfUrl: PropTypes.string.isRequired,  // Asegúrate de que pdfUrl sea una prop requerida
    imageSource: PropTypes.string
  };
  
  export default Card;