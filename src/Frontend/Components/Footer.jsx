// src/components/Footer.js
import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start text-white">
        {/* Sección de redes sociales */}
        <section className="footer-social p-4">
          <div className="container d-flex justify-content-between">
            <div className="me-5">
              <span className="social-text">Conéctate con nosotros en las redes sociales:</span>
            </div>
            <div>
              <a href="https://facebook.com" className="text-white me-4" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-4" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://plus.google.com" className="text-white me-4" aria-label="Google Plus">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-4" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white me-4" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" className="text-white me-4" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Sección de enlaces y texto */}
        <section className="footer-info bg-dark text-white py-4">
          <div className="container footer-info-content">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Red Bacatá</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>Red de investigación sobre el territorio y sus peculiaridades formada por docentes de la Universidad Distrital.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Servicios</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#research" className="text-white">Investigación</a>
                </p>
                <p>
                  <a href="#extension" className="text-white">Extensión</a>
                </p>
                <p>
                  <a href="#support" className="text-white">Apoyo</a>
                </p>
                <p>
                  <a href="#internships" className="text-white">Pasantías</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Dependencias</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="https://comunidad.udistrital.edu.co/investudcn10/red-bacata-it/" className="text-white">Red Bacatá UD</a>
                </p>
                <p>
                  <a href="https://fambiental.udistrital.edu.co/" className="text-white">Facultad Medio Ambiente y Recursos Naturales</a>
                </p>
                <p>
                  <a href="https://www.udistrital.edu.co/inicio" className="text-white">Universidad Distrital Francisco Jóse de Caldas</a>
                </p>
                <p>
                  <a href="#help" className="text-white">Ayuda</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contacto</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a className='text-white' href="https://www.google.com/maps/place/Universidad+Distrital+Francisco+Jos%C3%A9+de+Caldas+-+Sede+Vivero/@4.5971488,-74.0671634,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f99baafbff511:0x5038a78cdb954036!8m2!3d4.5971488!4d-74.0645885!16s%2Fg%2F11bx2l1qtz?entry=ttu" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-home mr-3"></i>Cra. 5 #15-82, Bogotá
                  </a>
                </p>
                <p>
                  <a className='text-white' href="mailto:redbacatait@gmail.com">
                    <i className="fas fa-envelope mr-3"></i> redbacatait@gmail.com
                  </a>
                </p>
                <p><i className="fas fa-phone mr-3"></i> + 57 310-205-63-42</p>
                <p><i className="fas fa-print mr-3"></i> + 13 29-1322 323-9300</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de pie de página */}
        <div className="footer-bottom py-3">
          <div className="container text-center">
            © 2024 Copyright: React
          </div>
        </div>
      </footer>
    </div >
  );
};

export default Footer;
