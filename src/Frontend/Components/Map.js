import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../Styles/Map.css';
import image from '../Images/mapa.png';
import campusImage from '../Images/slider3.jpg'; // Asegúrate de tener una imagen para mostrar en el popup

const Map = () => {
  const position = [4.597189, -74.064511]; // Coordenadas de la Universidad Distrital Francisco José de Caldas sede Vivero

  // Configura un icono personalizado para el marcador
  const customIcon = new L.Icon({
    iconUrl: image,
    iconSize: [32, 32], // Tamaño del icono
    iconAnchor: [16, 32], // Punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -32], // Punto desde el que se abre el popup en relación al icono
  });

  return (
    <div className="map-container">
      <h2 className="map-title">Nuestra Ubicación</h2>
      <MapContainer center={position} zoom={21} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false} zoomControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div>
              <h6>Universidad Distrital Francisco José de Caldas sede Vivero</h6>
              <p>Cra. 5 #15-82, Bogotá<br />Bogotá, Colombia.</p>
              <img src={campusImage} alt="Campus" style={{ width: '40%', height: '30%', borderRadius: '8px' }} />
            </div>
          </Popup>
        </Marker>
        {/* Agregamos los controles de zoom en la parte inferior derecha */}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
