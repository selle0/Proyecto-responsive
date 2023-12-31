import React from "react";
import { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

export const Home = () => {
  const [contactInfo, setContactInfo] = useState({
    // Aquí puedes agregar la información de contacto
    phone: "653 517 0396",
    email: "facturasenorsushi@gmail.com",
    address: "C. 43 4300, Progreso, 83458 San Luis Río Colorado, Son.",
    
  });

  const sectionStyle = {
    padding: "20px",
    background: "linear-gradient(to bottom, #FFFFFF)",
    minHeight: "100vh",
  };
  

  const carouselItemStyle = {
    textAlign: "center",
    maxHeight: "400px",
    overflow: "hidden",
    position: "relative",
  };

  const carouselImgStyle = {
    maxHeight: "300px",
    width: "auto",
    margin: "0 auto",
    filter: "brightness(50%)",
  };

  const contactStyle = {
    color: "#333",
    paddingTop: "40px",
  };

  const buttonStyle = {
    backgroundColor: "red",
    border: "none",
    width: "150px",
  };

  const handleContactClick = () => {
    // Función para manipular el contacto si es necesario
  };

  return (
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/244643163_4191069864335442_9216684742324504193_n.png?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=d1LKUNDTlrYAX-5eEVe&_nc_ht=scontent-lax3-1.xx&oh=00_AfCTMs0kApIUhDi__VVN9u8QlK4vPKKOFIDzb5s4AAxqEA&oe=656CC210" className="d-block w-100" alt="Slide 1" />
          
        </div>
        <div className="carousel-item">
          <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/272825895_4580286292080462_1397370603379805658_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9534ce&_nc_ohc=Kwd-R43FdpkAX_Sx0Vd&_nc_ht=scontent-lax3-1.xx&oh=00_AfBiUGpcdJhb-0_O2FFu5-jgs4pBd1OXCsYf3WDAemEF9A&oe=656DB15D" className="d-block w-100" alt="Slide 2" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div style={sectionStyle}>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>BIENVENIDO AL SEÑOR SUSHI</h1>
      <p style={{ textAlign: "center", fontSize: "1.2em", fontStyle: "italic" }}>
        Disfruta de la exquisitez oriental en cada bocado con Señor Sushi, donde la tradición se fusiona con el sabor contemporáneo.
      </p>

      <div className="container mt-4">
        <Carousel interval={null} style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Carousel.Item style={carouselItemStyle}>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/p/AF1QipMVuJvBC1j3K0OEn9pHsfBoBp5nSbPXecCgdEFq=s680-w680-h510"
              alt="Imagen 1"
              style={carouselImgStyle}
            />
            <Carousel.Caption>
              <h3>Señor Sushi & Teriyaki 2-Go</h3>
              <p>
                <Button
                  variant="primary"
                  href="https://maps.app.goo.gl/LtEq1t23FJxqg3mo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
                  style={{ backgroundColor: "red", border: "none", width: "150px" }}
                  block
                >
                  Ir a mapa
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyle}>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/p/AF1QipNa1VLlpCx6MQiXTUTKI15c3bQnjMpygJ959TV3=s680-w680-h510"
              alt="Imagen 1"
              style={carouselImgStyle}
            />
            <Carousel.Caption>
              <h3>Señor Sushi</h3>
              <p>
                <Button
                  variant="primary"
                  href="https://maps.app.goo.gl/4QDxcRM8PpzqDoM1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
                  style={{ backgroundColor: "red", border: "none", width: "150px" }}
                  block
                >
                  Ir a mapa
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div><br></br>
      <div className="d-flex justify-content-center">
      <img src="./img/promocion.png" alt="Descripción de la imagen" />
    </div>
      <div className="container mt-4" style={contactStyle}>
        <div className="row">
          <div className="col-md-6">
            <h2>Contacto</h2>
            <p>
              Teléfono: {contactInfo.phone} <br />
              Email: {contactInfo.email} <br />
              Dirección: {contactInfo.address}
            </p>
            {/* Agrega más información de contacto si es necesario */}
          </div>
          {/* Agrega más columnas o información de contacto si es necesario */}
        </div>
      </div>
    </div>
  </div>
  );
};

