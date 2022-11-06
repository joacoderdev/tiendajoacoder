import "./style.css";
const AboutUs = () => {

  return (
    <>
      <div className="aboutus_container">
        <h1 className="home_title">Sobre Nosotros, o sobre mi</h1>
        <h2 className="home_subtitle" data-aos="flip-down">
          JOACODER es un proyecto de REACT acerca de una tienda
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
              Esta página fue creada para hacer usos de lo aprendido durante el curso de REACT encabezado por ERIC. Asimismo, mostrarles mi tienda
            </p>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-ydBNqh9-YfDnEmejw8pVRa3hWnYoqIvMQ&usqp=CAU"
              alt="juegos"
            />
          </div>
        </div>
        <h2 className="home_subtitle" data-aos="flip-down">
          ¿Tienda de que?
        </h2>
        <div className="text_container">
          <div data-aos="zoom-in-up" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iJTTXZKyVdYHSbgBvTKbAxsCNA3vJIG0hB985Syjsyya6tGCdnuqua_J0RFm2y98Nu0&usqp=CAU"
              alt="perifericos"
            />
          </div>
          <div
            className="text_container_flex" 
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <p className="textoInicioDos">
              JOACODER es una tienda de computacion. Videojuegos, perifericos y componentes
            </p>
          </div>
        </div>
        <h2 className="home_subtitle" data-aos="flip-down">
          Se agregaran productos nuevos?
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
              Si. Agregaremos productos nuevos. Asimismo, tambien agregaremos a corto plazo una nueva categoria de productos! Escritorios, con medidas a eleccion y color a su gusto.
            </p>
          </div>
        </div>
        <div className="escritorio">
          <img 
            className="imagen_full"
            src="https://images.fravega.com/f1000/8d98b069ec942caf3240828003407897.jpg"
            alt="escritorio"
          />
        </div>        
        <h2 className="home_subtitle" data-aos="flip-down">
          ¿Son realmente recomendados nuestros productos?
        </h2>
         <div className="text_container">
         <div data-aos="zoom-in-down" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://http2.mlstatic.com/D_NQ_NP_602647-MLA47179178400_082021-O.webp"
              alt="perifericos"
            />
          </div>
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
            Absolutamente. Vendemos productos de primera calidad
            </p>
          </div>
          
        </div>
        
        <h2 className="home_subtitle" data-aos="flip-down">
          Y si llegaste hasta aca te agradezco mucho!
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
              Estoy muy contento por haber aprendido REACT
            </p>
          </div>
        </div>
      </div>
    </>
    )
};

export default AboutUs;
