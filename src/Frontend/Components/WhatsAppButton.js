// src/Components/WhatsAppButton.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../Styles/WhatsAppButton.css'; // Asegúrate de importar los estilos

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573224152675?text=Hola!!,%20me%20interesa%20contactar%20con%20ustedes."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
