import React from "react";
import Card from "./Card";

import image1 from '../Images/sliderteam.jpg';
import samplePdf from '../Files/doc.pdf';  // Asegúrate de que esta ruta sea correcta

const cards = [
    {
        id: 1,
        title: "Name1 Name2 Last1 Last2",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
      },
      {
        id: 1,
        title: "Name1 Name2 Last1 Last2",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
      },
      {
        id: 1,
        title: "Name1 Name2 Last1 Last2",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
      },
      {
        id: 1,
        title: "Name1 Name2 Last1 Last2",
        image: image1,
        pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
        text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
      },
  {
    id: 1,
    title: "Name1 Name2 Last1 Last2",
    image: image1,
    pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
    text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
  },
  {
    id: 1,
    title: "Name1 Name2 Last1 Last2",
    image: image1,
    pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
    text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
  },
  {
    id: 1,
    title: "Name1 Name2 Last1 Last2",
    image: image1,
    pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
    text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
  },
  {
    id: 1,
    title: "Name1 Name2 Last1 Last2",
    image: image1,
    pdfUrl: samplePdf,  // Agrega la URL del PDF aquí
    text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
  },

  // Agrega más tarjetas si es necesario
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, pdfUrl, id, text }) => (
          <div className="col-md-4 mb-4" key={id}>
            <Card imageSource={image} title={title} text={text} pdfUrl={pdfUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
