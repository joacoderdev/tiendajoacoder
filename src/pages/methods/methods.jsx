import React from "react";

const methods = () => {
  return (
    <>
      <h1 className="home_title">METODOS DE FILTRADOS</h1>
      <div className="text_container">
        <div
          className="text_container_flex"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h4>
            En esta seccion te quiero contar acerca de los metodos de filtrado
            que vendemos
          </h4>
        </div>
      </div>

      <h2 className="home_subtitle" data-aos="flip-down">
        Perifericos
      </h2>
      <div className="text_container">
        <div
          className="text_container_flex"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <p className="textoInicioDos">
          Es la denominacion genérica para designar al aparato o dispositivo auxiliar e independiente conectado a la placa base de una computadora. Nosotros vendemos los mejores perifericos del pais. De las mejores marcas, y las mas recomendadas a nivel mundial.
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <img
            className="aboutus_img"
            src="https://sites.google.com/site/partesyperifericosdelapc/_/rsrc/1445722148466/welcome/Dock%20con%20MacBook%20y%20perifericos.jpg"
            alt="perifericos"
          />
        </div>
      </div>
      <h2 className="home_subtitle" data-aos="flip-down">
        Componentes
      </h2>
      <div className="text_container">
        <div data-aos="zoom-in-down" data-aos-duration="2000">
          <img
            className="aboutus_img"
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Componentes_de_un_PC.png"
            alt="componentes"
          />
        </div>
        <div
          className="text_container_flex"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <p>
          Para armar una computadora de escritorio, se necesitan varios componentes. Algunos son imprescindibles para su funcionamiento: gabinete, fuente de alimentación, placa madre, memoria RAM, disco rígido mecánico o en estado sólido, microprocesador, cooler CPU, conectores, cables y puertos. Aunque JOACODER, vende unicamente componentes para mejorar el PERFORMANCE de tu computadora. El rendimiento y la fluides, es fundamental para ser un jugador profesional!
          </p>
        </div>
      </div>
      <h2 className="home_subtitle" data-aos="flip-down">
        Videojuegos
      </h2>
      <div className="text_container">
        <div
          className="text_container_flex"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <p className="textoInicioDos">
            Una vez que tengas los mejores componentes para tu computadora, y los mejores perifericos para poder usar, tenes que probar nuestros mejores juegos. 
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <img
            className="aboutus_img"
            src="https://i.blogs.es/b50e16/conan_exiles_2.5-1_small/450_1000.jpeg"
            alt="juegos"
          />
        </div>
      </div>
    </>
  );
};

export default methods;
